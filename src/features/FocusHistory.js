import React from 'react';
import { FlatList, View, Text, StyleSheet } from 'react-native';
import { colors } from '../utils/colors';

export const FocusHistory = ({ history }) => {
  if (!history || !history.length)
    return <Text style={styles.text}>We Haven't Focused On Anything Yet.</Text>;
  return (
    <View style={styles.historyContainer}>
      {!history || !history.length ? (
        <Text style={styles.text}>We Haven't Focused On Anything Yet.</Text>
      ) : (
        <>
          <Text style={styles.title}>Things You've Focused On👇</Text>
          <FlatList
            data={history}
            renderItem={({ item }) => (
              <Text style={styles.text}>- {item}</Text>
            )}
          />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  historyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: { color: colors.white, fontSize: 15, fontWeight: 'bold' },
  text: {
    color: colors.white,
  },
});
