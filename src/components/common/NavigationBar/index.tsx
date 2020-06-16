import React from 'react';
import {
  View,
  Text,
  TouchableWithoutFeedback,
  ImageSourcePropType,
} from 'react-native';
import getStyles, {
  NavigationBarStyle,
  NavigationBarType,
  ConfigColors,
} from './style';
import {useTheme} from '../Context';
import {mergeStyles} from '../Style';

import CommonIcon from '../IconFont';

export type ItemType = string | React.ReactNode;

export type NavigationBarProps = {
  title?: string | React.ReactNode;
  left?: ItemType;
  right?: ItemType;
  showLeft?: boolean;
  type?: NavigationBarType;
  color?: string; // 只对默认iconfont样式起作用
  onPressLeft?: () => void;
  onPressRight?: () => void;
  background?: ImageSourcePropType | React.ReactNode;
  showBottomBorder?: boolean;
  children?: any;
} & NavigationBarStyle;

export default (props: NavigationBarProps) => {
  const {
    title,
    left,
    right,
    showLeft = true,
    type,
    onPressLeft,
    onPressRight,
    background,
    children,
    color,
    showBottomBorder = true,
    ...resetProps
  } = props;

  const {theme} = useTheme();

  const styles = mergeStyles(getStyles(type, theme), resetProps);

  const backgoundDom = React.isValidElement(background) ? (
    <View style={styles.background}>{background}</View>
  ) : null;

  const titleDom = React.isValidElement(title) ? (
    title
  ) : typeof title === 'string' ? (
    <Text style={styles.titleStyle}>{title}</Text>
  ) : null;

  const leftDom = React.isValidElement(left) ? (
    left
  ) : typeof left === 'string' ? (
    <Text style={styles.leftTextStyle}>{left}</Text>
  ) : (
    <CommonIcon
      name="ic_arrow_left"
      size={22}
      color={
        color ||
        (Boolean(ConfigColors[type]) && ConfigColors[type].iconColor) ||
        theme.navigationCofig.left_back_color
      }
    />
  );

  const rightDom = React.isValidElement(right) ? (
    right
  ) : typeof right === 'string' ? (
    <Text style={styles.rightTextStyle}>{right}</Text>
  ) : null;

  return (
    <View style={styles.style}>
      {backgoundDom}
      <View
        style={[
          styles.wrapper,
          !showBottomBorder ? {borderBottomWidth: 0} : {},
        ]}>
        <View style={styles.navigationBarWrapper}>
          {titleDom && <View style={styles.titleWrapper}>{titleDom}</View>}

          {showLeft && leftDom && (
            <TouchableWithoutFeedback onPress={onPressLeft}>
              <View style={styles.leftWrapper}>{leftDom}</View>
            </TouchableWithoutFeedback>
          )}

          {rightDom && (
            <TouchableWithoutFeedback onPress={onPressRight}>
              <View style={styles.rightWrapper}>{rightDom}</View>
            </TouchableWithoutFeedback>
          )}
        </View>
      </View>
      {children}
    </View>
  );
};
