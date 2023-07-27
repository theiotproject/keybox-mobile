import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Modal, Text, Button, TextInput, Switch } from 'react-native-paper';
import themes from '../../utils/themes';
import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, useForm } from 'react-hook-form';
import { editDeviceValidationSchema } from '../../utils/yupShema';

const EditKeyboxModal = ({ visible, handleEdit, handleDismiss, handleDelete, keybox }) => {
  // Variable for handling modal visibility
  const [modalVisible, setModalVisible] = useState(visible);

  // Variable for handling status
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);


  // Validation of inputs vie Yup Resolver  
  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(editDeviceValidationSchema),
      defaultValues: {
        deviceName: '',
    },
  });

  // When submit button clicked
  const onSubmit = (data) => {  
    // Update keybox
    handleEdit("", data.deviceName, isOnline);
  };

  // Update the local state when the `visible` prop changes
  useEffect(() => {
    setModalVisible(visible);
  }, [visible]);


  return (
    <Modal visible={modalVisible} onDismiss={() => handleDismiss()} contentContainerStyle={styles.container}>

        <Text style={styles.title}>Edit Device</Text>

        <Text style={styles.inputLabel}>Insert ID number: </Text>
        {/* DEVICE ID */}
        <Text variant='labelMedium'>{keybox?.docId ? keybox.docId : "Here should be id..."}</Text>


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

       
        <Switch
          trackColor={{false: '#767577', true: '#81b0ff'}}
          thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
         

      
        <View style={styles.buttonContainer}>
            
            <Button mode="outlined" style={styles.buttonOutlined} onPress={handleDismiss}>
              Cancel
            </Button>
            
            <Button mode="contained" style={styles.button} onPress={handleSubmit(onSubmit)}>
              Submit
            </Button>
        </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: '50%',
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

export default EditKeyboxModal;
