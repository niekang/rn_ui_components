export type ListItemProps = {
  title: string;
  component: any;
  route: string;
};

type Modules = 'THEME' | 'COMMON';

export type ModulesItem = {
  title: string;
  data: ListItemProps[];
};

type SectionProps = {[k in Modules]: ModulesItem};

const pagesMap: SectionProps = {
  THEME: {
    title: '主题',
    data: [
      {
        title: '文字与颜色',
        component: require('../views/theme/ColorList'),
        route: 'ColorList',
      },
      {
        title: '字体库',
        component: require('../views/common/IconFont'),
        route: 'IconFont',
      },
    ],
  },
  COMMON: {
    title: '基础组件',
    data: [
      {
        title: '提示',
        component: require('../views/common/Tip'),
        route: 'Tip',
      },
      {
        title: '网格',
        component: require('../views/common/Grid'),
        route: 'Grid',
      },
      {
        title: '工具箱',
        component: require('../views/common/Tools'),
        route: 'Tools',
      },
      {
        title: '弹幕',
        component: require('../views/common/Barrage'),
        route: 'Barrage',
      },
      {
        title: '界面',
        component: require('../views/common/PageView'),
        route: 'PageView',
      },
      {
        title: '段头',
        component: require('../views/common/Header'),
        route: 'Header',
      },
      {
        title: '导航条',
        component: require('../views/common/NavigationBar'),
        route: 'NavigationBar',
      },
      {
        title: '弹出菜单',
        component: require('../views/common/Popup'),
        route: 'Popup',
      },
      {
        title: '按钮',
        component: require('../views/common/Button'),
        route: 'Button',
      },
      {
        title: '跑马灯',
        component: require('../views/common/RunningLamp'),
        route: 'RunningLamp',
      },
      {
        title: 'CheckBox',
        component: require('../views/common/Checkbox'),
        route: 'CheckBox',
      },
    ],
  },
};

export default pagesMap;
