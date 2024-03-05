import * as yup from "yup";

const baseSchema = {
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  // mobileNumber: yup.string().required("Mobile number is required"),
};

//Register Validation
const registerValidationSchema = yup.object().shape({
  ...baseSchema,
  password: yup
    .string()
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
      "Password must contain at least one letter, one digit, and be at least 8 characters long"
    )
    .required("Password is required"),
  userName: yup
    .string()
    .min(4, "Name must be at least 4 characters")
    .max(20, "Name cannot be longer than 20 characters")
    .required("User name is required"),
  // confirmPassword: yup.string()
  //   .oneOf([yup.ref('password'), null], 'Passwords must match')
  //   .required('Confirm Password is required'),
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
  firstName:  yup.string().required("User firstName is required"),
  lastName: yup.string().required("User lastname is required"),
  email:  yup.string().required("User email is required"),
  userName: yup.string().required("User name is required"),
});

//Review Validation
const reviewValidationSchema = yup.object().shape({
  // name: yup.string().required("Name is required"),
  // email: yup.string().email("Invalid email").required("Email is required"),
  review: yup.string().required("Review is required"),
});

//change password validation
const changePasswordValidation = yup.object().shape({
  currentPassword: yup
    .string()
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
      "Password must contain at least one letter, one digit, and be at least 8 characters long"
    )
    .required("Current password is required"),
  newPassword: yup
    .string()
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
      "Password must contain at least one letter, one digit, and be at least 8 characters long"
    )
    .required("New password is required")
    .notOneOf(
      [yup.ref("currentPassword")],
      "New password must be different from the current password"
    ),
});

export {
  registerValidationSchema,
  loginValidationSchema,
  contactValidationSchema,
  accountValidationSchema,
  reviewValidationSchema,
  changePasswordValidation
};
