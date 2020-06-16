import React from 'react';
import {Image, View, Text} from 'react-native';
import {
  NavigationBar,
  PageView,
  withTheme,
  CommonIcon,
} from 'rn_ui_components/components';
import {NavigationTransitionProps} from 'react-navigation';
import {ProviderValue} from 'rn_ui_components/components/common/Context';

@withTheme
export default class NavigationBarExample extends React.Component<
  NavigationTransitionProps & ProviderValue
> {
  render() {
    const {theme} = this.props;
    return (
      <PageView>
        <NavigationBar
          title="默认样式"
          onPressLeft={() => {
            this.props.navigation.goBack();
          }}
        />
        <NavigationBar
          style={{
            marginTop: 12,
            backgroundColor: theme.bgColor.crm_data_bg_color,
          }}
          title="自定义左右按钮"
          left="返回"
          right="设置"
          type="light"
          onPressLeft={() => {
            this.props.navigation.goBack();
          }}
        />

        <NavigationBar
          style={{marginTop: 12}}
          title="自定义背景"
          type="light"
          background={
            <Image
              style={{width: '100%', height: '100%'}}
              source={{
                uri:
                  'https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=336492172,12372647&fm=26&gp=0.jpg',
              }}
            />
          }
          left={<CommonIcon name="ic_arrow_left" size={22} color={'#fff'} />}
          onPressLeft={() => {
            this.props.navigation.goBack();
          }}
        />

        <NavigationBar
          style={{
            marginTop: 12,
            backgroundColor: theme.bgColor.crm_data_bg_color,
          }}
          title="包裹视图"
          type="light"
          onPressLeft={() => {
            this.props.navigation.goBack();
          }}
          left="返回"
          right="完成"
          showBottomBorder={false}>
          <View
            style={{
              height: 100,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{color: theme.textColor.text_color_revert}}>
              头部视图
            </Text>
          </View>
        </NavigationBar>
      </PageView>
    );
  }
}
