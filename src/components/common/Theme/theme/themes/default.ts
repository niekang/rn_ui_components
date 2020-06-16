/*
 * 默认主题
 */
import Theme, {
  TagLightColor,
  TagDeepColor,
  BgColor,
  GlobalColor,
  BorderColor,
  BorderRadiu,
  VertivalSpace,
  HorizontalSpace,
  FontType,
  TextColor,
  NavigationConfig,
  GradientColors,
} from '../PropTypes';

// 导航条相关配置
const navigationConfig: NavigationConfig = {
  backgroudColor: '#FFFFFF',
  left_back_color: '#333333',

  title_font_size: 18,
  left_text_font_size: 16,
  right_text_font_size: 16,

  title_font_Weight: 'bold',

  title_text_color: '#333333',
  left_text_color: '#333333',
  right_text_color: '#3072F6',
};
// 全局颜色
const nGlobalColor: GlobalColor = {
  primary_clor: '#3072F6',
  error_color: '#FD615B',
  warning_color: '#FD615B',
  success_color: '#3072F6',
  important_color: '#3072F6',
  waiting_color: '#FF9600',
  crm_active_color: '#3072F6',
  crm_invalid_color: '#3072F64D',
  crm_money_color: '#FD615B',
  crm_down_color: '#FD615B',
  crm_up_color: '#30C790',
  crm_notice_color: '#FF960026',
  crm_active_border_color: '#FFFFFF',
  crm_invalid_border_color: '#FFFFFF4D',
};

const gradientColors: GradientColors = {
  blue: {
    startColor: '#6595F7',
    endColor: '#3072F6',
  },
  orange: {
    startColor: '#FF865B',
    endColor: '#FF4300',
  },
};

// 文字颜色
const nTextColor: TextColor = {
  text_color: '#333333',
  text_color_revert: '#FFFFFF',
  text_color_secondary: '#666666',
  crm_text_color_secondary_revert: '#FFFFFF99',
  text_color_sub: '#999999',
  crm_text_color_sub_revert: '#FFFFFF66',
  text_color_disabled: '#FFFFFFB3',
  text_color_hint: '#CCCCCC',
  crm_text_color_notice: '#FF9600',
};

// 文字类型
const nFontType: FontType = {
  font_size: {
    size: 14,
    lineHeight: 20,
  },
  font_size_md: {
    size: 16,
    lineHeight: 22,
  },
  font_size_lg: {
    size: 18,
    lineHeight: 25,
  },
  font_size_xl: {
    size: 24,
    lineHeight: 33,
  },
  font_size_xxl: {
    size: 42,
    lineHeight: 59,
  },
  font_size_hint: {
    size: 12,
    lineHeight: 17,
  },
  font_size_tag: {
    size: 10,
    lineHeight: 14,
  },
};

// 深色标签
const nTagDeepColor: TagDeepColor = {
  crm_tag_deep_color1: '#3072F6',
  crm_tag_deep_color2: '#30C790',
  crm_tag_deep_color3: '#FD615B',
  crm_tag_deep_color4: '#FF9600',
  crm_tag_deep_color5: '#FFC300',
};

// 浅色标签
const nTagLightColor: TagLightColor = {
  crm_tag_light_color1: '#3072F626',
  crm_tag_light_color2: '#30C79026',
  crm_tag_light_color3: '#FD615B26',
  crm_tag_light_color4: '#FF960026',
  crm_tag_light_color5: '#FFC30026',
  crm_tag_light_color6: '#66666626',
  crm_tag_light_color7: '#FFFFFF26',
};
// 背景色
const nBgColor: BgColor = {
  page_bg_color: '#F5F5F5',
  container_bg_color: '#FFFFFF',
  crm_content_bg_color: '#F5F5F5',
  crm_data_bg_color: '#1F1F29',
  mask_color: '#00000099',
  crm_icon_color_secondary: '#999999',
};
// 边框色
const nBorderColor: BorderColor = {
  crm_separate_color1: '#DDDDDD',
  crm_separate_color2: '#99999966',
  border_color: '#EEEEEE',
};

// 圆角
const nBorderRadiu: BorderRadiu = {
  borderRadius_l: 2,
  borderRadius_m: 4,
  borderRadius_s: 5,
  borderRadius_xs: 8,
};

// 横间距
const nVertivalSpace: VertivalSpace = {
  vertival_l: 4,
  vertival_m: 6,
  vertival_s: 8,
  vertival_xs: 12,
  vertival_xxs: 16,
};
//  纵间距
const nHorizontalSpace: HorizontalSpace = {
  horizontal_xl: 16,
  horizontal_l: 12,
  horizontal_m: 8,
  horizontal_s: 4,
};

const normalTheme: Theme = {
  navigationCofig: navigationConfig,
  gradientColor: gradientColors,
  globalColor: nGlobalColor,
  textColor: nTextColor,
  fontType: nFontType,
  tagDeep: nTagDeepColor,
  tagLight: nTagLightColor,
  bgColor: nBgColor,
  borderColor: nBorderColor,
  borderRadiu: nBorderRadiu,
  vertivalSpace: nVertivalSpace,
  horizontalSpace: nHorizontalSpace,
};
export default normalTheme;
