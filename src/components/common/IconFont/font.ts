import {createIconSet} from 'react-native-vector-icons';

export const common_UI = {
  ic_cancel: 58902,
  ic_mic: 58903,
  ic_arrow_right: 58904,
  ic_help: 58905,
  ic_camera: 58906,
  ic_notice: 58918,
  ic_arrow_up: 58919,
  ic_arrow_down: 58920,
  ic_arrow_left: 58921,
  ic_add: 58922,
  ic_close: 58923,
  ic_explain: 58924,
  ic_search: 58926,
  ic_share: 58927,
  ic_more: 58928,
  ic_more_spot: 58901,
  ic_position: 58930,
  ic_position_fill: 58931,
  ic_call_fill: 58932,
  ic_call: 58933,
  ic_checkbox: 58925,
  ic_checkbox_unchecked: 58929,
  ic_radio: 58934,
  ic_radio_unchecked: 58935,
  ic_triangle_down: 58952,
  ic_info: 58910,
  ic_safe_fill: 58944,
  ic_tissue_fill: 58945,
  ic_switch_fill: 58946,
  ic_quit_fill: 58947,
  ic_device_fill: 58943,
  ic_tick: 58942,
  ic_edit: 58908,
  ic_list: 58915,
  ic_calendar: 58917,
  ic_fold: 58951,
  ic_spread: 58952,
  ic_history: 58936,
};

export type IconFontNameType = keyof typeof common_UI;

const IconFontName: {[k in IconFontNameType]?: k} = {};

for (const key in common_UI) {
  IconFontName[key] = key;
}

const IconFontFamily = 'commonIcon';

const commonIcon = createIconSet(common_UI, 'iconfont', 'iconfont.ttf');

export {IconFontName, IconFontFamily, commonIcon};
