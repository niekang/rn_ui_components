import React, {useState} from 'react';
import {useTheme} from '../Context';
import {
  View,
  Text,
  Image,
  ViewStyle,
  StyleProp,
  TextStyle,
  StyleSheet,
  TouchableWithoutFeedback,
  ImageSourcePropType,
} from 'react-native';

type CheckBoxData =
  | {
      label: string;
      value: string | number;
    }
  | string;

type CheckBoxProps = {
  data: CheckBoxData[];
  type?: 'normal' | 'checked';
  value?: any[];
  singleValues?: any[];
  columns?: number;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  itemStyle?: StyleProp<ViewStyle>;
  vertical?: number;
  horizontal?: number;
  checkedImage?: ImageSourcePropType;
  allowDeselected?: boolean;
  multiple?: boolean;
  onChange?: (info: {
    label: string;
    value: any[];
    item: CheckBoxData;
    index: number;
  }) => void;
};

const CheckBox = (props: CheckBoxProps) => {
  const {
    style,
    data,
    type = 'checked',
    value = [],
    singleValues = [],
    columns = 3,
    itemStyle,
    textStyle,
    vertical = 12,
    horizontal = 12,
    checkedImage = require('../../../image/checked.png'),
    onChange,
    allowDeselected = true,
    multiple = true,
  } = props;

  const {
    theme: {textColor, fontType, bgColor, globalColor},
  } = useTheme();

  const [useValue, useValueState] = useState(value);

  const rows: any[][] = [];
  let row = [];
  data.forEach((item, index) => {
    const v = typeof item === 'string' ? index : item.value;
    const isSelected = useValue.includes(v);
    row.push(
      <TouchableWithoutFeedback
        onPress={() => {
          let newValue = [...useValue];
          let change = false;
          const findIndex = newValue.findIndex((o) => o === v);
          if (findIndex === -1) {
            newValue = newValue.filter((v) => !singleValues.includes(v));
            if (
              singleValues.includes(
                typeof item === 'string' ? index : item.value,
              ) ||
              multiple === false
            ) {
              newValue = [];
              newValue.push(v);
              change = true;
            } else if (multiple || newValue.length === 0) {
              newValue.push(v);
              change = true;
            }
          } else {
            if (allowDeselected) {
              newValue.splice(findIndex, 1);
              change = true;
            }
          }
          if (change) {
            useValueState(newValue);
            onChange &&
              onChange({
                item,
                value: newValue,
                label: typeof item === 'string' ? item : item.label,
                index: index,
              });
          }
        }}>
        <View
          style={[
            {
              justifyContent: 'center',
              alignItems: 'center',
              height: 40,
              paddingHorizontal: 8,
              borderRadius: 2,
              backgroundColor: isSelected
                ? globalColor.primary_clor
                : bgColor.crm_content_bg_color,
            },
            StyleSheet.flatten(itemStyle),
          ]}>
          <Text
            style={[
              {
                color: isSelected
                  ? textColor.text_color_revert
                  : textColor.text_color,
                fontSize: fontType.font_size.size,
              },
              StyleSheet.flatten(textStyle),
            ]}>
            {typeof item === 'string' ? item : item.label}
          </Text>
          {type === 'checked' && !!checkedImage && isSelected && (
            <Image
              style={{
                width: 20,
                height: 20,
                position: 'absolute',
                right: 0,
                bottom: 0,
              }}
              source={checkedImage}
            />
          )}
        </View>
      </TouchableWithoutFeedback>,
    );

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
        {padding: 12, backgroundColor: bgColor.container_bg_color},
        StyleSheet.flatten(style),
      ]}>
      {rows.map((items, rowIndex) => {
        const firstRow = rowIndex === 0;
        return (
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            {items.map((item, column) => {
              return (
                <View
                  style={[
                    {flex: 1},
                    {
                      marginRight: column === columns - 1 ? 0 : horizontal,
                      marginTop: firstRow ? 0 : vertical,
                    },
                  ]}>
                  {item}
                </View>
              );
            })}
          </View>
        );
      })}
    </View>
  );
};

export default CheckBox;
