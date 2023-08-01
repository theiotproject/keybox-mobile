import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomSwipeableRowLeft from './CustomSwipeableRowLeft'
import { Gesture, GestureDetector, GestureHandlerRootView, Swipeable } from 'react-native-gesture-handler'
import CustomSwipeableRowRight from './CustomSwipeableRowRight';
import { TouchableRipple } from 'react-native-paper';

const CustomSwipableRow = ({ children, handlePressLeft, handlePressRight}) => {
  return (
    <GestureHandlerRootView style={styles.container}>

        <Swipeable
        
          renderLeftActions={(progress, dragX) => (
            <CustomSwipeableRowLeft
              progress={progress}
              dragX={dragX}
              handlePress={() => handlePressLeft()} // You can adjust this as needed
            />
          )}

          renderRightActions={(progress, dragX) => (
            <CustomSwipeableRowRight
              progress={progress}
              dragX={dragX}
              handlePress={() => handlePressRight()}
            />
          )}
          leftThreshold={5}
          rightThreshold={5}
        >
          {children}
        </Swipeable>

    </GestureHandlerRootView>
    
  );
};

export default CustomSwipableRow

const styles = StyleSheet.create({
  container: {
    width: '100%',
    // flex: 1,
    flexDirection:'row',
    // backgroundColor: 'blue',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center'
  }


})