import React, { useRef } from 'react';
import styles from './Modal.module.scss';

import classNames from 'classnames/bind';

import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);

function Modal({ children, onClick }) {
    return (
        <div onClick={onClick} className={cx('overlay')}>
            {children}
        </div>
    );
}

export default Modal;
