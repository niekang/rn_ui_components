import React from 'react';
import {Text, View, StyleSheet, StyleProp, ViewStyle} from 'react-native';

export type RedDotProps = {
  style?: StyleProp<ViewStyle>;
  dotWrap?: StyleProp<ViewStyle>;
  value?: number;
  showWithoutValueText?: boolean;
};

const RedDot = (props: RedDotProps) => {
  const {value = 0, style, dotWrap, showWithoutValueText} = props;
  let countStr = value ? value.toString() : '0';
  if (Number(value) > 99) {
    countStr = '99+';
  }
  let cornerMarkWidth =
    countStr === '0'
      ? 0
      : 14 + (countStr.length < 3 ? 3 : 5) * (countStr.length - 1);
  if (showWithoutValueText === true) {
    cornerMarkWidth = 14;
  }
  return (
    <View style={style}>
      <View
        style={[
          styles.dotWrap,
          StyleSheet.flatten(dotWrap),
          !showWithoutValueText && {width: cornerMarkWidth},
        ]}>
        {!showWithoutValueText && <Text style={styles.value}>{countStr}</Text>}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  dotWrap: {
    backgroundColor: '#FA7070',
    borderRadius: 7,
    height: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  value: {
    fontSize: 10,
    color: '#ffffff',
  },
});

export default RedDot;
