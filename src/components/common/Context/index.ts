import React from 'react';
import Theme from '../Theme/theme/PropTypes';
import themes, {ThemeType} from '../Theme/theme/index';
import {mergeStyles} from '../Style';

export interface ProviderValue {
  theme?: Readonly<Theme>; // 内部处理后对外暴露的样式集合对象
  themeType?: ThemeType; // 主题样式枚举
  onThemeChange?: (value: ProviderValue) => void; // 提供给外部切换主题用的回调
  customTheme?: Theme; // 自定义样式
}

// Provider value默认值
const defaultProvederValue: ProviderValue = {
  themeType: 'default',
  theme: themes.default,
  onThemeChange: ({}) => {},
};

const CRMContext = React.createContext(defaultProvederValue);

// 处理原始Provider value数据
const resolveProviderValue = (
  value: ProviderValue = defaultProvederValue,
): ProviderValue => {
  if (!value.themeType) {
    value.themeType = 'default';
  }
  let theme = themes[value.themeType];
  if (value.themeType !== 'default') {
    theme = mergeStyles(themes.default, theme);
  }
  if (value.customTheme) {
    theme = mergeStyles(theme, value.customTheme);
  }
  return {...value, theme: theme};
};

// 直接使用样式, 只能在函数式组件中使用
const useTheme = (): ProviderValue => {
  return resolveProviderValue(React.useContext(CRMContext));
};

export {CRMContext, useTheme, resolveProviderValue, mergeStyles};
