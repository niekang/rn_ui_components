import React, {Component} from 'react';
import {
  View,
  Animated,
  Easing,
  Text,
  TouchableWithoutFeedback,
  StyleSheet,
} from 'react-native';
import {RunningLampProps, RunningLampData} from './PropTypes';

export type RunningLampState = {
  data: string[] | RunningLampData[];
  animation?: Animated.CompositeAnimation;
  maxIndex?: number;
  textIndex?: number;
  index?: number;
};

/**
 *纵向跑马灯
 *
 * @export
 * @class VerticalRunningLamp
 * @extends {Component<RunningLampProps>}
 */
export default class VerticalRunningLamp extends Component<RunningLampProps> {
  state: RunningLampState = {
    animation: undefined,
    data: [],
    maxIndex: 0,
    textIndex: 0,
    index: 1,
  };

  static defaultProps: RunningLampProps = {
    duration: 500,
    data: [],
    width: 375,
    height: 12,
    delay: 3000,
    direction: 'up',
    numberOfLines: 1,
    onClick: () => {},
  };

  animatedTransformY?: Animated.Value = null;

  componentWillMount() {
    this.setState({
      data: this.props.data || [],
    });
    this.animatedTransformY = new Animated.Value(0);
  }

  componentDidMount() {
    const {data, direction} = this.props;
    this.setState({
      maxIndex: data.length + 2,
      textIndex: data.length,
      index: direction === 'down' ? data.length : 1,
    });
  }

  componentWillReceiveProps(nextProps: RunningLampProps) {
    const newData = nextProps.data || [];
    const oldData = this.props.data || [];
    const newDirection = nextProps.direction || 'up';
    if (newData !== oldData) {
      this.state.animation && this.state.animation.stop();
      this.setState({
        data: newData,
        maxIndex: newData.length + 2,
        textIndex: newData.length,
        index: newDirection == 'down' ? newData.length : 1,
        animation: null,
      });
    }
  }

  componentDidUpdate() {
    const {index, maxIndex, textIndex} = this.state;
    const {duration, delay, height, direction} = this.props;
    if (!this.state.animation) {
      let myIndex = 0;
      let yValue = 0;
      let yToValue = 0;
      if (direction == 'down') {
        myIndex = index;
        yValue = myIndex * height;
        yToValue = 0;
        if (myIndex > 0) {
          yToValue = (myIndex - 1) * height;
          this.setState({
            index: --this.state.index,
          });
        } else {
          yValue = textIndex * height;
          yToValue = (textIndex - 1) * height;
          this.setState({
            index: textIndex - 1,
          });
        }
      } else if (direction == 'up') {
        myIndex = index + 1;
        yValue = (myIndex - 1) * height;
        yToValue = 0;
        if (myIndex >= maxIndex) {
          yValue = 1 * height;
          yToValue = 2 * height;
          this.setState({
            index: 2,
          });
        } else {
          yToValue = myIndex * height;
          this.setState({
            index: ++this.state.index,
          });
        }
      }

      this.animatedTransformY.setValue(-yValue);
      this.setState(
        {
          animation: Animated.timing(this.animatedTransformY, {
            toValue: -yToValue,
            duration: duration,
            useNativeDriver: true,
            easing: Easing.linear,
            delay: delay,
          }),
        },
        () => {
          this.state.animation &&
            this.state.animation.start(() => {
              this.setState({
                animation: null,
              });
            });
        },
      );
    }
  }

  componentWillUnmount() {
    this.state.animation && this.state.animation.stop();
  }

  singleLineTextView(list: string[] | RunningLampData[]) {
    let {
      textStyle,
      itemStyle,
      itemWrap,
      onClick,
      height,
      numberOfLines,
      headers,
    } = this.props;
    if (!list == null || list.length === 0) {
      return <View />;
    }
    let headViewList = [];
    let mHeadViewList = [];
    const itemView = [];
    let mlist = [];
    if (headers) {
      headViewList = headViewList.concat(headers);
      mHeadViewList = mHeadViewList.concat(headViewList);
      mHeadViewList.push(headViewList[0]);
      mHeadViewList.unshift(headViewList[headViewList.length - 1]);
    }
    mlist = mlist.concat(list);
    mlist.push(list[0]);
    mlist.unshift(list[list.length - 1]);
    for (let i = 0; i < mlist.length; i++) {
      let item = mlist[i];
      itemView.push(
        <TouchableWithoutFeedback
          key={i}
          onPress={() => {
            onClick(item, i);
          }}>
          <View style={[{flexDirection: 'row'}, StyleSheet.flatten(itemWrap)]}>
            <View
              style={[
                styles.viewStyle,
                {height: height},
                StyleSheet.flatten(itemStyle),
              ]}>
              {mHeadViewList ? mHeadViewList[i] : null}
              <Text
                style={[styles.textStyle, StyleSheet.flatten(textStyle)]}
                numberOfLines={numberOfLines}>
                {typeof item === 'string'
                  ? item
                  : (item as RunningLampData).label}
              </Text>
            </View>
          </View>
        </TouchableWithoutFeedback>,
      );
    }
    return (
      <Animated.View
        style={{transform: [{translateY: this.animatedTransformY}]}}>
        {itemView}
      </Animated.View>
    );
  }

  render() {
    const {height, style} = this.props;
    const {data} = this.state;
    return (
      <View
        style={[
          styles.bgContainerStyle,
          {height: height},
          StyleSheet.flatten(style),
          {opacity: this.state.animation ? 1 : 0},
        ]}>
        {this.singleLineTextView(data)}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bgContainerStyle: {
    overflow: 'hidden',
  },
  viewStyle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textStyle: {
    fontSize: 12,
    color: '#FD615B',
  },
});
