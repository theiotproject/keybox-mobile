import React from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';

const WrappedTextInputOLD = ({ label, value, onChangeText }) => {
  return (
    <View style={styles.inputWrapper}>
      <TextInput
        label={label}
        value={value}
        style={[styles.input]}
        onChangeText={onChangeText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    paddingHorizontal: 20,
  },
  inputWrapper: {
    marginTop: 25,
  },
});

export default WrappedTextInputOLD;
