import React from 'react';
import classNames from 'classnames/bind';
import styles from './Avatar.module.scss';

const cx = classNames.bind(styles);

function Avatar({ imgSrc, full_name, job }) {
    return (
        <div className={cx('avatar')}>
            <div className={cx('img')}>
                <img src={imgSrc} alt="" />
            </div>
            <h3 className={cx('name')}>{full_name}</h3>
            <p className={cx('job')}>{job}</p>
        </div>
    );
}

export default Avatar;
