import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SelectDropdown from 'react-native-select-dropdown';
import { Ionicons } from '@expo/vector-icons';

const CustomSelectDropdown = ({list, selectText }) => {
    
    return (
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
                handleKeyboxSelect(selectedItem);
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
        />
  )
}

export default CustomSelectDropdown

const styles = StyleSheet.create({


    // DROPDOWN SELECT

    dropdownButton: {
        width: '90%',
        height: 40,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#000',
        // alignSelf: 'center',
    },

    dropdownButtonText: {
        color: '#000',
        textAlign: 'center',
        fontWeight: 'bold',
    },

    dropdownDropdown: {
        backgroundColor: '#eee',
        borderRadius: 12,
    },

    dropdownRow: {
        backgroundColor: '#eee', 
        borderBottomColor: '#000'
    },

    dropdownRowText: {
        color: '#000',
        textAlign: 'center',
        fontWeight: 'bold',
    },

    dropdownSelectedRow: {
        backgroundColor: '#bbb'
    },

    dropdownSearchInput: {
        backgroundColor: '#eee',
        borderBottomWidth: 1,
        borderBottomColor: '#000',
    },

})