import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Modal, Text, Button, IconButton } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import themes from '../utils/themes';

const LogoutModal = ({ visible, handleSignOut, handleDismiss }) => {

    const [ modalVisible, setModalVisible ] = useState(visible);


    // Update the local state when the `visible` prop changes
    useEffect(() => {
        setModalVisible(visible);
    }, [visible]);


    return (
        <Modal visible={modalVisible} onDismiss={() => handleDismiss()} contentContainerStyle={styles.container}>
            
            <Text style={styles.title}>Confirm Log Out</Text>
            <Text style={styles.message}>
              Are you sure you want to logout from Key Box Dashboard?
            </Text>
            <View style={styles.buttonContainer}>
                
                <Button mode="outlined" style={styles.buttonOutlined} onPress={() => handleDismiss()}>
                    Cancel
                </Button>

                <Button mode="contained" style={styles.button} onPress={() => handleSignOut()}>
                    Logout
                </Button>

            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: '90%',
    alignSelf: 'center',
    padding: 20,
    borderRadius: 5,
  },

  iconContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },

  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 10,
  },

  message: {
    marginBottom: 20,
    color: 'black',
  },

  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },

  buttonOutlined: {
    borderRadius: 5,
  },

  button: {
    backgroundColor: themes.colors.secondaryDark,
    borderRadius: 5,
  },
});

export default LogoutModal;
