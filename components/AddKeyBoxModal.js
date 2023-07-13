import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Modal, Text, Button, TextInput } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';

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
      <View style={styles.iconContainer}>
        <Icon name="warning" size={30} color="orange" />
      </View>
      <Text style={styles.title}>Add Device</Text>
      <TextInput
        label="Device Name"
        value={deviceName}
        onChangeText={handleDeviceNameChange}
        style={styles.input}
      />
      <TextInput
        label="Device ID"
        value={deviceId}
        onChangeText={handleDeviceIdChange}
        style={styles.input}
      />
      <View style={styles.buttonContainer}>
        <Button mode="contained" onPress={handleAddDevice}>
          Add
        </Button>
        <Button mode="outlined" onPress={handleDismiss}>
          Cancel
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
  input: {
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export default AddKeyboxModal;
