import {ViewStyle, TextStyle, ImageStyle} from 'react-native';
import Theme from '../Theme/theme/PropTypes';

export type HeaderStyles = {
  wrap: ViewStyle;
  title: TextStyle;
  arrowText: TextStyle;
  titleLeft?: ViewStyle;
  titleRight: ViewStyle;
  arrowWrap: ViewStyle;
  icon?: ImageStyle;
};

export default (theme: Theme): HeaderStyles => {
  const {fontType, textColor, bgColor} = theme;
  return {
    wrap: {
      paddingHorizontal: 16,
      height: 40,
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: bgColor.container_bg_color,
    },
    title: {
      fontSize: fontType.font_size.size,
      color: textColor.text_color_secondary,
      marginRight: 4,
    },
    arrowText: {
      fontSize: fontType.font_size_hint.size,
      color: textColor.text_color_hint,
    },
    titleRight: {
      marginRight: 4,
    },
    arrowWrap: {
      flexDirection: 'row',
      alignItems: 'center',
      flex: 1,
    },
  };
};
