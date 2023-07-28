import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Modal, Text, Button, TextInput, Switch } from 'react-native-paper';
import themes from '../../utils/themes';
import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, useForm } from 'react-hook-form';
import { editDeviceValidationSchema } from '../../utils/yupShema';
import SwitchSelector from 'react-native-switch-selector';

const EditKeyboxModal = ({ visible, handleEdit, handleDismiss, handleDelete, keybox }) => {
  // Variable for handling modal visibility
  const [modalVisible, setModalVisible] = useState(visible);

  // Variable for handling status
  const [isOnline, setIsOnline] = useState(false);


  // Validation of inputs vie Yup Resolver  
  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(editDeviceValidationSchema),
      defaultValues: {
        deviceName: '',
    },
  });

  // When submit button clicked, edit keybox (send update request to firestore)
  const onSubmit = (data) => {  
    // Update keybox
    // DO NOT PUSH THIS
    console.log(isOnline)
    
    handleEdit("", data.deviceName, isOnline);//DO NOT PUSH THIS
  };

  // Update the local state when the `visible` prop changes
  useEffect(() => {
    setModalVisible(visible);
  }, [visible]);


  // SWITHC SELECTOR

  const options = [
    { label: "Offline", value: false, testID: "switch-offline", accessibilityLabel: "switch-offline" },
    { label: "Online", value: true, testID: "switch-online", accessibilityLabel: "switch-online" },
    
  ];

  return (
    <Modal visible={modalVisible} onDismiss={() => handleDismiss()} contentContainerStyle={styles.container}>

        <Text variant='displaySmall' style={styles.title}>Edit Device</Text>

        {/* DEVICE ID SECTION */}
        <Text variant='titleLarge' style={styles.inputLabel}>ID number: </Text>
        {/* DEVICE ID */}
        <Text variant='labelMedium' style={{alignSelf: 'center'}}>{keybox?.docId ? keybox.docId : "Here should be id..."}</Text>


        {/* DEVICE NAME SECTION */}
        <Text  variant='titleLarge' style={styles.inputLabel}>Insert Device Name: </Text>
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

   
        {/* DEVICE STATUS SECTION */}
        <Text variant='titleLarge' style={styles.inputLabel}>Set Device status: </Text>
        {/* Switch for choosing whether device should be online or offline */}
        <SwitchSelector
          style={styles.switchSelector}
          options={options}
          initial={0}
          textStyle={styles.switchSelectorText}
          selectedTextStyle={styles.switchSelectorSelectedText}
          buttonColor={themes.colors.secondaryDark}
          borderColor={themes.colors.secondaryDark}
          hasPadding
          onPress={value => setIsOnline(value)}
        />


        {/* Container for submit and dismiss buttons */}
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
    top: '50%', //It works only on big devices... 
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
    fontWeight: 'bold',
    textAlign: 'center',
    borderBottomWidth: 1,
    paddingBottom: 10,
    marginBottom: 10,
  },
  
  // INPUTS
  controller: {

  },
  
  inputText: {    
    width: '95%',
    alignSelf: 'center'
  },

  inputLabel: {
    width: '95%',
    alignSelf: 'center',
    marginTop: 10,
    paddingHorizontal: 5,
    fontWeight: 'bold',
  },

  // BUTTONS
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },

  buttonOutlined: {
    borderRadius: 5,
  },

  button: {
    backgroundColor: themes.colors.secondaryDark,
    borderRadius: 5,
  },

 
  // SWITCH SELECTOR
  switchSelector: {
    width: '95%',
    alignSelf: 'center',
    marginVertical: 10,
    marginBottom: 15,
  },

  switchSelectorText: {
    color: '#000'
  },

  switchSelectorSelectedText: {
    color: '#FFF',
    fontWeight: 'bold',
  },

  // VARIOUS
  error: {
    color: 'red',
    fontSize: 10,
  },
});

export default EditKeyboxModal;
