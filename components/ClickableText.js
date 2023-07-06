import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const ClickableText = ({ text, handlePress }) => {
  return (
    <TouchableOpacity onPress={handlePress} style={styles.clickableText}>
      <Text>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  clickableText: {
    flex: 1,
    alignItems: 'center',
    // Add any additional styles for the TouchableOpacity component here
  },
});

export default ClickableText;