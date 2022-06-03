import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const BoxObjectModelScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>BoxObjectModel</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    title: {
      fontSize: 20,
      borderWidth: 10,
      paddingHorizontal:  100,
      paddingVertical:  50,
      //backgroundColor:'blue',
    },
    container: {
      flex: 1,
      backgroundColor:'blue',
    },
});
