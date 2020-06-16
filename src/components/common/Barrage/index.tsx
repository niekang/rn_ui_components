import React from 'react';
import {View, StyleProp, ViewStyle, StyleSheet} from 'react-native';
import {BarrageItemData} from './BarrageItem';
import BarrageLine from './BarrageLine';

const defaultProps = {
  numberOfLines: 3,
};

export type BarrageProps = {
  style?: StyleProp<ViewStyle>;
  data: BarrageItemData[];
} & Partial<typeof defaultProps>;

export default class Barrage extends React.Component<BarrageProps> {
  static defaultProps = defaultProps;
  _stop? = false;
  _index = -1;
  _timer?: any;
  _data: BarrageItemData[] = [];
  _barrageRefs: {[key in number]: BarrageLine} = {};

  constructor(props: BarrageProps) {
    super(props);
    this._initData(props);
  }

  componentDidMount() {
    this._startTimer();
  }

  componentWillUnmount() {
    this._stopTimer();
  }

  componentWillReceiveProps(nextProps: BarrageProps) {
    if (
      nextProps.data !== this.props.data ||
      nextProps.numberOfLines !== this.props.numberOfLines
    ) {
      this._initData(nextProps);
    }
  }

  _initData = (props: BarrageProps) => {
    const {data = []} = props;
    this._index = -1;
    this._data = [...data];
  };

  _startTimer = () => {
    if (!this._timer) {
      this._timer = setInterval(this._checkFreeAndSendBarrage, 500);
    }
  };

  _stopTimer = () => {
    this._timer && clearInterval(this._timer);
    this._timer = null;
  };

  _checkFreeAndSendBarrage = () => {
    const data = this._data;
    if (this._stop) {
      return;
    }
    for (let i = 0; i < this.props.numberOfLines; i++) {
      if (data.length === 0) {
        return;
      }
      const ref = this._barrageRefs[i];
      const item = data[0];
      if (ref && ref.free && item) {
        data.splice(0, 1);
        ref.addBarrage(item);
      }
    }
  };

  addBarage = (item: BarrageItemData) => {
    if (!item) {
      return;
    }
    this._data = [item, ...this._data];
  };

  addBarageList = (list: BarrageItemData[] = []) => {
    if (list instanceof Array) {
      this._data.push(...list);
    }
  };

  start = () => {
    this._stop = false;
    this._checkFreeAndSendBarrage();
    this._startTimer();
    Array(3)
      .fill(0)
      .forEach((_, index) => {
        const ref = this._barrageRefs[index];
        ref && ref.start();
      });
  };

  stop = () => {
    this._stop = true;
    this._stopTimer();
    Array(3)
      .fill(0)
      .forEach((_, index) => {
        const ref = this._barrageRefs[index];
        ref && ref.stop();
      });
  };

  render() {
    const {numberOfLines, style} = this.props;
    return (
      <View
        style={[
          {width: '100%', height: 200, overflow: 'hidden'},
          StyleSheet.flatten(style),
        ]}>
        {Array(numberOfLines)
          .fill(0)
          .map((_, index) => {
            return (
              <BarrageLine
                key={index.toString()}
                ref={(ref) => {
                  this._barrageRefs[index] = ref;
                }}
              />
            );
          })}
      </View>
    );
  }
}
