import React from 'react';
import {View, SectionList, Text} from 'react-native';
import Theme from 'rn_ui_components/components/common/Theme/theme/PropTypes';
import {NavigationTransitionProps} from 'react-navigation';
import {
  WithTheme,
  PageView,
  NavigationBar,
} from 'rn_ui_components/components/index';

type Types = keyof Theme;

type DataType = {key: any; value: any};

type SectionDataType = {
  title: string;
  data: DataType[];
  type: Types;
};

export default class ColorList extends React.Component<
  NavigationTransitionProps
> {
  renderChild = (type: Types, item: DataType, theme: Theme) => {
    switch (type) {
      case 'textColor':
      case 'bgColor':
      case 'globalColor':
      case 'tagDeep':
      case 'tagLight':
      case 'borderColor':
        return (
          <View>
            <View
              style={{
                height: 30,
                width: 140,
                backgroundColor: item.value,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text style={{color: theme.textColor.text_color}}>
                {item.value}
              </Text>
            </View>
          </View>
        );
      case 'fontType':
        return (
          <View>
            <View
              style={{
                height: 30,
                width: 200,
                flexDirection: 'row',
                justifyContent: 'space-around',
                alignItems: 'center',
              }}>
              <Text style={{color: theme.textColor.text_color}}>
                字号{item.value.size}
              </Text>
              <Text style={{color: theme.textColor.text_color}}>
                行高{item.value.lineHeight}
              </Text>
            </View>
          </View>
        );
      case 'borderRadiu':
        return (
          <View>
            <View
              style={{
                height: 30,
                width: 140,
                backgroundColor: theme.bgColor.container_bg_color,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text style={{color: theme.textColor.text_color}}>
                {item.value}px
              </Text>
            </View>
          </View>
        );
      default:
        return null;
    }
  };

  renderItem = (item: DataType, section: SectionDataType) => {
    return (
      <WithTheme>
        {({theme}) => {
          return (
            <View
              style={{
                height: 44,
                alignItems: 'center',
                justifyContent: 'space-between',
                flexDirection: 'row',
                paddingLeft: 16,
                paddingRight: 16,
                borderBottomWidth: 0.5,
                borderBottomColor: theme.borderColor.border_color,
                backgroundColor: theme.bgColor.container_bg_color,
              }}>
              <Text style={{color: theme.textColor.text_color}}>
                {item.key}
              </Text>
              {this.renderChild(section.type, item, theme)}
            </View>
          );
        }}
      </WithTheme>
    );
  };
  renderHeader = (title: string) => {
    return (
      <WithTheme>
        {({theme}) => (
          <View
            style={{
              height: 44,
              justifyContent: 'center',
              paddingLeft: 16,
              backgroundColor: theme.bgColor.container_bg_color,
            }}>
            <Text
              style={{color: theme.textColor.text_color, fontWeight: 'bold'}}>
              {title}
            </Text>
          </View>
        )}
      </WithTheme>
    );
  };
  setA = (obj: object) => {
    const res = [];
    Object.getOwnPropertyNames(obj).forEach((key) => {
      const objItem = {
        key: key,
        value: obj[key],
      };
      res.push(objItem);
    });
    return res;
  };
  matchData = (theme: Theme) => {
    const {
      bgColor,
      globalColor,
      fontType,
      tagDeep,
      tagLight,
      borderColor,
      borderRadiu,
      textColor,
    } = theme;
    const sections: SectionDataType[] = [
      {
        title: '文字颜色  theme.textColor',
        data: this.setA(textColor),
        type: 'textColor',
      },
      {
        title: '文字类型   theme.fontType',
        data: this.setA(fontType),
        type: 'fontType',
      },
      {
        title: '背景色  theme.bgColor',
        data: this.setA(bgColor),
        type: 'bgColor',
      },
      {
        title: '全局  theme.globalColor',
        data: this.setA(globalColor),
        type: 'globalColor',
      },
      {
        title: '深色Tag  theme.tagDeep',
        data: this.setA(tagDeep),
        type: 'tagDeep',
      },
      {
        title: '浅色Tag  theme.tagLight',
        data: this.setA(tagLight),
        type: 'tagLight',
      },
      {
        title: '边框颜色  theme.borderColor',
        data: this.setA(borderColor),
        type: 'borderColor',
      },
      {
        title: '圆角大小  theme.borderRadiu',
        data: this.setA(borderRadiu),
        type: 'borderRadiu',
      },
    ];

    return sections;
  };
  render() {
    return (
      <WithTheme>
        {({theme}) => {
          const sections = this.matchData(theme);
          return (
            <PageView>
              <NavigationBar
                title="文字与颜色"
                onPressLeft={() => {
                  this.props.navigation.goBack();
                }}
              />
              <SectionList
                contentContainerStyle={{paddingBottom: 34}}
                renderItem={({item, section}) =>
                  this.renderItem(item, section as SectionDataType)
                }
                renderSectionHeader={({section: {title}}) =>
                  this.renderHeader(title)
                }
                sections={sections}
                keyExtractor={(item, index) => item.key + index}
              />
            </PageView>
          );
        }}
      </WithTheme>
    );
  }
}
