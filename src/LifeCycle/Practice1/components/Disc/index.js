import classNames from 'classnames/bind';
import React from 'react';
import styles from './Disc.module.scss';
const cx = classNames.bind(styles);
function Disc({ rotation, imgUrl, className }) {
    return (
        <div className={[cx('disc-container'), `${className}`].join(' ')}>
            <div className={cx('disc', `${rotation ? 'rotation' : ''}`)} style={{ backgroundImage: `url(${imgUrl})` }}>
                <div className={cx('circle')}></div>
            </div>
        </div>
    );
}

export default Disc;
