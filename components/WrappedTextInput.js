import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';

const WrappedTextInput = ({ label, value, onChangeText, canHide }) => {
  const [hideText, setHideText] = useState(false);

  return (
    <View style={styles.inputWrapper}>
      <TextInput
        mode='flat'
        label={label}
        value={value}
        style={[styles.input]}
        onChangeText={onChangeText}
        secureTextEntry={canHide}
        right={
          canHide ?
          (
            <TextInput.Icon
              name={hideText ? 'eye-off' : 'eye'}
              onPress={() => setHideText(!hideText)}
            />
          ) : null
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  
  inputWrapper: {
    marginVertical: 12,
  },

  input: {
    paddingHorizontal: 20,
  },

});

export default WrappedTextInput;
