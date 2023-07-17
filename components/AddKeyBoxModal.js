import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Modal, Text, Button, TextInput } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import themes from '../utils/themes';
import Spacer from './Spacer';

const AddKeyboxModal = ({ visible, handleAdd, handleDismiss }) => {
  const [modalVisible, setModalVisible] = useState(visible);
  const [deviceName, setDeviceName] = useState('');
  const [deviceId, setDeviceId] = useState('');

  // Update the local state when the `visible` prop changes
  useEffect(() => {
    setModalVisible(visible);
  }, [visible]);

  const handleDeviceNameChange = (text) => {
    setDeviceName(text);
  };

  const handleDeviceIdChange = (text) => {
    setDeviceId(text);
  };

  const handleAddDevice = () => {
    // Perform validation and add the device
    handleAdd(deviceName, deviceId);
  };

  return (
    <Modal visible={modalVisible} onDismiss={() => handleDismiss()} contentContainerStyle={styles.container}>

        <Text style={styles.title}>Add a New Device</Text>

        <Text style={styles.inputLabel}>Insert ID number: </Text>
        <TextInput
          label="Device ID"
          value={deviceId}
          onChangeText={handleDeviceIdChange}
          style={styles.input}
        />

        <Text style={styles.inputLabel}>Insert Device Name: </Text>
        <TextInput
          label="Device Name"
          value={deviceName}
          onChangeText={handleDeviceNameChange}
          style={styles.input}
        />

      

        <View style={styles.buttonContainer}>
            
            <Button mode="outlined" style={styles.buttonOutlined} onPress={handleDismiss}>
              Cancel
            </Button>
            
            <Button mode="contained" style={styles.button} onPress={handleAddDevice}>
              Submit
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
    textAlign: 'center',
    marginBottom: 10,
  },
  
  input: {
    marginBottom: 10,
  },

  inputLabel: {
    paddingHorizontal: 5,
    fontWeight: 'bold',
  },

  buttonContainer: {
    marginVertical: 15,
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

export default AddKeyboxModal;
