import React from 'react';
import {
  NavigationBar,
  PageView,
  WithTheme,
  RunningLamp,
  Device,
} from 'rn_ui_components/components';
import {NavigationTransitionProps} from 'react-navigation';

const {DEVICE_WIDTH} = Device;

export default class RunningLampExample extends React.Component<
  NavigationTransitionProps
> {
  render() {
    return (
      <WithTheme>
        {({theme}) => (
          <PageView>
            <NavigationBar
              title="界面"
              onPressLeft={() => this.props.navigation.goBack()}
            />
            <RunningLamp
              data={[
                '纵向跑马灯1',
                '纵向跑马灯2222222',
                '纵向跑马灯34444111111',
                '纵向跑马灯45555233333353',
              ]}
              height={44}
              style={{
                backgroundColor: theme.bgColor.container_bg_color,
                marginBottom: 12,
                paddingLeft: 12,
              }}
            />
            <RunningLamp
              data={[
                '二十四节气歌，是为便于记忆我国古时历法中二十四节气而编成的小诗歌。',
              ]}
              horizontal
              height={44}
              width={DEVICE_WIDTH}
              style={{
                backgroundColor: theme.bgColor.container_bg_color,
                paddingLeft: 12,
              }}
            />
          </PageView>
        )}
      </WithTheme>
    );
  }
}
