import {StyleSheet, StyleProp, ViewStyle, TextStyle} from 'react-native';
import Theme from '../../Theme/theme/PropTypes';
import {NavgationBarHeight, StatusBarHeight} from '../../Device';

const maxWidth = 100;

type Colors = {
  iconColor?: string;
  bgColor?: string;
  textColor?: string;
};

export type NavigationBarType = 'light';

export const ConfigColors: {[k in NavigationBarType]: Colors} = {
  light: {
    iconColor: '#ffffff',
    bgColor: 'transparent',
    textColor: '#fffFFF',
  },
};

export interface NavigationBarStyle {
  style?: StyleProp<ViewStyle>;
  wrapper?: ViewStyle;
  navigationBarWrapper?: ViewStyle;
  titleWrapper?: ViewStyle;
  leftWrapper?: ViewStyle;
  rightWrapper?: ViewStyle;
  titleStyle?: TextStyle;
  leftTextStyle?: TextStyle;
  rightTextStyle?: TextStyle;
  background?: ViewStyle;
}

export default (type: NavigationBarType, theme: Theme) => {
  const {bgColor, textColor} = ConfigColors[type] || {};
  return StyleSheet.create({
    style: {
      backgroundColor: bgColor || theme.navigationCofig.backgroudColor,
    },
    wrapper: {
      borderBottomWidth: 1,
      borderBottomColor: theme.borderColor.border_color,
      height: NavgationBarHeight + StatusBarHeight,
      width: '100%',
    },
    navigationBarWrapper: {
      marginTop: StatusBarHeight,
      flexDirection: 'row',
      flex: 1,
    },
    titleWrapper: {
      flex: 1,
      paddingLeft: 60,
      paddingRight: 60,
      justifyContent: 'center',
      alignItems: 'center',
    },

    leftWrapper: {
      position: 'absolute',
      left: 0,
      paddingHorizontal: theme.horizontalSpace.horizontal_l,
      bottom: 0,
      top: 0,
      flexDirection: 'row',
      alignItems: 'center',
      maxWidth: maxWidth,
    },

    rightWrapper: {
      position: 'absolute',
      right: 0,
      bottom: 0,
      top: 0,
      paddingHorizontal: theme.horizontalSpace.horizontal_l,
      flexDirection: 'row',
      justifyContent: 'flex-end',
      alignItems: 'center',
      maxWidth: maxWidth,
    },

    titleStyle: {
      fontSize: theme.navigationCofig.title_font_size,
      color: textColor || theme.navigationCofig.title_text_color,
      fontWeight: theme.navigationCofig.title_font_Weight,
    },

    leftTextStyle: {
      fontSize: theme.navigationCofig.left_text_font_size,
      color: textColor || theme.navigationCofig.left_text_color,
    },

    rightTextStyle: {
      fontSize: theme.navigationCofig.right_text_font_size,
      color: textColor || theme.navigationCofig.right_text_color,
    },

    background: {
      position: 'absolute',
      width: '100%',
      height: '100%',
    },
  });
};
