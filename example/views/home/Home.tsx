import React from 'react';
import {
  View,
  Text,
  TouchableWithoutFeedback,
  SectionListRenderItemInfo,
  SectionList,
} from 'react-native';
import {
  useTheme,
  PageView,
  NavigationBar,
} from 'rn_ui_components/components/index';
import {NavigationTransitionProps} from 'react-navigation';
import pagesMap, {ListItemProps} from '../../utils/pageList';

const sections = [];

for (const k in pagesMap) {
  sections.push(pagesMap[k]);
}

const ListHeader = ({title}) => {
  const {theme} = useTheme();
  return (
    <View
      style={{
        height: 44,
        justifyContent: 'center',
        paddingLeft: 12,
        backgroundColor: theme.bgColor.crm_content_bg_color,
        borderBottomWidth: 0.5,
        borderBottomColor: theme.borderColor.crm_separate_color1,
      }}>
      <Text
        style={{
          color: theme.textColor.text_color_sub,
          fontSize: theme.fontType.font_size_md.size,
          fontWeight: 'bold',
        }}>
        {title}
      </Text>
    </View>
  );
};

type ListItemType = {
  item: ListItemProps;
  onPress: () => {};
};

const ListItem = (props: ListItemType) => {
  const {item, onPress = () => {}} = props;
  const {theme} = useTheme();
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View
        style={{
          height: 44,
          justifyContent: 'center',
          paddingLeft: 16,
          backgroundColor: theme.bgColor.container_bg_color,
          borderBottomWidth: 0.5,
          borderBottomColor: theme.borderColor.crm_separate_color1,
        }}>
        <Text
          style={{
            color: theme.textColor.text_color,
            fontSize: theme.fontType.font_size.size,
          }}>
          {item.title}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default class Home extends React.Component<NavigationTransitionProps> {
  renderItem = ({item}: SectionListRenderItemInfo<ListItemProps>) => {
    return (
      <ListItem
        item={item}
        onPress={() => this.props.navigation.navigate(item.route)}
      />
    );
  };

  renderSectionHeader = ({
    section: {title},
  }: SectionListRenderItemInfo<any>) => {
    return <ListHeader title={title} />;
  };

  render() {
    return (
      <PageView>
        <NavigationBar
          title="通用前端"
          left=""
          right="设置"
          onPressRight={() => {
            this.props.navigation.navigate('Setting');
          }}
        />
        <SectionList
          sections={sections}
          renderSectionHeader={this.renderSectionHeader}
          keyExtractor={(item, index) => item.title + index}
          renderItem={this.renderItem}
          contentContainerStyle={{paddingBottom: 34}}
        />
      </PageView>
    );
  }
}
