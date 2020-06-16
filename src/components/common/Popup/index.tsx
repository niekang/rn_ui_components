import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleProp,
  ViewStyle,
  ListRenderItemInfo,
  Modal,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import Device from '../Device';
import {withTheme} from '../Theme/index';
import {ProviderValue} from '../Context';

const {DEVICE_HEIGHT, DEVICE_WIDTH} = Device;

const Triangle = {
  width: 10,
  height: 10,
  left: 12,
  right: 12,
  color: '#fff',
};

const conntentPadding = 2;

type PopupPosition = 'up' | 'down';

type PopupMenuAlign = 'left' | 'right';

type TrianglePosition = 'left' | 'right' | 'center';

type Position = {
  top?: number;
  left?: number;
  right?: number;
  bottom?: number;
  width?: number;
  height?: number;
};

type PopupItemProps =
  | {
      label: string;
      value: string | number;
    }
  | string;

type PopupStyles = {
  style?: StyleProp<ViewStyle>;
  contentStyle?: StyleProp<ViewStyle>;
  activeItemWrapper?: StyleProp<ViewStyle>;
  inActiveItemWrapper?: StyleProp<ViewStyle>;
  activeItemStyle?: StyleProp<ViewStyle>;
  inActiveItemStyle?: StyleProp<ViewStyle>;
  activeTextStyle?: StyleProp<ViewStyle>;
  inActiveTextStyle?: StyleProp<ViewStyle>;
};

type PopupProps = {
  data?: PopupItemProps[];
  position?: PopupPosition;
  align?: PopupMenuAlign;
  trianglePosition?: TrianglePosition;
  itemWidth?: number;
  itemHeight?: number;
  maxWidth?: number;
  maxHeight?: number;
  activeOpacity?: number;
  itemActiveOpacity?: number;
  index?: number;
  backgroundColor?: string;

  renderItem?: ({
    item: any,
    index: number,
    isSelected: boolean,
  }) => React.ReactNode; //自定义选项组件
  onClose?: () => void; //关闭弹框回调
  onClick?: (item: PopupItemProps, index: number) => void;
  onShow?: () => void;
} & PopupStyles &
  ProviderValue;

type PopupState = {
  visible: boolean;
  touchPosition: Position;
};

class Popup extends React.PureComponent<PopupProps, PopupState> {
  static defaultProps: PopupProps = {
    itemHeight: 44,
    maxWidth: 88,
    maxHeight: 132,
    position: 'down',
    align: 'right',
    trianglePosition: 'center',
    activeOpacity: 1,
    itemActiveOpacity: 0.7,
    onClose: () => {},
    onShow: () => {},
    data: [],
  };

  wrapperRef?: TouchableOpacity;

  constructor(props: PopupProps) {
    super(props);
    this.state = {
      visible: false,
      touchPosition: {},
    };
  }

  getPosition = (callback: (p: Position) => void) => {
    this.wrapperRef &&
      this.wrapperRef.measureInWindow((left, top, width, height) => {
        const position: Position = {
          left,
          top,
          right: left + width,
          bottom: top + height,
          width,
          height,
        };
        callback && callback(position);
      });
  };

  onShow = () => {
    const {data = []} = this.props;
    if (data.length === 0) {
      return;
    }
    Keyboard.dismiss();
    this.getPosition((position) => {
      this.setState({
        touchPosition: position,
        visible: true,
      });
      this.props.onShow && this.props.onShow();
    });
  };

  /** 获取默认的弹出位置,通过样式的形式返回 */
  getPositionStyle = (): {
    box: ViewStyle;
    triangle: ViewStyle;
    triangleStyle: ViewStyle;
  } => {
    const {touchPosition} = this.state;

    let {position, align, maxHeight, itemHeight, data, theme} = this.props;

    let contentHeight =
      itemHeight * data.length + Triangle.height + 2 * conntentPadding;

    contentHeight = Math.min(
      contentHeight,
      maxHeight + Triangle.height + 2 * conntentPadding,
    );

    const box: ViewStyle = {
      height: contentHeight,
    };
    let triangle: ViewStyle = {};
    const triangleStyle: ViewStyle = {};

    // 菜单弹出方向
    if (position === 'down') {
      // 下面超出屏幕
      if (touchPosition.bottom + contentHeight > DEVICE_HEIGHT) {
        triangle = styles.downTriangle;
        triangleStyle.borderTopColor = theme.bgColor.container_bg_color;
        box.flexDirection = 'column-reverse';
        box.top = touchPosition.top - contentHeight;
      } else {
        triangle = styles.upTriangle;
        triangleStyle.borderBottomColor = theme.bgColor.container_bg_color;
        box.top = touchPosition.bottom;
      }
    } else if (position === 'up') {
      // 上面超出屏幕
      if (touchPosition.top < contentHeight) {
        triangle = styles.upTriangle;
        triangleStyle.borderBottomColor = theme.bgColor.container_bg_color;
        box.top = touchPosition.bottom;
      } else {
        triangle = styles.downTriangle;
        triangleStyle.borderTopColor = theme.bgColor.container_bg_color;
        box.flexDirection = 'column-reverse';
        box.top = touchPosition.top - contentHeight;
      }
    }

    // 菜单对齐方向
    if (align === 'left') {
      box.left = touchPosition.left;
    } else if (align === 'right') {
      box.right = DEVICE_WIDTH - touchPosition.right;
    }

    return {box, triangle, triangleStyle};
  };

  onClose() {
    this.setState(
      {
        visible: false,
      },
      () => {
        this.props.onClose();
      },
    );
  }

  onMenuItemClick = (item: PopupItemProps, index: number) => {
    this.onClose();
    this.props.onClick && this.props.onClick(item, index);
  };

  renderMenuItem = ({item, index}: ListRenderItemInfo<PopupItemProps>) => {
    const {
      theme,
      itemActiveOpacity,
      index: selectedIndex,
      data,
      itemHeight,
      renderItem,
      activeItemWrapper,
      inActiveItemWrapper,
      activeItemStyle,
      inActiveItemStyle,
      activeTextStyle,
      inActiveTextStyle,
    } = this.props;
    const isSelected = index === selectedIndex;
    return (
      <TouchableOpacity
        onPress={() => this.onMenuItemClick(item, index)}
        activeOpacity={itemActiveOpacity}
        style={[
          {
            backgroundColor: theme.bgColor.container_bg_color,
            borderBottomColor: theme.borderColor.border_color,
            borderBottomWidth:
              index !== data.length - 1 ? StyleSheet.hairlineWidth : 0,
          },
          isSelected ? activeItemWrapper : inActiveItemWrapper,
          {height: itemHeight},
        ]}>
        <View
          style={[
            {
              justifyContent: 'center',
              alignItems: 'center',
              paddingHorizontal: 12,
              flex: 1,
            },
            isSelected ? activeItemStyle : inActiveItemStyle,
          ]}>
          {renderItem ? (
            renderItem({item, index, isSelected})
          ) : (
            <Text
              numberOfLines={1}
              style={[
                {
                  fontSize: theme.fontType.font_size_hint.size,
                  color: theme.textColor.text_color_secondary,
                },
                isSelected ? activeTextStyle : inActiveTextStyle,
              ]}>
              {typeof item === 'string' ? item : item.label}
            </Text>
          )}
        </View>
      </TouchableOpacity>
    );
  };

  render() {
    const {
      data,
      contentStyle,
      children,
      style,
      itemWidth = 0,
      maxWidth,
      maxHeight,
      itemHeight,
      activeOpacity,
      trianglePosition,
      backgroundColor,
      theme,
    } = this.props;

    const {box, triangle, triangleStyle} = this.getPositionStyle();

    let trgPosition = trianglePosition;

    const triangleWrapStyles: {[key in TrianglePosition]: ViewStyle} = {
      left: {
        marginLeft: Triangle.left,
      },
      right: {
        marginRight: Triangle.right,
        alignItems: 'flex-end',
      },
      center: {
        justifyContent: 'center',
        alignItems: 'center',
      },
    };
    const triangleWrap = triangleWrapStyles[trgPosition];

    return (
      <TouchableOpacity
        activeOpacity={activeOpacity}
        style={style}
        // collapsable={false}
        onPress={() => this.onShow()}
        ref={(ref) => (this.wrapperRef = ref)}>
        {children}
        <Modal
          animationType="fade"
          transparent
          supportedOrientations={['portrait', 'landscape']}
          visible={this.state.visible}>
          <TouchableWithoutFeedback onPress={() => this.onClose()}>
            <View style={[styles.container, {backgroundColor}]}>
              <View style={[styles.modalBox, box]}>
                <View style={triangleWrap}>
                  <View style={[styles.shadow, triangle, triangleStyle]} />
                </View>
                <View
                  style={[
                    styles.content,
                    styles.shadow,
                    {backgroundColor: theme.bgColor.container_bg_color},
                    contentStyle,
                    {maxWidth, maxHeight},
                    itemWidth > 0 ? {width: itemWidth} : {},
                  ]}>
                  <FlatList
                    data={data}
                    keyExtractor={(_, index) => {
                      return 'menusIndex' + index;
                    }}
                    renderItem={this.renderMenuItem}
                    showsVerticalScrollIndicator={false}
                    scrollEnabled={itemHeight * data.length > maxHeight}
                  />
                </View>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </Modal>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  modalBox: {
    position: 'absolute',
  },
  content: {
    borderRadius: 4,
    paddingVertical: conntentPadding, // 防止滚动时候覆盖圆角
  },

  shadow: {
    shadowColor: '#000000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    // elevation: 2,
    backgroundColor: 'transparent',
  },

  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  upTriangle: {
    borderColor: 'transparent',
    borderLeftWidth: Triangle.width,
    borderRightWidth: Triangle.width,
    borderBottomWidth: Triangle.height,
    borderBottomColor: Triangle.color,
    marginBottom: -1,
    width: 0,
    height: 0,
  },
  downTriangle: {
    borderColor: 'transparent',
    borderTopColor: Triangle.color,
    borderLeftWidth: Triangle.width,
    borderRightWidth: Triangle.width,
    borderTopWidth: Triangle.height,

    width: 0,
    height: 0,

    marginTop: -1,
  },
});

export default withTheme(Popup);
