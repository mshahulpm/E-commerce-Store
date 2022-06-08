import * as yup from 'yup';

export const authSchema = yup.object().shape({
    email: yup.string().email('Enter valid Email').required('Email is required'),
    password: yup.string().required('Password is required').length(6, 'Password must be at least 6 characters long'),
});
