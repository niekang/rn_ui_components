import React from 'react';
import {View, TouchableWithoutFeedback, Text} from 'react-native';
import {NavigationBar, PageView, useTheme} from 'rn_ui_components/components';
import {ThemeType} from 'rn_ui_components/components/common/Theme';
import {NavigationTransitionProps} from 'react-navigation';
import {ProviderValue} from 'rn_ui_components/components/common/Context';

const Item = (props: {
  item: ThemeType;
  index: number;
  onPress: (value: ProviderValue) => void;
}) => {
  const {item, index, onPress = () => {}} = props;
  const value = useTheme();
  const {
    theme: {textColor, bgColor, borderColor},
  } = value;
  return (
    <TouchableWithoutFeedback key={index} onPress={() => onPress(value)}>
      <View
        style={{
          height: 44,
          justifyContent: 'center',
          paddingLeft: 16,
          backgroundColor: bgColor.container_bg_color,
          borderBottomWidth: 0.5,
          borderBottomColor: borderColor.crm_separate_color1,
        }}>
        <Text style={{color: textColor.text_color}}>{item}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default class Setting extends React.Component<
  NavigationTransitionProps
> {
  render() {
    return (
      <PageView>
        <NavigationBar
          title="选择主题"
          onPressLeft={() => {
            this.props.navigation.goBack();
          }}
        />
        {(['default', 'dark'] as ThemeType[]).map((item, index) => (
          <Item
            item={item}
            index={index}
            onPress={({themeType, onThemeChange}) => {
              themeType !== item &&
                onThemeChange &&
                onThemeChange({themeType: item});
              this.props.navigation.goBack();
            }}
          />
        ))}
      </PageView>
    );
  }
}
