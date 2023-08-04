import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Modal, Text, Button, TextInput } from 'react-native-paper';
import themes from '../../utils/themes';
import { yupResolver } from '@hookform/resolvers/yup';
import { changeEmailValidationSchema } from '../../utils/yupShema';
import { Controller, useForm } from 'react-hook-form';


const ChangeEmailModal = ({ visible, handleChangeEmail, handleDismiss }) => {
  // Variable for handling modal visibility
  const [modalVisible, setModalVisible] = useState(visible);

  // Validation of inputs vie Yup Resolver  
  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(changeEmailValidationSchema),
      defaultValues: {
        newEmail: '',
        currentPassword: '',
    },
  });

  // When submit button clicked
  const onSubmit = (data) => {  
    
    // Change user email (send data to function that changes email, if current password is correct)
    handleChangeEmail(data.newEmail, data.currentPassword);
  };

  // Update the local state when the `visible` prop changes
  useEffect(() => {
    setModalVisible(visible);
  }, [visible]);


  return (
    <Modal visible={modalVisible} onDismiss={() => handleDismiss()} contentContainerStyle={styles.container}>

        <Text style={styles.title}>Change Email</Text>

        <Text style={styles.inputLabel}>Insert new Email: </Text>
        {/* New Email */}
        <Controller
          style={styles.controller}
          control={control}
          render={({ field }) => (
            <>
              <TextInput
                  label='New Email'
                  mode='outlined'
                  onChangeText={field.onChange}
                  onBlur={field.onBlur}
                  value={field.value}
                  placeholder="New Email"
                  style={styles.inputText}
                  error={errors.newEmail ? errors.newEmail.message : null}
              />
              {errors.newEmail && (
                <Text style={styles.error}>{errors.newEmail.message}</Text>
              )}
            </>
          )}
          name="newEmail"
          rules={{ required: true }}
          defaultValue=""
        />

        <Text style={styles.inputLabel}>Insert your current password: </Text>
        {/* CURRENT PASSWORD */}
        <Controller
          style={styles.controller}
          control={control}
          render={({ field }) => (
            <>
              <TextInput
                  label='Current Password'
                  mode='outlined'
                  onChangeText={field.onChange}
                  onBlur={field.onBlur}
                  value={field.value}
                  placeholder="Current Password"
                  style={styles.inputText}
                  error={errors.currentPassword ? errors.currentPassword.message : null}
              />
              {errors.currentPassword && (
                  <Text style={styles.error}>{errors.currentPassword.message}</Text>
              )}
            </>
          )}
          name="currentPassword"
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
    zIndex: 9999,
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

export default ChangeEmailModal;
