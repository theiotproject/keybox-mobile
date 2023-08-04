import { Ionicons } from '@expo/vector-icons';
import React, { useState, useRef } from 'react';
import { View, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { Swipeable, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { Text, TouchableRipple } from 'react-native-paper';
import Animated, { useSharedValue, withDelay, withTiming } from 'react-native-reanimated';

const CustomDropdown = ({ data, keyboxList, handleSelect, handleAdd, handleEdit }) => {
  // State variables to track the selected item and its index
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(null); 
  const flatListRef = useRef();

  // State variable to toggle the dropdown list visibility
  const [isOptions, setIsOptions] = useState(false);

  // ---------------------------------
  // TODO make animation when closing
  // ANIMATIONS
  const scaleY = useSharedValue(0); // Initialize with starting value 0
  const translateY = useSharedValue(-200); // Initialize with starting value -200

  const animateFlatList = (toValue) => {
    scaleY.value = withTiming(toValue, { duration: 150 });
    translateY.value = withTiming(toValue === 1 ? 0 : -200, { duration: 150 });
  };

  // Function to show the dropdown list
  const showOptions = () => {
    setIsOptions(true);
    animateFlatList(1)
  };
  // Function to hide the dropdown list
  const hideOptions = () => {
    animateFlatList(0);
    setIsOptions(false);
  };
  // ---------------------------------


  // Function to handle item selection
  const handleItemSelect = (item, index) => {
    hideOptions()
    setSelectedItem(item);
    setSelectedIndex(index); // Set the selected index
    handleSelect(index); // Call the provided handleSelect function with the selected index
  };


  
  // Function to render swipeable left actions (e.g., edit)
  const renderLeftActions = (progress, dragX, item, index) => {
    const onPress = () => {
      // Editing of the item using handleEdit function
      console.log(keyboxList[index]);
      handleEdit(keyboxList[index]);
      hideOptions()
    };

    return (
      <TouchableOpacity
        onPress={onPress}
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          width: 50,
        }}
      >
        <Ionicons name='create' size={25} />
      </TouchableOpacity>
    );
  };

  // Function to render each item in the dropdown list
  const renderItem = ({ item, index }) => {
    return (
      <Swipeable
        style={styles.itemContainer}
        renderLeftActions={(progress, dragX) => renderLeftActions(progress, dragX, item, index)}
      >
        <TouchableRipple
          style={styles.itemTouchable} // Adjust the height of the item container
          onPress={() => handleItemSelect(item, index)} // Call handleItemSelect on item press with the index
          onLongPress={() => handleEdit(keyboxList[index])}
        >
          <Text>{item}</Text>
        </TouchableRipple>
      </Swipeable>
    );
  };

  return (
    <View style={styles.container}>
      {/* Toggle the dropdown list visibility on press */}
      <TouchableWithoutFeedback >
        <View style={styles.dropdownButtonContainer}>
          {/* Render the "Add" icon to add a new item */}
          <Ionicons 
            style={styles.dropdownButtonIcon} 
            name="add-circle" 
            size={20} 
            onPress={() => handleAdd()} // Call handleAdd function on "Add" icon press
          />
          {/* Render the selected item or default text */}
          <Text 
            style={styles.dropdownButtonText} 
            variant='titleMedium'
            onPress={() => !isOptions ? showOptions() : hideOptions()}>
            {selectedItem ? selectedItem : 'Select Keybox'}
          </Text>
          {/* Render the "Chevron" icon to indicate dropdown list visibility */}
          <Ionicons 
            style={styles.dropdownButtonIcon} 
            name={isOptions ? 'chevron-up' : 'chevron-down'} 
            size={20} 
            onPress={() => !isOptions ? showOptions() : hideOptions()}/>
        </View>
      </TouchableWithoutFeedback>

      {/* Render the dropdown list when isOptions is true */}
      {isOptions ? (
        <Animated.View
          style={[
            styles.dropdownListContainer,
            { transform: [{ scaleY: scaleY }, { translateY: translateY }] }, // Apply the animated transformations
          ]}
        >
          {/* Render the FlatList containing the items */}
          <FlatList
            style={styles.flatList}
            ref={flatListRef}
            data={data}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
            showsVerticalScrollIndicator={false}
            scrollEnabled={false}
          />
        </Animated.View>
        
      ) : null}

      {/* Render the blurred background to make the dropdown list prominent */}
      {isOptions ? <View style={styles.blurView}></View> : null}
    </View>
  );
};

const styles = StyleSheet.create({

  container: {
    width: '100%',
    alignSelf: 'center',
    position: 'relative', // Add position: relative to the container
    zIndex: 999, // Set a higher zIndex value to make it appear on top of other elements
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray'
  },

  dropdownButtonContainer: {
    paddingHorizontal: 16,
    height: 40,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'black',

    flexDirection: 'row',
    alignContent: 'space-around',
    justifyContent: 'center',
  },

  dropdownButtonText: {
    flex: 9,
    color: 'black',
    fontWeight: 'bold',
    alignSelf: 'center',
    textAlign: 'center'
  },

  dropdownButtonIcon: {
    flex: 1,
    alignSelf: 'center',
    textAlign: 'center',
  },

  itemContainer: {
    backgroundColor: 'white',
  },

  itemTouchable: {
    paddingHorizontal: 16,
    paddingVertical: 15, // Adjust the height of the item container
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },

  dropdownListContainer: {
    position: 'absolute', // Add absolute positioning for the dropdown list container
    top: 60,
    marginHorizontal: 12,    
    width: '100%', // Make it take full width of the parent container
    backgroundColor: 'white',
    borderRadius: 15,
    borderWidth: 1,
    borderColor: 'black',
    zIndex: 999, // Set a higher zIndex value to make it appear on top of other elements
    elevation: 5, // Add elevation to ensure it appears above other elements (for Android)
  },

  flatList: {
  
    backgroundColor: 'white',
    borderRadius: 15,
    borderColor: 'black',
  },


});

export default CustomDropdown;
