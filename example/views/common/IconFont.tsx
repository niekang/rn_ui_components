import React from 'react';
import {View, SectionList, Text} from 'react-native';
import {NavigationTransitionProps} from 'react-navigation';
import {
  WithTheme,
  PageView,
  NavigationBar,
  CommonIcon,
} from 'rn_ui_components/components';
import {
  common_UI,
  IconFontNameType,
} from 'rn_ui_components/components/common/IconFont/font';

export default class IconFont extends React.Component<
  NavigationTransitionProps
> {
  renderItem = (item: IconFontNameType) => {
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
              <Text style={{color: theme.textColor.text_color}}>{item}</Text>
              <View
                style={{
                  height: 30,
                  width: 140,
                  backgroundColor: theme.bgColor.page_bg_color,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <CommonIcon
                  name={item}
                  size={16}
                  color={theme.bgColor.crm_icon_color_secondary}
                />
              </View>
            </View>
          );
        }}
      </WithTheme>
    );
  };
  renderHeader = (title: string) => {
    return (
      <WithTheme>
        {({theme}) =>
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
        }
      </WithTheme>
    );
  };

  matchData = (fonts: typeof common_UI) => {
    const sections = [
      {
        title: 'IconFont   theme.iconFont',
        data: Object.getOwnPropertyNames(fonts) as IconFontNameType[],
      },
    ];

    return sections;
  };
  render() {
    const sections = this.matchData(common_UI);
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
          renderItem={({item}) => this.renderItem(item)}
          renderSectionHeader={({section: {title}}) => this.renderHeader(title)}
          sections={sections}
          keyExtractor={(item, index) => item + index}
        />
      </PageView>
    );
  }
}
