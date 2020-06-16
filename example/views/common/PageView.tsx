import React from 'react';
import {NavigationBar, PageView} from 'rn_ui_components/components';
import {NavigationTransitionProps} from 'react-navigation';
import {Text} from 'react-native';

export default class extends React.Component<NavigationTransitionProps> {
  render() {
    return (
      <PageView>
        <NavigationBar
          title="界面"
          onPressLeft={() => this.props.navigation.goBack()}
        />
        <Text>我是测试</Text>
      </PageView>
    );
  }
}
