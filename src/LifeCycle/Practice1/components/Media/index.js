import React from 'react';
import classNames from 'classnames/bind';
import styles from './Media.module.scss';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const cx = classNames.bind(styles);
function Media() {
    return (
        <div className={cx('container')}>
            <div className={cx('left')}>
                <span className={cx('number')}>1</span>
                <div className={cx('photo')}>
                    <div className={cx('action')}>
                        <img src="https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/b/f/d/4/bfd49cf4cb9e6fc7180c67522f22aefb.jpg"></img>
                        <div className={cx('overlay-icon')}>
                            <span className={cx('icon-play')}>
                                <FontAwesomeIcon icon={faPlay} />
                            </span>
                        </div>
                    </div>
                </div>
                <div className={cx('content')}>
                    <h3>Ten bai hat</h3>
                    <span>
                        <a href="">Ten ca sy</a>
                    </span>
                </div>
            </div>
            <div className={cx('mid')}>
                <span className={cx('ablum')}>
                    <a href="">ablum info</a>
                </span>
            </div>
            <div className={cx('right')}>
                <span className={cx('duration')}>04:40</span>
            </div>
        </div>
    );
}

export default Media;
