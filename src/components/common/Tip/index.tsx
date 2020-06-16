import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  StyleProp,
  ViewStyle,
  TextStyle,
} from 'react-native';
import {useTheme} from '../Context';

type TipType = 'warning' | 'success' | 'error' | 'waiting' | 'important';

type TipProps = {
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  title: string;
  type?: TipType;
};

export const Tip = (props: TipProps) => {
  const {title, type = 'warning', style, textStyle} = props;
  const {
    theme: {globalColor, fontType},
  } = useTheme();
  return (
    <View
      style={[
        {
          paddingLeft: 16,
          height: 38,
          justifyContent: 'center',
          backgroundColor: globalColor[type + '_color'] + '33',
        },
        StyleSheet.flatten(style),
      ]}>
      <Text
        style={[
          {
            fontSize: fontType.font_size.size,
            color: globalColor[type + '_color'],
          },
          textStyle,
        ]}>
        {title}
      </Text>
    </View>
  );
};

export default Tip;
