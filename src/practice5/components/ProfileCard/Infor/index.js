import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import React from 'react';
import styles from './Infor.module.scss';

const cx = classNames.bind(styles);

function Infor({ icon, title, content }) {
    return (
        <>
            <div className={cx('container')}>
                <div className={cx('title')}>
                    <span>
                        <FontAwesomeIcon icon={icon} />
                    </span>
                    <p>{title}</p>
                </div>
                <p className={cx('content')}>{content}</p>
            </div>
        </>
    );
}

export default Infor;
