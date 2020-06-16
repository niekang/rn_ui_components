import React from 'react';
import {
  Animated,
  Easing,
  LayoutRectangle,
  LayoutChangeEvent,
  TextStyle,
  StyleProp,
  StyleSheet,
} from 'react-native';
import {DEVICE_WIDTH} from '../Device';

export type BarrageItemData = {
  label: string;
  value: number | string;
};

const defaultProps = {
  from: DEVICE_WIDTH,
  speed: 10,
};

type BarrageItemProps = {
  style?: StyleProp<TextStyle>;
  data: BarrageItemData;
  lastVisibleLayout?: LayoutRectangle;
  onPress?: (item: BarrageItemData) => void;
  onStop?: (layout: LayoutRectangle) => void;
  onVisible?: (layout: LayoutRectangle) => void;
} & Partial<typeof defaultProps>;

type State = {
  left: Animated.Value;
};

const duration = 3000;

export default class BarrageItem extends React.Component<BarrageItemProps> {
  static defaultProps = defaultProps;

  state: State;

  layout?: LayoutRectangle;

  animation: Animated.CompositeAnimation;

  isVisible = false; //是否完全可见

  onVisibleLeftAnimationDuration?: number;

  constructor(props: BarrageItemProps) {
    super(props);
    this.state = {
      left: new Animated.Value(props.from),
    };
  }

  shouldComponentUpdate(nextProps: BarrageItemProps) {
    return this.props.data !== nextProps.data;
  }

  getDuration = (): number => {
    const {from} = this.props;
    const l = from + this.layout.width;
    const leftL = this.layout.x + this.layout.width;
    const t = (l * duration) / from;
    return (leftL / l) * t;
  };

  startAnimation = () => {
    if (!this.layout) {
      return;
    }
    const leftTime = this.getDuration();
    this.animation = Animated.timing(this.state.left, {
      toValue: -this.layout.width,
      duration: leftTime,
      useNativeDriver: false,
      easing: Easing.linear,
    });
    this.animation.start((result) => {
      this.onStop(result.finished);
    });
  };

  stopAnimation = () => {
    if (!this.animation) {
      return;
    }
    this.animation.stop();
  };

  onStop = (finished: Boolean) => {
    const {onStop} = this.props;
    if (finished) {
      this.isVisible = false;
      this.animation = null;
      finished && onStop && onStop(this.layout);
    }
  };

  onLayout = (event: LayoutChangeEvent) => {
    this.layout = event.nativeEvent.layout;
    const {x, width} = this.layout;
    !this.animation && this.startAnimation();
    const {from, onVisible} = this.props;
    if (x + width <= from && !this.isVisible) {
      this.isVisible = true;
      this.onVisibleLeftAnimationDuration = this.getDuration();
      onVisible && onVisible(this.layout);
    }
  };

  render() {
    const {data, onPress, style} = this.props;
    const {left} = this.state;
    return (
      <Animated.Text
        style={[
          {height: 30, justifyContent: 'center', paddingHorizontal: 5},
          StyleSheet.flatten(style),
          {position: 'absolute', top: 0, bottom: 0, left: left},
        ]}
        onLayout={this.onLayout}
        onPress={onPress ? () => onPress(data) : undefined}>
        {data.label}
      </Animated.Text>
    );
  }
}
