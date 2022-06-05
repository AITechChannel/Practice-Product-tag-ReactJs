import classNames from 'classnames/bind';
import React from 'react';
import styles from './MediaControl.module.scss';
const cx = classNames.bind(styles);
function MediaControl({ children, rotateCD, image }) {
    return (
        <div className={cx('container')}>
            <div className={cx('cd', `${rotateCD == true ? 'rotateCD' : ''}`)}>
                <img src={image} />
                <div className={cx('circle')}>
                    <div className={cx('center')}></div>
                </div>
            </div>
            {children}
        </div>
    );
}

export default MediaControl;
