import React from 'react';
import { Button, Input, TextField } from '@mui/material';
// import 'antd/dist/antd.css';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook, FaApple } from 'react-icons/fa';
import styles from './Practice1.module.scss';
import classNames from 'classnames/bind';
import * as yup from 'yup';
import { useFormik } from 'formik';

const cx = classNames.bind(styles);
function Practice1() {
    const validationSchema = yup.object({
        email: yup.string('Enter your email').email('Enter a valid email').required('Email is required'),
        password: yup
            .string('Enter your password')
            .min(8, 'Password should be of minimum 8 characters length')
            .required('Password is required'),
    });
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        },
    });
    return (
        <div className={cx('form1-container')}>
            <form onSubmit={formik.handleSubmit}>
                <TextField
                    className={cx('input-container')}
                    variant="filled"
                    // focused
                    fullWidth
                    id="email"
                    name="email"
                    label="Email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                />
                <TextField
                    className={cx('input-container', 'password')}
                    variant="filled"
                    fullWidth
                    id="password"
                    name="password"
                    label="Password"
                    type="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    error={formik.touched.password && Boolean(formik.errors.password)}
                    helperText={formik.touched.password && formik.errors.password}
                />
                <Button
                    fullWidth={true}
                    type="submit"
                    variant="contained"
                    color="primary"
                    className={cx('btn-primary', 'submit')}
                    size="large"
                >
                    Continue
                </Button>
                <Button
                    variant="contained"
                    startIcon={<FcGoogle />}
                    color="info"
                    className={cx('btn-secondary')}
                    size="large"
                    fullWidth={true}
                >
                    Đăng nhập với Google
                </Button>
                <Button
                    variant="contained"
                    startIcon={<FaFacebook />}
                    color="info"
                    className={cx('btn-secondary')}
                    size="large"
                    fullWidth={true}
                >
                    Đăng nhập với Facebook
                </Button>
                <Button
                    variant="contained"
                    startIcon={<FaApple />}
                    color="info"
                    className={cx('btn-secondary')}
                    size="large"
                    fullWidth={true}
                >
                    Đăng nhập với Apple
                </Button>
            </form>
        </div>
    );
}

export default Practice1;
