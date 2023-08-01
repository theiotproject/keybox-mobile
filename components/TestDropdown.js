import { Ionicons } from '@expo/vector-icons';
import React, { useState, useRef } from 'react';
import { View, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { Swipeable, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { Text, TouchableRipple } from 'react-native-paper';
import Animated from 'react-native-reanimated';

const TestDropdown = ({ data, keyboxList, handleSelect }) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(null); 
  const flatListRef = useRef();

  const [isOptions, setIsOptions] = useState(false)


  const showOptions = () => {
    setIsOptions(true)
    // flatListRef.current.scrollToIndex({ index: 0 })
  }

  const handleItemSelect = (item, index) => {
    setIsOptions(false)
    setSelectedItem(item);
    setSelectedIndex(index)
    handleSelect(index);
  };

  // TODO make it work
  const renderRightActions = (progress, dragX, item) => {
    const onPress = () => {
      handleItemSelect(item);
    };

    return (
      <TouchableOpacity
        onPress={onPress}
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'red',
          width: 50,
        }}
      >
        <Ionicons name='trash' size={25} />
      </TouchableOpacity>
    );
  };
  
  // TODO make it work
  // copy of renderRightItem
  const renderLeftActions = (progress, dragX, item) => {
    const onPress = () => {
      handleItemSelect(item);
    };

    return (
      <TouchableOpacity
        onPress={onPress}
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'red',
          width: 50,
        }}
      >
        <Ionicons name='create' size={25} />
      </TouchableOpacity>
    );
  };

  const renderItem = ({ item, index }) => {
    return (
      <Swipeable
        style={styles.itemContainer}
        renderRightActions={(progress, dragX) => renderRightActions(progress, dragX, item)}
        renderLeftActions={(progress, dragX) => renderLeftActions(progress, dragX, item)}
      >
        <TouchableRipple
          style={styles.itemTouchable} // Adjust the height of the item container
          onPress={() => handleItemSelect(item, index)}
        >
          <Text>{item}</Text>
        </TouchableRipple>
      </Swipeable>
    );
  };

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={() => !isOptions ? showOptions() : setIsOptions(false)}>
        <View style={styles.dropdownButtonContainer}>
          <Text style={styles.dropdownButtonText} variant='titleMedium'>
            {selectedItem ? selectedItem : 'Select Keybox'}
          </Text>
          <Ionicons style={styles.dropdownButtonIcon} name={isOptions ? 'chevron-up' : 'chevron-down'} size={20} />
        </View>
      </TouchableWithoutFeedback>

      {isOptions ? (
        <View style={styles.dropdownListContainer}>
          <FlatList
            style={styles.flatList}
            ref={flatListRef}
            data={data}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
            showsVerticalScrollIndicator={false}
            scrollEnabled={false}
          />
        </View>
      ) : null}

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
  },

  dropdownButtonIcon: {
    flex: 1,
    alignSelf: 'center',
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

export default TestDropdown;
