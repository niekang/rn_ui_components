// 导航条相关配置
export type NavigationConfig = {
  backgroudColor?: string;

  left_back_color?: string;

  title_font_size?: number;
  left_text_font_size?: number;
  right_text_font_size?: number;

  title_font_Weight?: 'bold' | 'normal';

  title_text_color?: string;
  left_text_color?: string;
  right_text_color?: string;
};

// 渐变色【起始颜色及结束颜色】
export type GradientColor = {
  startColor?: string;
  endColor?: string;
};

// 文字大小及行高
export interface TextType {
  size?: number;
  lineHeight?: number;
}

// 全局颜色
export interface GlobalColor {
  primary_clor?: string; // 品牌色
  error_color?: string; // 错误
  warning_color?: string; // 警示
  success_color?: string; // 成功
  important_color?: string; // 重要色
  waiting_color?: string; // 等待
  crm_active_color?: string; // 激活状态按钮
  crm_invalid_color?: string; // 禁用状态按钮
  crm_active_border_color?: string; // 和背景同色激活按钮边框
  crm_invalid_border_color?: string; // 和背景同色禁用按钮边框
  crm_money_color?: string; // 重点金额
  crm_down_color?: string; // 下降
  crm_up_color?: string; // 上升
  crm_notice_color?: string; // 通知
}

export interface GradientColors {
  blue?: GradientColor; // 渐变色-蓝色
  orange?: GradientColor; // 渐变色-橙色
}

// 文字颜色
export interface TextColor {
  text_color?: string; // 主色
  text_color_revert?: string; // 主色-反色
  text_color_secondary?: string; // 次要
  crm_text_color_secondary_revert?: string; // 次要-反色
  text_color_sub?: string; // 辅助
  crm_text_color_sub_revert?: string; // 辅助-反色
  text_color_disabled?: string; // 禁用状态按钮
  text_color_hint?: string; // 提示
  crm_text_color_notice?: string; // 通知
}

// tag的深色背景色
export interface TagDeepColor {
  crm_tag_deep_color1?: string; // 深色tag
  crm_tag_deep_color2?: string; // 深色tag
  crm_tag_deep_color3?: string; // 深色tag
  crm_tag_deep_color4?: string; // 深色tag
  crm_tag_deep_color5?: string; // 深色tag
}

// tag的浅色背景色
export interface TagLightColor {
  crm_tag_light_color1?: string; // 浅色tag
  crm_tag_light_color2?: string; // 浅色tag
  crm_tag_light_color3?: string; // 浅色tag
  crm_tag_light_color4?: string; // 浅色tag
  crm_tag_light_color5?: string; // 浅色tag
  crm_tag_light_color6?: string; // 浅色tag
  crm_tag_light_color7?: string; // 浅色tag
}
// 背景色
export interface BgColor {
  page_bg_color?: string; // 页面背景
  container_bg_color?: string; // 组件默认背景
  crm_content_bg_color?: string; // 内容卡片背景
  crm_data_bg_color?: string; // 数据可视化背景
  mask_color?: string; // 遮罩背景、浮层背景
  crm_icon_color_secondary?: string; // 次要图标颜色
}

// 边框色
export interface BorderColor {
  crm_separate_color1?: string; // 弹窗分割线
  crm_separate_color2?: string; // 文字分割线
  border_color?: string; // 内容卡片背景
}

// 圆角
export interface BorderRadiu {
  borderRadius_l?: number;
  borderRadius_m?: number;
  borderRadius_s?: number;
  borderRadius_xs?: number;
}

// 横间距
export interface VertivalSpace {
  vertival_l?: number;
  vertival_m?: number;
  vertival_s?: number;
  vertival_xs?: number;
  vertival_xxs?: number;
}

// 纵间距
export interface HorizontalSpace {
  horizontal_xl?: number;
  horizontal_l?: number;
  horizontal_m?: number;
  horizontal_s?: number;
}
// 文字
export interface FontType {
  font_size?: TextType;
  font_size_tag?: TextType;
  font_size_hint?: TextType;
  font_size_md?: TextType;
  font_size_lg?: TextType;
  font_size_xl?: TextType;
  font_size_xxl?: TextType;
}

// iconfont字库
export interface IconFont {
  ic_cancel?: string;
  ic_mic?: string;
  ic_arrow_right?: string;
  ic_help?: string;
  ic_camera?: string;
  ic_notice?: string;
  ic_arrow_up?: string;
  ic_arrow_down?: string;
  ic_arrow_left?: string;
  ic_add?: string;
  ic_close?: string;
  ic_explain?: string;
  ic_search?: string;
  ic_more?: string;
  ic_share?: string;
  ic_position?: string;
  ic_position_fill?: string;
  ic_call_fill?: string;
  ic_call?: string;
  ic_checkbox?: string;
  ic_checkbox_unchecked?: string;
  ic_radio?: string;
  ic_radio_unchecked?: string;
  ic_triangle_down?: string;
  ic_info?: string;
}
// 主题色
export default interface Theme {
  navigationCofig?: NavigationConfig; // 导航条相关配置
  globalColor?: GlobalColor; // 全局色
  gradientColor?: GradientColors; // 渐变色
  textColor?: TextColor; // 文本颜色
  fontType?: FontType; // 文字属性
  tagDeep?: TagDeepColor; // 深色tag
  tagLight?: TagLightColor; // 浅色tag
  bgColor?: BgColor; // 背景色
  borderColor?: BorderColor; // 边框色
  borderRadiu?: BorderRadiu; // 圆角
  iconFont?: IconFont; // iconfont字库
  vertivalSpace?: VertivalSpace; // 横间距
  horizontalSpace?: HorizontalSpace; // 纵间距
}

// 颜色透明度16进制对照表
// 100% — FF
// 99% — FC
// 98% — FA
// 97% — F7
// 96% — F5
// 95% — F2
// 94% — F0
// 93% — ED
// 92% — EB
// 91% — E8
// 90% — E6
// 89% — E3
// 88% — E0
// 87% — DE
// 86% — DB
// 85% — D9
// 84% — D6
// 83% — D4
// 82% — D1
// 81% — CF
// 80% — CC
// 79% — C9
// 78% — C7
// 77% — C4
// 76% — C2
// 75% — BF
// 74% — BD
// 73% — BA
// 72% — B8
// 71% — B5
// 70% — B3
// 69% — B0
// 68% — AD
// 67% — AB
// 66% — A8
// 65% — A6
// 64% — A3
// 63% — A1
// 62% — 9E
// 61% — 9C
// 60% — 99
// 59% — 96
// 58% — 94
// 57% — 91
// 56% — 8F
// 55% — 8C
// 54% — 8A
// 53% — 87
// 52% — 85
// 51% — 82
// 50% — 80
// 49% — 7D
// 48% — 7A
// 47% — 78
// 46% — 75
// 45% — 73
// 44% — 70
// 43% — 6E
// 42% — 6B
// 41% — 69
// 40% — 66
// 39% — 63
// 38% — 61
// 37% — 5E
// 36% — 5C
// 35% — 59
// 34% — 57
// 33% — 54
// 32% — 52
// 31% — 4F
// 30% — 4D
// 29% — 4A
// 28% — 47
// 27% — 45
// 26% — 42
// 25% — 40
// 24% — 3D
// 23% — 3B
// 22% — 38
// 21% — 36
// 20% — 33
// 19% — 30
// 18% — 2E
// 17% — 2B
// 16% — 29
// 15% — 26
// 14% — 24
// 13% — 21
// 12% — 1F
// 11% — 1C
// 10% — 1A
// 9% — 17
// 8% — 14
// 7% — 12
// 6% — 0F
// 5% — 0D
// 4% — 0A
// 3% — 08
// 2% — 05
// 1% — 03
// 0% — 00
