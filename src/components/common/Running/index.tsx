import React from 'react';
import VerticalRunningLamp from './VerticalRunningLamp';
import HorizonbtalRunningLamp from './HorizonbtalRunningLamp';
import {RunningLampProps} from './PropTypes';
import {useTheme} from '../Context';
import {ViewStyle, StyleSheet} from 'react-native';

export default (props: RunningLampProps & {horizontal?: boolean}) => {
  const {theme} = useTheme();

  const {style = {}} = props;

  const themeStyle: ViewStyle = {
    backgroundColor: theme.bgColor.container_bg_color,
  };

  const newProps = {
    ...props,
    style: [themeStyle, StyleSheet.flatten(style)],
  };

  return props.horizontal ? (
    <HorizonbtalRunningLamp {...newProps} />
  ) : (
    <VerticalRunningLamp {...newProps} />
  );
};
