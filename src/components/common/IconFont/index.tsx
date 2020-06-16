import React from 'react';
import {StyleProp, TextProps, ViewStyle, View} from 'react-native';
import {
  commonIcon,
  IconFontFamily,
  IconFontName,
  IconFontNameType,
} from './font';

const iconMap = {
  commonIcon: commonIcon,
};
interface IconProps extends TextProps {
  size?: 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | number;
  color?: string;
  fontFamily?: string;
  name: IconFontNameType;
  style?: StyleProp<ViewStyle>;
}

class CommonIcon extends React.Component<IconProps, any> {
  static IconFontName = IconFontName;

  render() {
    const {fontFamily = IconFontFamily, name, size, color, style} = this.props;
    if (!name) {
      throw new Error('name 解析错误！');
    }
    const CustomIcon = iconMap[fontFamily];

    if (!CustomIcon) {
      throw new Error('不存在此TTF文件或TTF引入失败！');
    }

    return (
      <View style={style}>
        <CustomIcon name={name} size={size} color={color} />
      </View>
    );
  }
}

export default CommonIcon;
