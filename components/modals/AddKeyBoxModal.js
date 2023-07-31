import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Modal, Text, Button, TextInput } from 'react-native-paper';
import themes from '../../utils/themes';
import { yupResolver } from '@hookform/resolvers/yup';
import { addDeviceValidationSchema } from '../../utils/yupShema';
import { Controller, useForm } from 'react-hook-form';

// Modal that will be displayed when user wants to add new device
// Parameters are: 
// visible -> variable for handling visibility of modal
// handleAdd -> function for handling submit
// handleDismiss -> function to handle onDismiss 
const AddKeyboxModal = ({ visible, handleAdd, handleDismiss }) => {
  // Variable for handling modal visibility
  const [modalVisible, setModalVisible] = useState(visible);

  // Validation of inputs vie Yup Resolver  
  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(addDeviceValidationSchema),
      defaultValues: {
        deviceId: '',
        deviceName: '',
    },
  });

  // When submit button clicked
  const onSubmit = (data) => {  
    
    // Add keybox using deviceId, deviceName
    handleAdd(data.deviceId, data.deviceName);
  };

  // Update the local state when the `visible` prop changes
  useEffect(() => {
    setModalVisible(visible);
  }, [visible]);


  return (
    <Modal visible={modalVisible} onDismiss={() => handleDismiss()} contentContainerStyle={styles.container}>

        <Text style={styles.title}>Add a New Device</Text>

        <Text style={styles.inputLabel}>Insert ID number: </Text>
        {/* DEVICE ID */}
        <Controller
          style={styles.controller}
          control={control}
          render={({ field }) => (
            <>
              <TextInput
                  label='Device Id'
                  mode='outlined'
                  onChangeText={field.onChange}
                  onBlur={field.onBlur}
                  value={field.value}
                  placeholder="Device Id"
                  style={styles.inputText}
                  error={errors.deviceId ? errors.deviceId.message : null}
              />
              {errors.deviceId && (
                  <Text style={styles.error}>{errors.deviceId.message}</Text>
              )}
            </>
          )}
          name="deviceId"
          rules={{ required: true }}
          defaultValue=""
        />


        <Text style={styles.inputLabel}>Insert Device Name: </Text>
        {/* DEVICE NAME */}
        <Controller
          style={styles.controller}
          control={control}
          render={({ field }) => (
            <>
              <TextInput
                  label='Device Name'
                  mode='outlined'
                  onChangeText={field.onChange}
                  onBlur={field.onBlur}
                  value={field.value}
                  placeholder="Device Name"
                  style={styles.inputText}
                  error={errors.deviceName ? errors.deviceName.message : null}
              />
              {errors.deviceName && (
                <Text style={styles.error}>{errors.deviceName.message}</Text>
              )}
            </>
          )}
          name="deviceName"
          rules={{ required: true }}
          defaultValue=""
        />

      
        <View style={styles.buttonContainer}>
            
            <Button mode="outlined" style={styles.buttonOutlined} onPress={handleDismiss}>
              Cancel
            </Button>
            
            <Button mode="contained" rippleColor={themes.colors.primaryRippleColor} style={styles.button} onPress={handleSubmit(onSubmit)}>
              Submit
            </Button>
        </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
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
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    borderBottomWidth: 1,
    paddingBottom: 10,
    marginBottom: 10,
  },
  
  input: {
    marginBottom: 10,
  },

  inputLabel: {
    marginTop: 10,
    fontSize: 15,
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

  error: {
    color: 'red',
    fontSize: 10,
},
});

export default AddKeyboxModal;
