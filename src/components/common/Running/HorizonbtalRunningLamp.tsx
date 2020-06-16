import React, {Component} from 'react';
import {
  View,
  Animated,
  Easing,
  Text,
  TouchableWithoutFeedback,
  StyleSheet,
  LayoutChangeEvent,
} from 'react-native';
import {RunningLampProps, RunningLampData} from './PropTypes';

export type RunningLampState = {
  data: string[] | RunningLampData[];
  animation?: Animated.CompositeAnimation;
  textWidth?: number;
  viewWidth?: number;
};

/**
 *横向跑马灯
 *
 * @export
 * @class HorizonbtalRunningLamp
 * @extends {Component<RunningLampProps>}
 */
export default class HorizonbtalRunningLamp extends Component<
  RunningLampProps
> {
  state: RunningLampState = {
    data: [],
    textWidth: 0,
    viewWidth: 0,
    animation: undefined,
  };

  static defaultProps: RunningLampProps = {
    duration: 10000,
    speed: 70,
    data: [],
    width: 375,
    height: 12,
    direction: 'left',
    reverse: false,
    separator: 20,
    delay: 3000,
    onClick: () => {},
  };

  animatedTransformX?: Animated.Value = null;

  isFirstTime = true;

  componentWillMount() {
    this.setState({
      data: this.props.data || [],
    });
    this.animatedTransformX = new Animated.Value(0);
  }

  componentDidUpdate() {
    const {textWidth, viewWidth} = this.state;
    const {duration, speed, width, direction, delay} = this.props;
    let mDuration = duration;
    if (speed && speed > 0) {
      mDuration =
        ((this.isFirstTime ? textWidth : width + textWidth) / speed) * 1000;
    }
    if (!this.state.animation && textWidth && viewWidth) {
      !this.isFirstTime &&
        this.animatedTransformX.setValue(
          direction == 'left'
            ? width
            : direction == 'right'
            ? -textWidth
            : width,
        );
      this.setState(
        {
          animation: Animated.timing(this.animatedTransformX, {
            toValue:
              direction == 'left'
                ? -textWidth
                : direction == 'right'
                ? width
                : -textWidth,
            duration: mDuration,
            useNativeDriver: true,
            easing: Easing.linear,
            delay: this.isFirstTime ? delay : 0,
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
      this.isFirstTime = false;
    }
  }

  componentWillReceiveProps(nextProps: RunningLampProps) {
    const newData = nextProps.data || [];
    const oldData = this.props.data || [];
    if (newData !== oldData) {
      this.isFirstTime = true;
      this.state.animation && this.state.animation.stop();
      this.setState({
        data: newData,
        animation: null,
      });
    }
  }

  componentWillUnmount() {
    this.state.animation && this.state.animation.stop();
  }

  textOnLayout = (e: LayoutChangeEvent) => {
    const width = e.nativeEvent.layout.width;
    const {data, separator} = this.props;
    this.setState({
      textWidth: width + (data.length - 1) * separator,
    });
  };

  viewOnLayout = (e: LayoutChangeEvent) => {
    let width = e.nativeEvent.layout.width;
    this.setState({
      viewWidth: width,
    });
  };

  textView(list: string[] | RunningLampData[]) {
    const {textStyle, itemStyle, onClick, reverse, separator} = this.props;
    const itemView = [];
    for (let i = 0; i < list.length; i++) {
      const item = list[i];
      let label =
        typeof item === 'string' ? item : (item as RunningLampData).label;
      if (reverse) {
        label = label.split('').reverse().join('');
      }
      itemView.push(
        <TouchableWithoutFeedback
          key={'' + i}
          onPress={() => {
            onClick(item, i);
          }}>
          <View
            style={[
              StyleSheet.flatten(itemStyle),
              {
                flexDirection: 'row',
                marginRight: i < list.length - 1 ? separator : 0,
              },
            ]}>
            <Text
              style={[styles.textStyle, StyleSheet.flatten(textStyle)]}
              numberOfLines={1}>
              {label}
            </Text>
          </View>
        </TouchableWithoutFeedback>,
      );
    }
    return (
      <Animated.View
        style={{
          flexDirection: 'row',
          overflow: 'hidden',
          width: this.state.textWidth,
          transform: [{translateX: this.animatedTransformX}],
        }}
        onLayout={this.viewOnLayout}>
        {itemView}
      </Animated.View>
    );
  }

  textLengthView(list: string[] | RunningLampData[]) {
    const {textStyle} = this.props;
    let text = '';
    for (let i = 0; i < list.length; i++) {
      const item = list[i];
      text += typeof item === 'string' ? item : (item as RunningLampData).label;
    }
    return (
      <View
        style={{
          ...styles.textMeasuringViewStyle,
          width: text.length * 15,
        }}>
        <Text
          style={[styles.textMeasuringTextStyle, StyleSheet.flatten(textStyle)]}
          onLayout={(event) => this.textOnLayout(event)}
          numberOfLines={1}>
          {text}
        </Text>
      </View>
    );
  }

  render() {
    let {width, height, style} = this.props;
    let {data} = this.state;
    return (
      <View
        style={[
          styles.bgContainerStyle,
          {width: width, height: height},
          StyleSheet.flatten(style),
        ]}>
        {this.textView(data)}
        {this.textLengthView(data)}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bgContainerStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#FFFFFF',
    overflow: 'hidden',
  },
  textMeasuringViewStyle: {
    flexDirection: 'row',
    opacity: 0,
  },
  textMeasuringTextStyle: {
    fontSize: 12,
  },
  textStyle: {
    fontSize: 12,
    color: '#FD615B',
  },
});
