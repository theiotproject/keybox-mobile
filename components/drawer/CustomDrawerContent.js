import React, { useContext, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { DrawerContentScrollView, DrawerItem, } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';
import { logo } from '../../assets';
import { Image } from 'react-native';
import { useState } from 'react';
import CustomSelectDropdown from '../CustomSelectDropdown';
import { AuthContext } from '../../context/AuthContext';
import renderDrawerItems from '../../utils/renderDrawerItems';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { GetKeyBoxes } from '../../utils/dataService';
import { ActivityIndicator } from 'react-native-paper';
import themes from '../../utils/themes';
import TestSwipeableRow from '../custom_swipable_row/TestSwipeableRow';
import CustomDropdown from '../CustomDropdown';

const countries = ["Egypt", "Canada", "Australia", "Ireland", "Canada", "Australia", "Ireland"];


const CustomDrawerContent = (props) => {


    const [keyboxList, setKeyboxList] = useState([{deviceId: '1', deviceName: 'empty'}]);

    const handleKeyboxSelect = (index) => {
        
        props.handleSelectDevice(props.keyboxList[index]);
    };

    const handleAddKeybox = () => {
        props.handleAddDevice();
    }

    const handleEditKeybox = (docId, deviceName, deviceStatus) => {
        props.handleEditDevice(docId, deviceName, deviceStatus);
    }

    const { user } = useContext(AuthContext);

    useEffect(() => {
        // Ensure props.keyboxList is available and an array before setting the state
        if (Array.isArray(props.keyboxList)) {
            setKeyboxList(props.keyboxList);
        }
    }, [props.keyboxList]);


    
    return (

        <DrawerContentScrollView {...props} 
            style={styles.drawerContentContainer}
        >
            <View style={styles.contentContainer}>

                <Ionicons 
                    name='reorder-three-outline' 
                    style={styles.hamburgerIcon} 
                    onPress={() => props.navigation.closeDrawer()}
                />

                {/* TODO maybe change TouchableOpacity back to View */}
                {/* Profile Container */}
                <TouchableOpacity style={styles.profileContainer} onPress={() => alert("Changing Profile data")}>
                    {/* Small profile picture */}
                    <View style={styles.profileImageContainer}>
                        <Image
                            source={logo}
                            style={styles.profileImage}
                        />
                    </View>

                    {/* User name */}
                    <Text style={styles.userName}>{user ? user.displayName : "No Name"}</Text>
                    {/* User email */}
                    <Text>{user ? user.email : "No email"}</Text>

                </TouchableOpacity>

                {/* Select Input */}
                

                {props.loading ? (
                    <ActivityIndicator size="medium" color={themes.colors.primary} />
                ) : (  
                    <CustomDropdown 
                        style={styles.customSelectDropdown}
                        data={keyboxList?.map((keybox) => keybox.deviceName)} 
                        keyboxList={keyboxList} 
                        selectText={"Select Keybox"} 
                        handleAdd={() => handleAddKeybox()}
                        handleEdit={(device) => handleEditKeybox(device)}
                        handleSelect={(selectedItem) => handleKeyboxSelect(selectedItem)}
                    />
                )}

                
                {/* Custom Drawer Items */}
                <View style={styles.drawerItemsContainer}>
                   
                    {renderDrawerItems(props)}
                    
                </View>
            </View>    

            
            {/* Sign-Out Button */}
            <View style={styles.signOutContainer}>
                <DrawerItem
                    style={styles.drawerItem}
                    label="Sign Out"
                    labelStyle={styles.signOutLabel}

                    onPress={() => props.handleLogout()}
                
                    icon={({ color, size }) => (
                        <Ionicons name="log-out-outline" size={size} color={color} />
                    )}
                />
            </View>
        </DrawerContentScrollView>

    );
};

const styles = StyleSheet.create({
    
    drawerContentContainer: {

    },

    contentContainer: {
        flex: 1,
        height: '100%',
    },

    // Navigation
    hamburgerIcon: {
        fontSize: 45,
        width: '100%',
        paddingHorizontal: 10,
        paddingVertical: 3,
        borderBottomWidth: 1,
    },

    // PROFILE
    profileContainer: {
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },

    profileImageContainer: {
        width: 50,
        height: 50,
        borderRadius: 100,
        overflow: 'hidden',
        borderWidth: 2,  
        borderColor: '#eee',
    },

    profileImage: {
        width: 75,
        height: 75,
        resizeMode: 'contain',     
    },

    userName: {
        fontSize: 32,
        fontWeight: 'bold',
        marginTop: 8,
    },

    // SELECTION
    selectContainer: {
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        // backgroundColor: 'blue',
        
    },
    
    selectContainerInner: {
        // display: 'flex',
        flexDirection: 'row',
        alignContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'pink',
        position:'relative'

    },

    selectText: {
        fontSize: 16,
        color: '#333',
    },

    customSelectDropdown: {
        flex: 4,
        // backgroundColor: 'red',

    },
    
    iconAddDropdown: {
        flex: 1,
        marginEnd: 5,
        alignSelf: 'center',
        alignContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'green',
    },

    // DRAWER ITEMS
    drawerItemsContainer: {

    },

    drawerItem: {

    },
    
    drawerItemLabel: {
        fontSize: 25,
        fontWeight: 'bold',
    },

    // SIGN OUT
    signOutContainer: {
        flex: 1,
        marginTop: 5,
        borderTopWidth: 1,
        width: '100%',

    },

    signOutLabel: {
        color: '#000',
        fontSize: 25,
        fontWeight: 'bold',
    }

});

export default CustomDrawerContent;
