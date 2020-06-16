import React from 'react';
import {NavigationBar, PageView, Tip} from 'rn_ui_components/components';
import {NavigationTransitionProps} from 'react-navigation';

export default class ButtonExample extends React.Component<
  NavigationTransitionProps
> {
  render() {
    return (
      <PageView>
        <NavigationBar
          title="提示"
          onPressLeft={() => {
            this.props.navigation.goBack();
          }}
        />
        <Tip style={{marginTop: 12}} title="警告" />
        <Tip style={{marginTop: 12}} title="提示" type="waiting" />
      </PageView>
    );
  }
}
