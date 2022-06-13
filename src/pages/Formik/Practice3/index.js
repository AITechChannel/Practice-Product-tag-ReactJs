import React from 'react';
import { Button, Input, TextField } from '@mui/material';
// import 'antd/dist/antd.css';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook, FaApple } from 'react-icons/fa';
import styles from './Practice3.module.scss';
import classNames from 'classnames/bind';
import * as yup from 'yup';
import { useFormik } from 'formik';
import Thumbnail from './Thumbnail';

const cx = classNames.bind(styles);
function Practice3() {
    return (
        <div className={cx('form1-container')}>
            <Thumbnail />
        </div>
    );
}

export default Practice3;
