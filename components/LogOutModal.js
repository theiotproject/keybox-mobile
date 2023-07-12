import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Modal, Text, Button, IconButton } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';

const LogoutModal = ({ visible, handleSignOut, handleDismiss }) => {

    const [ modalVisible, setModalVisible ] = useState(visible);


    // Update the local state when the `visible` prop changes
    useEffect(() => {
        setModalVisible(visible);
    }, [visible]);


    return (
        <Modal visible={modalVisible} onDismiss={() => handleDismiss()} contentContainerStyle={styles.container}>
            <View style={styles.iconContainer}>
                <Icon name="warning" size={30} color="orange" />
            </View>
            <Text style={styles.title}>Sign Out Warning</Text>
            <Text style={styles.message}>
                You are about to sign out. Are you sure you want to continue?
            </Text>
            <View style={styles.buttonContainer}>
                <Button mode="contained" onPress={() => handleSignOut()}>
                    Sign Out
                </Button>
                <Button mode="outlined" onPress={() => handleDismiss()}>
                    Dismiss
                </Button>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
  },
  iconContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  message: {
    marginBottom: 20,
    textAlign: 'center',
    color: 'black',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export default LogoutModal;
