import * as yup from "yup";

const baseSchema = {
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  mobileNumber: yup.string().required("Mobile number is required"),
};

//Register Validation
  const registerValidationSchema = yup.object().shape({
    ...baseSchema,
    password: yup.string().required("Password is required"),
    userName: yup.string().required("User name is required"),
    confirmPassword: yup.string()
      .oneOf([yup.ref('password'), null], 'Passwords must match')
      .required('Confirm Password is required'),
});

//Login Validation
const loginValidationSchema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup.string().required("Password is required"),
});

//Contact Validation
const contactValidationSchema = yup.object().shape({
  ...baseSchema,
  message: yup.string().required("Message is required"),
});

//Account Validation
const accountValidationSchema = yup.object().shape({
  ...baseSchema,
    password: yup.string().required("Password is required"),
    userName: yup.string().required("User name is required"),
});



export  {registerValidationSchema, loginValidationSchema,contactValidationSchema,accountValidationSchema}
