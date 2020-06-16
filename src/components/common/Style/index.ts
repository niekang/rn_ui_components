import {ViewStyle, StyleProp, TextStyle, ImageStyle} from 'react-native';
import deepmerge from 'deepmerge';
import {Theme} from '../Theme';

export type WithStyles<T> = Partial<{
  style: StyleProp<ViewStyle>;
  styles: Partial<T>;
}>;

// 合并styles
export const mergeStyles = <T1, T2>(
  style1: Partial<T1>,
  style2: Partial<T2>,
): Partial<T1 & T2> => {
  return deepmerge<T1, T2>(style1 || {}, style2 || {});
};

type NamedStyles<T> = {[P in keyof T]: ViewStyle | TextStyle | ImageStyle};

type GetStyles<T> = (theme: Theme) => T | NamedStyles<T>;
// 定义样式
export function getStyles<T extends NamedStyles<T> | NamedStyles<any>>(
  styles: GetStyles<T>,
): GetStyles<T> {
  return styles;
}
