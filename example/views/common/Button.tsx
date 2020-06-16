import React from 'react';
import {View} from 'react-native';
import {NavigationBar, Button, PageView} from 'rn_ui_components/components';
import {Type} from 'rn_ui_components/components/common/Button';
import {NavigationTransitionProps} from 'react-navigation';

const buttons1: Type[] = [
  'primary',
  'disabled',
  'ghost-primary',
  'ghost-primary-disabled',
];
const buttons2: Type[] = [
  'normal',
  'disabled-above-colored',
  'ghost-normal',
  'ghost-normal-disabled',
];

export default class ButtonExample extends React.Component<
  NavigationTransitionProps
> {
  render() {
    return (
      <PageView>
        <NavigationBar
          title="按钮"
          onPressLeft={() => {
            this.props.navigation.goBack();
          }}
        />
        <View style={{padding: 16}}>
          {buttons1.map((item, _) => {
            return (
              <Button
                type={item}
                style={{marginBottom: 12}}
                onPress={() => {
                  console.log(item);
                }}>
                {item}
              </Button>
            );
          })}
        </View>
        <View style={{flex: 1, padding: 16, backgroundColor: '#3072F6'}}>
          {buttons2.map((item, _) => {
            return (
              <Button
                type={item}
                style={{marginBottom: 12}}
                onPress={() => {
                  console.log(item);
                }}>
                {item}
              </Button>
            );
          })}
        </View>
      </PageView>
    );
  }
}
