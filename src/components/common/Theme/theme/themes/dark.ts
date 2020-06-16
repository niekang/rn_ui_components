/*
 * 暗黑主题
 */
import Theme, {
  TagLightColor,
  TagDeepColor,
  BgColor,
  GlobalColor,
  BorderColor,
  TextColor,
  NavigationConfig,
} from '../PropTypes';

// 导航条相关配置
const navigationConfig: NavigationConfig = {
  backgroudColor: '#191919',
  left_back_color: '#D9D9D9',

  title_font_size: 18,
  left_text_font_size: 16,
  right_text_font_size: 16,

  title_font_Weight: 'bold',

  title_text_color: '#D9D9D9',
  left_text_color: '#D9D9D9',
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
  crm_active_border_color: '#191919',
  crm_invalid_border_color: '#1919194D',
};

// 文字颜色
const nTextColor: TextColor = {
  text_color: '#D9D9D9',
  text_color_revert: '#FFFFFF',
  text_color_secondary: '#A6A6A6',
  crm_text_color_secondary_revert: '#FFFFFF99',
  text_color_sub: '#595959',
  crm_text_color_sub_revert: '#FFFFFF66',
  text_color_disabled: '#FFFFFFB3',
  text_color_hint: '#595959',
  crm_text_color_notice: '#FF9600',
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
  page_bg_color: '#0A0A0A',
  container_bg_color: '#191919',
  crm_content_bg_color: '#262626',
  crm_data_bg_color: '#1F1F29',
  mask_color: '#00000099',
  crm_icon_color_secondary: '#595959',
};
// 边框色
const nBorderColor: BorderColor = {
  crm_separate_color1: '#FFFFFF1F',
  crm_separate_color2: '#59595966',
  border_color: '#FFFFFF14',
};

const darkTheme: Theme = {
  navigationCofig: navigationConfig,
  globalColor: nGlobalColor,
  textColor: nTextColor,
  tagDeep: nTagDeepColor,
  tagLight: nTagLightColor,
  bgColor: nBgColor,
  borderColor: nBorderColor,
};
export default darkTheme;
