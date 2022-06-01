import React from 'react';
import styles from './Modal.module.scss';

import classNames from 'classnames/bind';

import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);

function Modal({ children }) {
    return <div className={cx('overlay')}>{children}</div>;
}

export default Modal;
