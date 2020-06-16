import React from 'react';
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';
import {useTheme} from '../Context';
import {WithStyles, mergeStyles} from '../Style';
import headerStyles, {HeaderStyles} from './style';
import Icon from '../IconFont';
import {IconFontNameType} from '../IconFont/font';

type HeaderProps = {
  title?: string;
  arrowText?: string;
  icon?: string | React.ReactNode;
  iconAlign?: 'left' | 'right';
  iconSize?: number;
  iconColor?: string;
  arrow?: boolean | 'left' | 'right';
  onPress?(): void;
} & WithStyles<HeaderStyles>;

const Header = (props: HeaderProps) => {
  const {
    style,
    styles,
    title,
    icon,
    iconColor,
    iconSize,
    iconAlign = 'left',
    arrow,
    arrowText,
    onPress,
  } = props;
  const {theme} = useTheme();
  const useStyles = mergeStyles(headerStyles(theme), styles);

  let iconDom = null;
  if (React.isValidElement(icon)) {
    iconDom = icon;
  } else if (typeof icon === 'string') {
    iconDom = (
      <Icon
        name={icon as IconFontNameType}
        color={iconColor}
        size={iconSize}
        style={[
          {width: iconSize || 14, height: iconSize || 14},
          iconAlign === 'left' && {marginRight: 5},
          iconAlign === 'right' && {marginLeft: 5},
          useStyles.icon,
        ]}
      />
    );
  }

  return (
    <TouchableOpacity
      activeOpacity={1}
      style={[useStyles.wrap, StyleSheet.flatten(style)]}
      onPress={onPress}>
      {iconAlign === 'left' && iconDom}
      <Text style={useStyles.title}>{title}</Text>
      {iconAlign === 'right' && iconDom}
      <View
        style={[
          useStyles.arrowWrap,
          {justifyContent: arrow === 'left' ? 'flex-start' : 'flex-end'},
        ]}>
        {Boolean(arrowText) && (
          <Text style={useStyles.arrowText}>{arrowText}</Text>
        )}
        {Boolean(arrow) && (
          <Icon
            size={12}
            name="ic_arrow_right"
            color={theme.textColor.text_color_hint}
          />
        )}
      </View>
    </TouchableOpacity>
  );
};

export default Header;
