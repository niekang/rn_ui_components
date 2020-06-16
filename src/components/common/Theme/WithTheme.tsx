import React from 'react';
import {ProviderValue, resolveProviderValue, CRMContext} from '../Context';

// 包裹主题样式的高阶组件
export const withTheme = <T extends ProviderValue>(
  Component: React.ComponentType<T>,
) => {
  return class extends React.Component<T> {
    render() {
      return (
        <CRMContext.Consumer>
          {(theme) => (
            <Component {...resolveProviderValue(theme)} {...this.props} />
          )}
        </CRMContext.Consumer>
      );
    }
  };
};

// 重写组件children属性，WithTheme 接受子组件类型为 (value: ProviderValue) => React.ReactNode
interface Props {
  children: (value: ProviderValue) => React.ReactNode;
}

/**
 *获取provider数据，并进行处理，传递给子组件
 *
 * @export
 * @class WithTheme
 * @extends {React.Component<Props, {}>}
 */
export default class WithTheme extends React.Component<Props, {}> {
  render() {
    return (
      <CRMContext.Consumer>
        {(theme) => this.props.children(resolveProviderValue(theme))}
      </CRMContext.Consumer>
    );
  }
}
