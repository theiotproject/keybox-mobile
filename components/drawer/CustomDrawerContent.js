import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';
import { Menu, Divider, Provider } from 'react-native-paper';
import { logo } from '../../assets';
import { Image } from 'react-native';

const CustomDrawerContent = (props) => {
  const [keybox, setKeybox] = React.useState('Keybox 1');
  const [menuVisible, setMenuVisible] = React.useState(false);

  const showMenu = () => setMenuVisible(true);
  const hideMenu = () => setMenuVisible(false);

  const handleKeyboxSelect = (selectedKeybox) => {
    setKeybox(selectedKeybox);
    hideMenu();
  };

  return (
    <DrawerContentScrollView {...props} style={styles.drawerContentContainer}>
      <View style={styles.contentContainer}>
            <View style={styles.profileContainer}>
                {/* Small profile picture */}
                <View style={styles.profileImageContainer}>
                    <Image
                        source={logo}
                        style={styles.profileImage}
                    />
                </View>

                {/* User name */}
                <Text style={styles.userName}>John Doe</Text>
            </View>

            {/* Select input */}
            <View style={styles.selectContainer}>
                <Provider>
                    <Menu
                        visible={menuVisible}
                        onDismiss={hideMenu}
                        anchor={
                            <Text onPress={showMenu} style={styles.selectText}>
                                {keybox}
                            </Text>
                        }
                    >
                        <Menu.Item
                            onPress={() => handleKeyboxSelect('Keybox1')}
                            title="Keybox 1"
                        />
                        <Menu.Item
                            onPress={() => handleKeyboxSelect('Keybox2')}
                            title="Keybox 2"
                        />
                        <Menu.Item
                            onPress={() => handleKeyboxSelect('Keybox3')}
                            title="Keybox 3"
                        />
                    </Menu>
                </Provider>
            </View>

            {/* Custom drawer items */}
            <View style={styles.drawerItemsContainer}>
                <DrawerItem
                    label="Cards"
                    onPress={() => props.navigation.navigate('Cards')}
                    icon={({ color, size }) => (
                    <Ionicons name="card" size={size} color={color} />
                    )}
                />
                <DrawerItem
                    label="Key Slots"
                    onPress={() => props.navigation.navigate('Key Slots')}
                    icon={({ color, size }) => (
                    <Ionicons name="folder" size={size} color={color} />
                    )}
                />
                <DrawerItem
                    label="Events"
                    onPress={() => props.navigation.navigate('Events')}
                    icon={({ color, size }) => (
                    <Ionicons name="time" size={size} color={color} />
                    )}
                />
                <DrawerItem
                    label="Settings"
                    onPress={() => props.navigation.navigate('Settings')}
                    icon={({ color, size }) => (
                    <Ionicons name="settings" size={size} color={color} />
                    )}
                />
            </View>
      </View>

      {/* Sign-out button */}
      <View style={styles.signOutContainer}>
        <DrawerItem
            label="Sign Out"
            onPress={() => {
                // Handle sign-out
            }}
            icon={({ color, size }) => (
                <Ionicons name="log-out" size={size} color={color} />
            )}
        />
      </View>
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  


    contentContainer: {
        flex: 1,
    },

    profileContainer: {
        flex: 1,
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },

    profileImageContainer: {
        borderRadius: 24,
        overflow: 'hidden',
    },

    profileImage: {
        flex: 1,
        width: 75,
        height: 75,
        resizeMode: 'contain'    
    },

    userName: {
        fontSize: 32,
        fontWeight: 'bold',
        marginTop: 8,
    },

    selectContainer: {
        flex: 1,
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },

    selectText: {
        fontSize: 16,
        color: '#333',
    },

    drawerItemsContainer: {
        flex: 1,
    },

    signOutContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
});

export default CustomDrawerContent;
