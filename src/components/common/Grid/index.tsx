import React from 'react';
import {useTheme} from '../Context';
import {
  View,
  ViewStyle,
  StyleProp,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

export type GridProps<T> = {
  data: T[];
  columns?: number;
  style?: StyleProp<ViewStyle>;
  itemStyle?: StyleProp<ViewStyle>;
  verticalSpace?: number;
  horizontalSpace?: number;
  onPress?: (item: T, index: number) => void;
};

export type GridRenderProps<T> = {
  renderItem: (item: T, index: number) => React.ReactNode;
} & GridProps<T>;

const Grid = <DataType extends any>(props: GridRenderProps<DataType>) => {
  const {
    style,
    itemStyle,
    data,
    columns = 4,
    verticalSpace = 12,
    horizontalSpace = 12,
    renderItem,
    onPress = () => {},
  } = props;

  const {
    theme: {bgColor},
  } = useTheme();

  const rows: any[][] = [];
  let row = [];
  data.forEach((item, index) => {
    row.push(renderItem(item, index));
    if (row.length === columns) {
      rows.push(row);
      row = [];
    }
  });

  if (row.length > 0) {
    while (row.length < columns) {
      row.push(<View />);
    }
    rows.push(row);
  }

  return (
    <View
      style={[
        {
          paddingHorizontal: 16,
          paddingVertical: 12,
          backgroundColor: bgColor.container_bg_color,
        },
        StyleSheet.flatten(style),
      ]}>
      {rows.map((items, rowIndex) => {
        const firstRow = rowIndex === 0;
        return (
          <View style={{flexDirection: 'row'}}>
            {items.map((item, column) => {
              return (
                <TouchableOpacity
                  activeOpacity={1}
                  style={[
                    {backgroundColor: bgColor.container_bg_color},
                    StyleSheet.flatten(itemStyle),
                    {
                      flex: 1,
                      marginRight: column === columns - 1 ? 0 : horizontalSpace,
                      marginTop: firstRow ? 0 : verticalSpace,
                    },
                  ]}
                  onPress={() => {
                    rowIndex * columns + column < data.length &&
                      onPress(
                        data[rowIndex * columns + column],
                        rowIndex * columns + column,
                      );
                  }}>
                  {item}
                </TouchableOpacity>
              );
            })}
          </View>
        );
      })}
    </View>
  );
};

export default Grid;
