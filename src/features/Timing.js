import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { RoundedButton } from '../components/RoundedButton';
import {colors} from '../utils/colors';

export const Timing = ({ onChangeTime }) => {
  return (
    <>
      <View style={styles.timingButton}>
        <Text style={styles.text}>Focus</Text>
        <RoundedButton size={75} title="25" onPress={() => onChangeTime(25)} />
      </View>

      <View style={styles.timingButton}>
        <Text style={styles.text}>Break</Text>
        <RoundedButton size={75} title="5" onPress={() => onChangeTime(5)} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  timingButton: {
    flex: 1,
    alignItems: 'center',
  },
  text: {
    color: colors.white
  }
});