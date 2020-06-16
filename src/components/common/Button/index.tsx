import React from 'react';
import {
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  StyleSheet,
  StyleProp,
  TextStyle,
} from 'react-native';
import {useTheme} from '../Context';

export type Type =
  | 'normal'
  | 'primary'
  | 'disabled'
  | 'disabled-above-colored'
  | 'ghost-primary'
  | 'ghost-primary-disabled'
  | 'ghost-normal'
  | 'ghost-normal-disabled';

export type ButtonProps = {
  type?: Type;
  radius?: number;
  children?: any;
  textStyle?: StyleProp<TextStyle>;
  numberOfLines?: number;
} & TouchableOpacityProps;

type TypeStylesValue = {
  borderColor?: string;
  backgroundColor?: string;
  color: string;
  borderWidth?: number;
};

type TypeStyles = {[key in Type]: TypeStylesValue};

export default (props: ButtonProps) => {
  const {
    style,
    radius,
    children,
    type = 'primary',
    textStyle,
    numberOfLines = 1,
    activeOpacity = 1,
    ...restProps
  } = props;

  const {
    theme: {
      fontType: {font_size},
      globalColor,
      borderRadiu,
    },
  } = useTheme();

  const typeStyles: TypeStyles = {
    normal: {
      backgroundColor: globalColor.crm_active_border_color,
      color: globalColor.crm_active_color,
      borderWidth: 0,
    },
    primary: {
      backgroundColor: globalColor.crm_active_color,
      color: globalColor.crm_active_border_color,
      borderWidth: 0,
    },
    disabled: {
      backgroundColor: globalColor.crm_invalid_color,
      color: globalColor.crm_active_border_color + 'B3',
      borderWidth: 0,
    },
    'disabled-above-colored': {
      backgroundColor: globalColor.crm_invalid_border_color,
      color: globalColor.crm_active_color + 'B3',
      borderWidth: 0,
    },
    'ghost-primary': {
      color: globalColor.crm_active_color,
      borderColor: globalColor.crm_active_color,
      borderWidth: 1,
    },
    'ghost-primary-disabled': {
      color: globalColor.crm_invalid_color,
      borderColor: globalColor.crm_invalid_color,
      borderWidth: 1,
    },
    'ghost-normal': {
      color: globalColor.crm_active_border_color,
      borderColor: globalColor.crm_active_border_color,
      borderWidth: 1,
    },
    'ghost-normal-disabled': {
      color: globalColor.crm_invalid_border_color,
      borderColor: globalColor.crm_invalid_border_color,
      borderWidth: 1,
    },
  };

  const typeStyle = typeStyles[type];

  const childDom =
    typeof children === 'string' ? (
      <Text
        numberOfLines={numberOfLines}
        style={[
          {color: typeStyle.color, fontSize: font_size.size},
          numberOfLines > 1 ? {lineHeight: font_size.lineHeight} : {},
          textStyle,
        ]}>
        {children}
      </Text>
    ) : React.isValidElement(children) ? (
      children
    ) : null;

  return (
    <TouchableOpacity
      style={[
        typeStyle,
        {borderRadius: radius || borderRadiu.borderRadius_m},
        styles.style,
        StyleSheet.flatten(style),
      ]}
      disabled={
        type === 'disabled' ||
        type === 'disabled-above-colored' ||
        type === 'ghost-normal-disabled' ||
        type === 'ghost-primary-disabled'
      }
      activeOpacity={activeOpacity}
      {...restProps}>
      {childDom}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  style: {
    height: 49,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
