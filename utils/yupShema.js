import * as yup from 'yup';

// Validation schema for Signing Up
export const signUpValidationSchema = yup.object().shape({
  username: yup.string().required('Username is required'),
  email: yup.string().email('Enter a valid email').required('Email is required'),
  password: yup
    .string()
    .min(8, 'Password must be at least 8 characters')
    .max(32, "Password cannot exceed more than 32 characters")
    .required('Password is required'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must match')
    .required('Password confirmation is required'),
  agreeTerms: yup
    .bool()
    .oneOf([true], "You have to accept our Terms of Use to Sign Up")
    .required("You have to accept our Terms of Use to Sign Up")
});

// Validation schema for adding a new device
export const addDeviceValidationSchema = yup.object().shape({
  deviceId: yup
    .string()
    .min(3, "Id must have at least 3 symbols")
    .required('Id is required'),
  deviceName: yup
    .string()
    .min(3, "Name must have at least 3 symbols")
    .required('Name is required')
})

// Validation schema for editing a device
export const editDeviceValidationSchema = yup.object().shape({
  deviceName: yup
    .string()
    .min(3, "Name must have at least 3 symbols")
    .required('Name is required'),
})

