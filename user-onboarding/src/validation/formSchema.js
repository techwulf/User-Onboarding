import * as yup from 'yup';

const formSchema = yup.object().shape({
  username: yup
    .string()
    .trim()
    .required('Username is required')
    .min(3, 'Username must be 3 characters long'),
  email: yup
    .string()
    .trim()
    .email('Must be a valid email address')
    .required('Email is required'),
  password: yup
    .string()
    .trim()
    .required('User needs a password')
    .min(15, 'Password must be 15 characters long'),
  tos: yup.boolean()
})

export default formSchema;