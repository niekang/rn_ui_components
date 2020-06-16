import React from 'react';
import {StyleProp, ImageStyle, ViewStyle, View, StyleSheet} from 'react-native';
import {useTheme} from '../../common/Context';
import Icon from '../IconFont';

type SelectionProps = {
  selected?: boolean;
  style?: StyleProp<ViewStyle>;
  iconStyle?: StyleProp<ImageStyle>;
  children?: React.ReactNode;
};

const Selection = (props: SelectionProps) => {
  const {selected, style, iconStyle, children} = props;
  const {
    theme: {bgColor},
  } = useTheme();

  return (
    <View
      style={[
        {backgroundColor: bgColor.container_bg_color, justifyContent: 'center'},
        StyleSheet.flatten(style),
      ]}>
      <Icon
        style={[{marginLeft: 12}, StyleSheet.flatten(iconStyle)]}
        name={selected ? 'ic_radio' : 'ic_radio_unchecked'}
      />
      {children}
    </View>
  );
};

export default Selection;
