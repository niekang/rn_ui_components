import {Dimensions, Platform, StatusBar, PixelRatio} from 'react-native';

export const dimen = Dimensions.get('window');
export const DEVICE_WIDTH = dimen.width;
export const DEVICE_HEIGHT = dimen.height;

export const PR = PixelRatio.get();
export const Ratio = PR ? parseInt(PR.toString()) : 2;

export const isIphoneX =
  Platform.OS === 'ios' &&
  !Platform.isPad &&
  !Platform.isTVOS &&
  (DEVICE_WIDTH === 812 ||
    DEVICE_HEIGHT === 812 ||
    DEVICE_WIDTH === 896 ||
    DEVICE_HEIGHT === 896);

export const StatusBarHeight =
  Platform.OS === 'ios' ? (isIphoneX ? 44 : 20) : StatusBar.currentHeight;

export const NavgationBarHeight = 44;
export const BottomHeight = isIphoneX ? 34 : 0;
export const TabBarHeight = isIphoneX ? 83 : 49;

export default {
  DEVICE_WIDTH,
  DEVICE_HEIGHT,
  PR,
  Ratio,
  isIphoneX,
  StatusBarHeight,
  NavgationBarHeight,
  BottomHeight,
  TabBarHeight,
};
