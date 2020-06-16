/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React from 'react';
import Home from './views/home/Home';
import Setting from './views/home/Setting';
import {
  ProviderValue,
  CRMContext,
} from 'rn_ui_components/components/common/Context';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import pagesMap, {ModulesItem} from './utils/pageList';

const pages = {
  Home: Home,
  Setting: Setting,
};

for (const k in pagesMap) {
  (pagesMap[k] as ModulesItem).data.forEach((item) => {
    pages[item.route] = {
      screen: item.component.default,
      navigationOptions: {
        title: item.title,
      },
    };
  });
}

const stackNavigator = createStackNavigator(pages, {
  initialRouteName: 'Home',
  defaultNavigationOptions: {
    header: null,
  },
});

const APPContaniner = createAppContainer(stackNavigator);

type APPState = {
  value: ProviderValue;
};

export default class APP extends React.Component {
  state: APPState = {
    value: {
      onThemeChange: ({themeType, customTheme}) => {
        this.setState({
          value: {
            themeType: themeType ? themeType : this.state.value.themeType,
            customTheme: customTheme
              ? customTheme
              : this.state.value.customTheme,
            onThemeChange: this.state.value.onThemeChange,
          },
        });
      },
    },
  };

  render() {
    const {value} = this.state;
    return (
      <CRMContext.Provider value={value}>
        <APPContaniner />
      </CRMContext.Provider>
    );
  }
}
