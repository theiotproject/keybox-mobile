import { StyleSheet, View, } from 'react-native'
import React, { useState } from 'react'
import SelectDropdown from 'react-native-select-dropdown';
import { Ionicons } from '@expo/vector-icons';
import { Text } from 'react-native-paper';
import { RectButton, Swipeable } from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';
import CustomSwipableRow from './custom_swipable_row/CustomSwipeableRow';
import TestSwipeableRow from './custom_swipable_row/TestSwipeableRow';

const CustomSelectDropdown = ({ list, keyboxList, selectText, handleSelect, handleAdd, handleDelete, allowSearch }) => {
    
    const searchEnabled = allowSearch === undefined ? true : allowSearch;

    const [listTest, setListTest] = useState(['er', 'ker', 'mer']);

    if(searchEnabled) {
        return (
            // WITH SEATCHING
            <SelectDropdown
                data={list}

                // Button
                defaultButtonText={selectText}
                buttonStyle={styles.dropdownButton}
                buttonTextStyle={styles.dropdownButtonText}
                buttonTextAfterSelection={(selectedItem, index) => {
                    return selectedItem;
                }}

                // Row
                rowStyle={styles.dropdownRowStyle}
                rowTextStyle={styles.dropdownRowText}
                rowTextForSelection={(item, index) => {
                    return item;
                }}
                selectedRowStyle={styles.dropdownSelectedRow}

                // Select
                onSelect={(selectedItem, index) => {
                    console.log(selectedItem, index);
                    handleSelect(index);
                }}

                renderDropdownIcon={isOpened => {
                    return <Ionicons name={isOpened ? 'chevron-up' : 'chevron-down'} color={'#000'} size={18} />;
                }}
                dropdownIconPosition={'right'}
                dropdownStyle={styles.dropdownDropdown}

                // Search
                search
                searchInputStyle={styles.dropdownSearchInput}
                searchPlaceHolder={'Search here'}
                searchPlaceHolderColor={'#000'}
                renderSearchInputLeftIcon={() => {
                    return <Ionicons name={'search'} color={'#000'} size={18} />;
                }}

                // Customizing rows
                renderCustomizedRowChild={(item, index) => {
                    return (
                        // <CustomSwipableRow
                        //     handleSwipeLeft={() => {
                        //         // Handle left swipe action here
                        //         alert("Left")
                        //     }}
                        //     handleSwipeRight={() => {
                        //       // Handle right swipe action here
                        //       alert("Right")
                        //     }}
                        // >
                        //     <Text style={styles.dropdownCustomRowText}>{item}</Text> 
                        // </CustomSwipableRow>

                        <TestSwipeableRow/>
                    );
                }}

            />
        )
    } else {
        return (
            // TODO match this dropdown with search one
            // WITHOUT SEARCHING
            <SelectDropdown
                data={list}

                // Button
                defaultButtonText={selectText}
                buttonStyle={styles.dropdownButton}
                buttonTextStyle={styles.dropdownButtonText}
                buttonTextAfterSelection={(selectedItem, index) => {
                    return selectedItem;
                }}

                // Row
                rowStyle={styles.dropdownRowStyle}
                rowTextStyle={styles.dropdownRowText}
                rowTextForSelection={(item, index) => {
                    return item;
                }}
                selectedRowStyle={styles.dropdownSelectedRow}

                // Select
                onSelect={(selectedItem, index) => {
                    console.log(selectedItem, index);
                    handleSelect(selectedItem);
                }}

                renderDropdownIcon={isOpened => {
                    return <Ionicons name={isOpened ? 'chevron-up' : 'chevron-down'} color={'#000'} size={18} />;
                }}
                dropdownIconPosition={'right'}
                dropdownStyle={styles.dropdownDropdown}

                // Customizing rows
                renderCustomizedRowChild={(item, index) => {
                    return (
                        <CustomSwipableRow
                            handleOnPress={() => handleSelect(item)}
                            onLongPress={null}
                            handleSwipeLeft={() => {
                            // Handle left swipe action here
                            }}
                            handleSwipeRight={() => {
                              // Handle right swipe action here
                            }}
                        >
                            <Text onPress={() => handleSelect(item)} style={styles.dropdownCustomRowText}>{item}</Text>
                            
                        </CustomSwipableRow>
                    );
                }}
            />
        )
    }
}

export default CustomSelectDropdown

const styles = StyleSheet.create({


    // DROPDOWN SELECT
    dropdownButton: {
        // width: '100%',
        height: 40,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#000',
        backgroundColor: 'transparent',
    },

    dropdownButtonText: {
        color: '#000',
        textAlign: 'center',
        fontWeight: 'bold',
    },

    dropdownDropdown: {
        marginTop: -20,
        backgroundColor: '#eee',
        borderRadius: 12,
    },

    dropdownRow: {
        backgroundColor: '#eee', 
        borderBottomColor: '#000'
    },
    
    dropdownCustomRow: {
        backgroundColor: 'red',
        // backgroundColor: '#eee', 
        borderBottomColor: '#000'
    },

    dropdownRowText: {
        color: '#000',
        textAlign: 'center',
        fontWeight: 'bold',
    },
    
    dropdownCustomRowText: {
        fontSize: 18,
        color: '#000',
        textAlign: 'center',
        fontWeight: 'bold',
    },

    dropdownSelectedRow: {
        backgroundColor: '#ddd',
    },

    dropdownSearchInput: {
        backgroundColor: '#eee',
        borderBottomWidth: 1,
        borderBottomColor: '#000',
    },

})