import React from 'react';
import {useTheme} from '../Context';
import {View, StyleProp, ViewStyle} from 'react-native';

type PageViewProps = {
  style?: StyleProp<ViewStyle>;
  children?: React.ReactNode;
};

const PageView = (props: PageViewProps) => {
  const {theme} = useTheme();
  const {style, ...restProps} = props;
  return (
    <View
      style={[{backgroundColor: theme.bgColor.page_bg_color, flex: 1}, style]}
      {...restProps}
    />
  );
};

export default PageView;
