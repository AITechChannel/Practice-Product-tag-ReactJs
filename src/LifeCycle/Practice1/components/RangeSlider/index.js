import React from 'react';
import classNames from 'classnames/bind';
import styles from './RangeSlider.module.scss';
import { Slider } from '@mui/material';
const cx = classNames.bind(styles);
function RangeSlider({ loaded, duration }) {
    return (
        <div className={cx('range-slider-container')}>
            {loaded ? <span className={cx('loaded')}>0:00</span> : null}
            <Slider className={cx('slider')} />
            {duration ? <span className={cx('duration')}>0:00</span> : null}
        </div>
    );
}

export default RangeSlider;
