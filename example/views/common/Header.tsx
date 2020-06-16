import React from 'react';
import {
  NavigationBar,
  PageView,
  Header,
  IconFontName,
} from 'rn_ui_components/components';
import {NavigationTransitionProps} from 'react-navigation';

export default class ButtonExample extends React.Component<
  NavigationTransitionProps
> {
  render() {
    return (
      <PageView>
        <NavigationBar
          title="段头"
          onPressLeft={() => {
            this.props.navigation.goBack();
          }}
        />
        <Header style={{margin: 12, borderRadius: 8}} title="天雷数据" />
        <Header
          style={{margin: 12, borderRadius: 8}}
          title="天雷数据"
          arrow
          arrowText="查看全部"
        />
        <Header
          style={{margin: 12, borderRadius: 8}}
          title="天雷数据"
          arrow={false}
          arrowText="查看全部"
        />
        <Header
          style={{margin: 12, borderRadius: 8}}
          title="天雷数据"
          icon={IconFontName.ic_info}
          arrow={false}
        />
        <Header
          style={{margin: 12, borderRadius: 8}}
          title="天雷数据"
          arrow="left"
        />
        <Header
          style={{margin: 12, borderRadius: 8}}
          title="天雷数据"
          arrow="left"
          arrowText="查看更多"
        />
        <Header
          style={{margin: 12, borderRadius: 8}}
          title="天雷数据"
          iconAlign="right"
          icon="ic_info"
        />
      </PageView>
    );
  }
}
