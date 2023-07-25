import React, { useContext, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { DrawerContent, DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';
import { logo } from '../../assets';
import { Image } from 'react-native';
import { useState } from 'react';
import SelectDropdown from 'react-native-select-dropdown';
import CustomSelectDropdown from '../CustomSelectDropdown';
import { signOut } from 'firebase/auth';
import { auth, db } from '../../firebase';
import { DrawerActions, getFocusedRouteNameFromRoute, useIsFocused, useNavigation } from '@react-navigation/native';
import themes from '../../utils/themes';
import { AuthContext } from '../../context/AuthContext';
import LogoutModal from '../modals/LogOutModal';
import renderDrawerItems from '../../utils/renderDrawerItems';
import { Pressable } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';


const CustomDrawerContent = (props) => {


    const [keybox, setKeybox] = useState('Keybox 1');
    const [list, setList] = useState(["Office", "Production", "Storage"]);
    const handleKeyboxSelect = (selectedKeybox) => {
        
        props.handleSelectDevice(selectedKeybox);
        // setKeybox(selectedKeybox);
        // alert(selectedKeybox)
    };

    const { user } = useContext(AuthContext);


// TODO TRYING TO HANDLE FIREBASE

    const [snapshot, setSnapshot ] = useState();

    const getUserKeyBoxes = async () => {
        
        // TODO get keyboxes from firebase
        // firebase
        
    }

    
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
                <View style={styles.selectContainer}>
                    <CustomSelectDropdown list={list} selectText={"Select Keybox"} handleSelect={(selectedItem) => handleKeyboxSelect(selectedItem)} allowSearch={true}/>
                </View>

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
                    labelStyle={styles.drawerItemLabel}

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

    // Navigationeiro
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
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },

    selectText: {
        fontSize: 16,
        color: '#333',
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
        borderTopWidth: 1,
        width: '100%',
    },


});

export default CustomDrawerContent;
