import React from 'react';
import {
    Button,
    Checkbox,
    FormControl,
    FormHelperText,
    Input,
    InputLabel,
    OutlinedInput,
    TextField,
} from '@mui/material';
// import 'antd/dist/antd.css';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook, FaApple } from 'react-icons/fa';
import styles from './Practice2.module.scss';
import classNames from 'classnames/bind';
import * as yup from 'yup';
import { useFormik } from 'formik';

const cx = classNames.bind(styles);

function Practice2() {
    const validationSchema = yup.object({
        firstName: yup.string('Enter your first name').required('First name is required'),
        lastName: yup.string('Enter your last name').required('Last name is required'),
        phone: yup
            .string('Enter your phone number')
            .required('Phone number is required')
            .min(10, 'Phone number must 10 number length')
            .max(10, 'Phone number must 10 number length'),
        email: yup.string('Enter your email').email('Enter a valid email').required('Email is required'),
        password: yup
            .string('Enter your password')
            .min(8, 'Password should be of minimum 8 characters length')
            .required('Password is required'),

        confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match'),
        term: yup.bool().oneOf([true], 'Accept Terms & Conditions is required'),
    });
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            phone: '',
            email: '',
            password: '',
            confirmPassword: '',
            term: 'false',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        },
    });
    return (
        <div className={cx('form-container')}>
            <form onSubmit={formik.handleSubmit}>
                <div className={cx('input-container-top')}>
                    <TextField
                        className={cx('input-item', 'password')}
                        variant="outlined"
                        fullWidth
                        id="firstName"
                        name="firstName"
                        label="First Name"
                        notched={false}
                        value={formik.values.firstName}
                        onChange={formik.handleChange}
                        error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                        helperText={formik.touched.firstName && formik.errors.firstName}
                    />

                    <TextField
                        className={cx('input-item', 'password')}
                        variant="outlined"
                        fullWidth
                        id="lastName"
                        name="lastName"
                        label="Last Name"
                        notched={false}
                        value={formik.values.lastName}
                        onChange={formik.handleChange}
                        error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                        helperText={formik.touched.lastName && formik.errors.lastName}
                    />

                    <TextField
                        className={cx('input-item', 'password')}
                        variant="outlined"
                        fullWidth
                        name="email"
                        label="Email"
                        notched={false}
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        error={formik.touched.email && Boolean(formik.errors.email)}
                        helperText={formik.touched.email && formik.errors.email}
                    />

                    <TextField
                        className={cx('input-item', 'password')}
                        variant="outlined"
                        fullWidth
                        name="phone"
                        label="Phone number"
                        notched={false}
                        value={formik.values.phone}
                        onChange={formik.handleChange}
                        error={formik.touched.phone && Boolean(formik.errors.phone)}
                        helperText={formik.touched.phone && formik.errors.phone}
                    />

                    <TextField
                        className={cx('input-item', 'password')}
                        variant="outlined"
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        notched={false}
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        error={formik.touched.password && Boolean(formik.errors.password)}
                        helperText={formik.touched.password && formik.errors.password}
                    />
                    <TextField
                        className={cx('input-item', 'password')}
                        variant="outlined"
                        fullWidth
                        name="confirmPassword"
                        label="Confirm Password"
                        type="Password"
                        notched={false}
                        value={formik.values.confirmPassword}
                        onChange={formik.handleChange}
                        error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
                        helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
                    />
                </div>
                <div className={cx('input-container-bottom')}>
                    <FormControl onChange={formik.handleChange}>
                        <Checkbox name="term" size="large" />

                        <FormHelperText error={formik.touched.term && formik.errors.term}>
                            test check box
                        </FormHelperText>
                    </FormControl>
                    <div>
                        <Checkbox size="large" />
                        <span>Yes, I want to recicve Lottery display emails</span>
                    </div>
                    <div>
                        {console.log(Boolean(formik.errors.term))}
                        <Checkbox
                            size="large"
                            className={cx(`${formik.touched.term && formik.errors.term ? 'active' : null}`)}
                        />
                        <span>
                            I agree to all <span style={{ color: 'blue' }}>Term, Privacy Policy </span> and
                            <span style={{ color: 'blue' }}> Fees</span>
                        </span>
                    </div>
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        className={cx('btn-primary', 'submit')}
                        size="large"
                    >
                        Submit
                    </Button>
                </div>
            </form>
        </div>
    );
}

export default Practice2;
