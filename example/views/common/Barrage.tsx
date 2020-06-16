import React from 'react';
import {
  Barrage,
  PageView,
  NavigationBar,
  Button,
} from 'rn_ui_components/components';
import {NavigationTransitionProps} from 'react-navigation';
import list from '../../utils/barrage';

const data = list.map((item, index) => {
  return {
    label: item,
    value: index,
  };
});

type State = {
  stop?: boolean;
  value?: string;
};

export default class BarrageExample extends React.Component<
  NavigationTransitionProps,
  State
> {
  state: State = {
    stop: false,
  };

  ref?: Barrage;
  index = data.length - 1;

  render() {
    return (
      <PageView>
        <NavigationBar
          title="弹幕"
          onPressLeft={() => {
            this.props.navigation.goBack();
          }}
        />
        <Barrage
          data={data}
          ref={(ref) => {
            this.ref = ref;
          }}
        />
        <Button
          style={{margin: 12}}
          onPress={() => {
            if (!this.ref) {
              return;
            }
            this.state.stop ? this.ref.start() : this.ref.stop();
            this.setState({
              stop: !this.state.stop,
            });
          }}>
          {this.state.stop ? '开始' : '暂停'}
        </Button>
        <Button
          style={{margin: 12}}
          onPress={() => {
            this.ref &&
              this.state.value &&
              this.ref.addBarage({
                label: this.state.value,
                value: this.state.value + '1',
              });
            this.setState({
              value: '',
            });
          }}>
          发送
        </Button>
      </PageView>
    );
  }
}
