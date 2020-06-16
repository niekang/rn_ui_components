import darkTheme from './themes/dark';
import defaultTheme from './themes/default';
import Theme from './PropTypes';

// 主题样式枚举
export type ThemeType = 'default' | 'dark';

// 主题集合类型
type ThemesMap = {[P in ThemeType]: Theme};

// 所有主题集合对象
const themes: ThemesMap = {
  default: defaultTheme,
  dark: darkTheme,
};

export default themes;
