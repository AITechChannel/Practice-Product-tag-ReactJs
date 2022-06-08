import classNames from 'classnames/bind';
import React from 'react';
import styles from './Disc.module.scss';
const cx = classNames.bind(styles);
function Disc({ playing, imgUrl }) {
    return (
        <div className={cx('disc-container')}>
            <div
                className={cx('disc', `${playing == true ? 'rotateCD' : ''}`)}
                style={{ backgroundImage: `url(${imgUrl})` }}
            >
                <div className={cx('circle')}></div>
            </div>
        </div>
    );
}

export default Disc;
