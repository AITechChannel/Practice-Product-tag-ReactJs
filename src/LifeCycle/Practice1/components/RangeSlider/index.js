import React from 'react';
import classNames from 'classnames/bind';
import styles from './RangeSlider.module.scss';
import { Slider } from '@mui/material';
const cx = classNames.bind(styles);
function RangeSlider({ played = '0:00', duration = '0:00', value, max, onChange, className }) {
    const handleOnChange = (e) => {
        onChange(e);
    };
    return (
        <div className={[cx('range-slider-container'), `${className}`].join(' ')}>
            {played ? <span className={cx('played')}>{played}</span> : null}
            <Slider min={0} max={max} value={value} onChange={(e) => handleOnChange(e)} />
            {duration ? <span className={cx('duration')}>{duration}</span> : null}
        </div>
    );
}

export default RangeSlider;
