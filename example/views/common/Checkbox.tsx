import React from 'react';

import {NavigationBar, PageView, WithTheme} from 'rn_ui_components/components';
import {NavigationTransitionProps} from 'react-navigation';
import {ScrollView} from 'react-native-gesture-handler';

export default class CheckBoxExample extends React.Component<
  NavigationTransitionProps
> {
  render() {
    return (
      <WithTheme>
        {() => (
          <PageView>
            <NavigationBar
              title="CheckBox"
              onPressLeft={() => {
                this.props.navigation.goBack();
              }}
              right="设置"
              onPressRight={() => {
                this.props.navigation.navigate('Setting');
              }}
            />
            <ScrollView>
              <Form.CheckBox
                data={[
                  '数据1',
                  '数据2',
                  '数据3',
                  '数据4',
                  '数据5',
                  '数据6',
                  '数据7',
                ]}
                onChange={(item) => {
                  console.log(item);
                }}
              />
              <Form.CheckBox
                data={[
                  '数据1',
                  '数据2',
                  '数据3',
                  '数据4',
                  '数据5',
                  '数据6',
                  '数据7',
                ]}
                multiple={false}
                allowDeselected={false}
                onChange={(item) => {
                  console.log(item);
                }}
              />
              <Form.CheckBox
                style={{marginTop: 12}}
                data={[
                  {label: '数据1', value: '1'},
                  {label: '数据2', value: '2'},
                  {label: '数据3', value: '3'},
                  {label: '数据4', value: '4'},
                  {label: '数据5', value: '5'},
                  {label: '数据6', value: '6'},
                  {label: '数据7', value: '7'},
                  {label: '其他1', value: '8'},
                  {label: '其他2', value: '9'},
                ]}
                singleValues={['8', '9']}
                onChange={(item) => {
                  console.log(item);
                }}
              />
              <Form.CheckBox
                style={{marginTop: 12}}
                type="normal"
                data={[
                  {label: '数据1', value: '1'},
                  {label: '数据2', value: '2'},
                  {label: '数据3', value: '3'},
                  {label: '数据4', value: '4'},
                  {label: '数据5', value: '5'},
                  {label: '数据6', value: '6'},
                  {label: '数据7', value: '7'},
                ]}
                onChange={(item) => {
                  console.log(item);
                }}
              />
            </ScrollView>
          </PageView>
        )}
      </WithTheme>
    );
  }
}
