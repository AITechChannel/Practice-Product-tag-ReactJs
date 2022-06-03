import React from 'react';
import classNames from 'classnames/bind';
import styles from './MediaControl.module.scss';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ReactPlayer from 'react-player';
const cx = classNames.bind(styles);
function MediaControl({ children, rotateCD }) {
    return (
        <div className={cx('container')}>
            <div className={cx('cd', `${rotateCD == true ? 'rotateCD' : ''}`)}>
                <img src="https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/b/f/d/4/bfd49cf4cb9e6fc7180c67522f22aefb.jpg"></img>
                <div className={cx('circle')}>
                    <div className={cx('center')}></div>
                </div>
            </div>
            {children}
        </div>
    );
}

export default MediaControl;
