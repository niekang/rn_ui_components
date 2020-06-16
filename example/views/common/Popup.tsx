import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import {
  NavigationBar,
  Popup,
  PageView,
  Device,
} from 'rn_ui_components/components';
import {NavigationTransitionProps} from 'react-navigation';

const {DEVICE_WIDTH} = Device;

const data = [
  'Option 1 ( This is a long, long, long option. )',
  'Option 2',
  'Option 3',
  'Option 4',
];

export default class PopupExample extends React.Component<
  NavigationTransitionProps
> {
  render() {
    return (
      <PageView>
        <NavigationBar
          title="弹出菜单"
          onPressLeft={() => {
            this.props.navigation.goBack();
          }}
        />
        <ScrollView>
          <View style={{padding: 16, flexDirection: 'row', flexWrap: 'wrap'}}>
            {Array(20)
              .fill(1)
              .map((_, index) => {
                const position = index % 2 === 0 ? 'down' : 'up';
                const align = index % 2 === 0 ? 'left' : 'right';
                const trianglePosition =
                  index === 4 ? 'center' : index % 2 === 0 ? 'left' : 'right';
                return (
                  <Popup
                    data={data}
                    style={{
                      justifyContent: 'center',
                      alignItems: 'center',
                      paddingHorizontal: 10,
                      width: (DEVICE_WIDTH - 16 * 3) / 2 - 1,
                      height: 44,
                      borderRadius: 5,
                      backgroundColor: index === 4 ? '#FD615B' : '#3072F6',
                      marginTop: index === 0 || index === 1 ? 20 : 40,
                      marginRight: index % 2 === 0 ? 16 : 0,
                    }}
                    position={position}
                    align={align}
                    trianglePosition={trianglePosition}>
                    <Text style={{fontSize: 12, color: '#fff'}}>
                      {index === 4
                        ? '三角在中间'
                        : `position=${position} align=${align}`}
                    </Text>
                  </Popup>
                );
              })}
          </View>
        </ScrollView>
      </PageView>
    );
  }
}
