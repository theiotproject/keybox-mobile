import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Modal, Text, Button, TextInput } from 'react-native-paper';
import themes from '../../utils/themes';
import { yupResolver } from '@hookform/resolvers/yup';
import { changePasswordValidationSchema } from '../../utils/yupShema';
import { Controller, useForm } from 'react-hook-form';


const ChangePasswordModal = ({ visible, handleChangePassword, handleDismiss }) => {
  // Variable for handling modal visibility
  const [modalVisible, setModalVisible] = useState(visible);

  // Validation of inputs vie Yup Resolver  
  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(changePasswordValidationSchema),
      defaultValues: {
        currentPassword: '',
        newPassword: '',
        confirmNewPassword: '',
    },
  });

  // When submit button clicked
  const onSubmit = (data) => {  
    
    // Change user password (send data to function that changes password, if current password is correct)
    handleChangePassword(data.currentPassword, data.newEmail);
  };

  // Update the local state when the `visible` prop changes
  useEffect(() => {
    setModalVisible(visible);
  }, [visible]);


  return (
    <Modal visible={modalVisible} onDismiss={() => handleDismiss()} contentContainerStyle={styles.container}>

        <Text style={styles.title}>Change Password</Text>

        <Text style={styles.inputLabel}>Insert your Current Password: </Text>
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


        <Text style={styles.inputLabel}>Insert New Password: </Text>
        {/* New Password */}
        <Controller
          style={styles.controller}
          control={control}
          render={({ field }) => (
            <>
              <TextInput
                  label='New Password'
                  mode='outlined'
                  onChangeText={field.onChange}
                  onBlur={field.onBlur}
                  value={field.value}
                  placeholder="New Password"
                  secureTextEntry
                  style={styles.inputText}
                  error={errors.newPassword ? errors.newPassword.message : null}
              />
              {errors.newPassword && (
                <Text style={styles.error}>{errors.newPassword.message}</Text>
              )}
            </>
          )}
          name="newPassword"
          rules={{ required: true }}
          defaultValue=""
        />

        <Text style={styles.inputLabel}>Confirm New Password: </Text>
        {/* New Password */}
        <Controller
          style={styles.controller}
          control={control}
          render={({ field }) => (
            <>
              <TextInput
                  label='Confirm new Password'
                  mode='outlined'
                  onChangeText={field.onChange}
                  onBlur={field.onBlur}
                  value={field.value}
                  placeholder="Confirm new Password"
                  secureTextEntry
                  style={styles.inputText}
                  error={errors.confirmNewPassword ? errors.confirmNewPassword.message : null}
              />
              {errors.confirmNewPassword && (
                <Text style={styles.error}>{errors.confirmNewPassword.message}</Text>
              )}
            </>
          )}
          name="confirmNewPassword"
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
    marginTop: 20,
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

export default ChangePasswordModal;
