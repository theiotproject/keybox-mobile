import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import themes from '../utils/themes';

const ClickableText = ({ text, handlePress }) => {
  return (
    <TouchableOpacity onPress={handlePress} style={styles.clickableText}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  clickableText: {
    flex: 1,
    alignItems: 'center',
    // Add any additional styles for the TouchableOpacity component here
  },

  text: {
    color: themes.colors.clickableText
  }
});

export default ClickableText;