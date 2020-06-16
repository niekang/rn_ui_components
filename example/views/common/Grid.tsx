import React from 'react';
import {
  NavigationBar,
  PageView,
  Button,
  Grid,
  useTheme,
} from 'rn_ui_components/components';
import {NavigationTransitionProps} from 'react-navigation';

const data = [
  {
    text: '销售拜访',
    image:
      'https://img-oss.stage.yunshanmeicai.com/crm/manager/cdn/static/images/f29ee489-02a3-4d3e-b432-e78536a216b8销售拜访.png',
  },
  {
    text: '陪访',
    image:
      'https://img-oss.stage.yunshanmeicai.com/crm/manager/cdn/static/images/492ddbdf-a0bc-4aae-8ecc-1dafb8dc441a陪访.png',
  },
  {
    text: '优惠券',
    image:
      'https://img-oss.stage.yunshanmeicai.com/crm/manager/cdn/static/images/41f694b2-4190-42b1-8449-ee19e8e28451优惠券.png',
  },
  {
    text: '诚信承诺书',
    image:
      'https://img-oss.stage.yunshanmeicai.com/crm/manager/cdn/static/images/d83616b2-1a05-4389-8458-4c1a265cdb8c诚信承诺书.png',
  },
  {
    text: '核查记录',
    image:
      'https://img-oss.stage.yunshanmeicai.com/crm/manager/cdn/static/images/2a4f48a0-78a0-46ec-887d-23eb54b76741核查记录.png',
  },
  {
    text: '知识库',
    image:
      'https://img-oss.stage.yunshanmeicai.com/crm/manager/cdn/static/images/22ef26b1-ad25-4bf4-8b49-ee5e380e67e2知识库.png',
  },
];

const GridToolItem = (props: {data: any}) => {
  const {theme} = useTheme();
  return <ToolItem theme={theme} data={props.data} />;
};

export default class ButtonExample extends React.Component<
  NavigationTransitionProps
> {
  render() {
    return (
      <PageView>
        <NavigationBar
          title="网格"
          onPressLeft={() => {
            this.props.navigation.goBack();
          }}
        />
        <Grid
          style={{marginTop: 12}}
          data={data.map((item) => item.text)}
          renderItem={(item) => {
            return <Button style={{width: '100%', height: 40}}>{item}</Button>;
          }}
          onPress={(item) => {
            console.log(item);
          }}
        />
      </PageView>
    );
  }
}
