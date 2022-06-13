import * as yup from 'yup';

const validationSchema = yup.object().shape({
    firstName: yup.string('Enter your first name').required('First name is required'),
    lastName: yup.string('Enter your last name').required('Last name is required'),
    phone: yup
        .string('Enter your phone number')
        .required('Phone number is required')
        .matches(
            /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
            'Phone number is not valid',
        )
        .min(10, 'Phone number must 10 number length')
        .max(10, 'Phone number must 10 number length'),

    email: yup.string('Enter your email').email('Enter a valid email').required('Email is required'),
    password: yup
        .string('Enter your password')
        .min(8, 'Password should be of minimum 8 characters length')
        .required('Password is required'),

    reciveEmail: yup.boolean(),
    confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match'),
    checkBoxGroup: yup.string('sdfsdf'),
    term: yup.boolean().oneOf([true], 'You must accept the terms and conditions'),

    gender: yup.string('Choose gender').required('Choose gender'),
    tags: yup.array().min(1, 'messageHere'),
});

export default validationSchema;
