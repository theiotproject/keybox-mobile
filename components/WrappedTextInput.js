import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, TextInput } from 'react-native-paper';

const WrappedTextInput = ({ label, value, onChangeText, toggleVisibility, disabled, keyboardType, secureTextEntry }) => {
  const [hideText, setHideText] = useState(true);

  return (
    <View style={styles.inputWrapper}>
      <TextInput
        mode='outlined'
        label={label}
        value={value}
        style={[styles.input]}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry && hideText}
        keyboardType={keyboardType}
        disabled={disabled}
        underlineColorAndroid={'#000'}
        right={
          // TODO make the icon visible
          toggleVisibility ?
          (
            <TextInput.Icon 
              size={50}
              name='eye'
              color={'#000'}
              onPress={() => setHideText(!hideText)}
            
            />
          ) : null
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  
  // inputWrapper: {
  //   // marginVertical: 12,
  // },

  // input: {

  // },

});

export default WrappedTextInput;
