import {StyleProp, ViewStyle, TextStyle} from 'react-native';

export type RunningLampPropsDirection = 'up' | 'down' | 'left' | 'right';

export type RunningLamStyle = {
  style?: StyleProp<ViewStyle>; // 容器样式
  textStyle?: StyleProp<TextStyle>; // 文字样式
  itemStyle?: StyleProp<ViewStyle>; // 单个item样式
  itemWrap?: StyleProp<ViewStyle>; // item包裹样式
};

export type RunningLampData = {
  label: string;
  value: string | number;
};

export type HorizontalRunningLampProps = {
  width?: number; // 容器宽度
  speed?: number;
  reverse?: boolean;
  separator?: number;
};

export type VerticalRunningLampProps = {
  numberOfLines?: number; // 文字行数
  headers?: React.ReactElement[]; // 文字左边视图
};

export type RunningLampProps = {
  data: string[] | RunningLampData[]; // 数据源
  duration?: number; // 动画时长
  height?: number; // 单个item高低
  direction?: RunningLampPropsDirection; // 滚动方向
  delay?: number; // 到下一次滚动的停留时间
  onClick?: (item: string | RunningLampData, index: number) => void; // 单个item 点击
} & HorizontalRunningLampProps &
  VerticalRunningLampProps &
  RunningLamStyle;
