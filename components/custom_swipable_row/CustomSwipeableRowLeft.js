import React from 'react';
import { Animated, StyleSheet } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

const CustomSwipeableRowLeft = ({ progress, dragX, handlePress }) => {
  const trans = dragX.interpolate({
    inputRange: [0, 50, 100, 101],
    outputRange: [-20, 0, 0, 1],
  });
  return (
    <RectButton style={styles.leftAction} onPress={handlePress}>
      <Animated.Text
        style={[
          styles.actionText,
          {
            transform: [{ translateX: trans }],
          },
        ]}
      >
        Archive
      </Animated.Text>
    </RectButton>
  );
};

export default CustomSwipeableRowLeft;

const styles = StyleSheet.create({
  leftAction: {
    // Define the styles for the left action component
  },
  actionText: {
    // Define the styles for the text within the left action component
  },
});