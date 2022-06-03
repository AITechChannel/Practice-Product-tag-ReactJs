import React from 'react';
import classNames from 'classnames/bind';
import styles from './MediaControl.module.scss';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const cx = classNames.bind(styles);
function MediaControl() {
    return (
        <div className={cx('container')}>
            <div className={cx('cd')}>
                <img src="https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/b/f/d/4/bfd49cf4cb9e6fc7180c67522f22aefb.jpg"></img>
                <div className={cx('circle')}>
                    <div className={cx('center')}></div>
                </div>
            </div>
        </div>
    );
}

export default MediaControl;
