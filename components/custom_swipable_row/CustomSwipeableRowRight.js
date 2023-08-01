import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Animated, StyleSheet } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

const CustomSwipeableRowRight = ({ progress, dragX, handlePress }) => {
  const trans = dragX.interpolate({
    inputRange: [-101, -100, 0],
    outputRange: [1, 0, 0],
  });

  return (
    <RectButton style={styles.rightAction} onPress={handlePress}>
      <Animated.View
        style={[
          styles.actionView,
          {
            transform: [{ scale: trans }],
          },
        ]}
      >
        <Ionicons name="trash" size={25} color="#000" />
      </Animated.View>
    </RectButton>
  );
};

export default CustomSwipeableRowRight;

const styles = StyleSheet.create({
  rightAction: {
    // Define the styles for the right action component
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  actionView: {
    padding: 10,
  },
});
