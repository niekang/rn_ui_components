import React from 'react';
import {View} from 'react-native';
import {DEVICE_WIDTH} from '../Device';
import BarrageItem, {BarrageItemData} from './BarrageItem';

const defaultProps = {
  width: DEVICE_WIDTH,
};

export type BarrageProps = {} & Partial<typeof defaultProps>;

type State = {
  items: BarrageItemData[];
};

export default class BarrageLine extends React.Component<BarrageProps, State> {
  static defaultProps = defaultProps;
  _defaultState: State = {
    items: [],
  };
  free = true;
  animations = {};
  barrageItemRefs: {[key in number | string]: BarrageItem} = {};

  constructor(props: BarrageProps) {
    super(props);
    this.state = this._defaultState;
  }

  shouldComponentUpdate(_: BarrageProps, nextState: State) {
    return this.state.items.length !== nextState.items.length;
  }

  addBarrage = (item: BarrageItemData) => {
    if (!this.free) {
      return;
    }
    const {items} = this.state;
    if (!item) {
      return;
    }
    this.free = false;
    this.setState({
      items: [...items, item],
    });
  };

  removeBarrage = (item: BarrageItemData) => {
    this.setState(
      {
        items: this.state.items.filter((o) => o.value !== item.value),
      },
      () => {
        this.barrageItemRefs[item.value] = undefined;
        if (this.state.items.length === 0) {
          this.free = true;
        }
      },
    );
  };

  start = () => {
    this.state.items.forEach((item) => {
      const ref = this.barrageItemRefs[item.value];
      ref && ref.startAnimation();
    });
  };

  stop = () => {
    setTimeout(() => {
      this.state.items.forEach((item) => {
        const ref = this.barrageItemRefs[item.value];
        ref && ref.stopAnimation();
      });
    }, 0);
  };

  renderBarrageLine = (item: BarrageItemData) => {
    return (
      <BarrageItem
        key={item.value + ''}
        data={item}
        from={this.props.width}
        ref={(ref) => {
          this.barrageItemRefs[item.value] = ref;
        }}
        onVisible={() => {
          this.free = true;
        }}
        onStop={() => {
          this.removeBarrage(item);
        }}
        onPress={(data) => {
          console.log(data.label);
        }}
      />
    );
  };

  render() {
    const {items} = this.state;
    return (
      <View
        style={{
          flexDirection: 'row',
          width: '100%',
          height: 30,
          alignItems: 'center',
        }}>
        {items.map(this.renderBarrageLine)}
      </View>
    );
  }
}
