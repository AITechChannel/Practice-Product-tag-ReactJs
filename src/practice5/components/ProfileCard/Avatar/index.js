import React, { useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './Avatar.module.scss';

import { useRef, useState } from 'react';

const cx = classNames.bind(styles);

function Avatar({ imgSrc, full_name, job }) {
    const imgRef = useRef();
    const [imgHeight, setImgHeight] = useState();
    useEffect(() => {
        setImgHeight(imgRef.current.offsetWidth);

        const handleResize = () => {
            setImgHeight(imgRef.current.offsetWidth);
        };
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className={cx('container')}>
            <div className={cx('img')} ref={imgRef}>
                <img src={imgSrc} alt="" style={{ height: `${imgHeight}px` }} />
            </div>
            <h5 className={cx('name')}>{full_name}</h5>
            <p className={cx('job')}>{job}</p>
        </div>
    );
}

export default Avatar;
