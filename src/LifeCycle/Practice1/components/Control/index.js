import {
    faBackwardStep,
    faCirclePause,
    faCirclePlay,
    faForwardStep,
    faRepeat,
    faShuffle,
    faVolumeHigh,
    faVolumeXmark,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import React, { useState } from 'react';
import styles from './Control.module.scss';
const cx = classNames.bind(styles);

function Control({ onClick, loop, shuffle }) {
    const [status, setStatus] = useState('pause');
    const handleOnClick = (actionName) => {
        onClick(actionName);
        if (actionName === 'play' || actionName == 'pause') {
            setStatus(actionName);
        }
    };

    return (
        <div className={cx('player-container')}>
            <button className={cx('shuffle', `${shuffle ? 'active' : ''}`)} onClick={() => handleOnClick('shuffle')}>
                <FontAwesomeIcon icon={faShuffle} />
            </button>

            <button className={cx('prev')} onClick={() => handleOnClick('prev')}>
                <FontAwesomeIcon icon={faBackwardStep} />
            </button>

            {status === 'pause' && (
                <button className={cx('play')} onClick={() => handleOnClick('play')}>
                    <FontAwesomeIcon icon={faCirclePlay} />
                </button>
            )}

            {status === 'play' && (
                <button className={cx('pause')} onClick={() => handleOnClick('pause')}>
                    <FontAwesomeIcon icon={faCirclePause} />
                </button>
            )}

            <button className={cx('next')} onClick={() => handleOnClick('next')}>
                <FontAwesomeIcon icon={faForwardStep} />
            </button>

            <button className={cx('loop', `${loop ? 'active' : ''}`)} onClick={() => handleOnClick('loop')}>
                <FontAwesomeIcon icon={faRepeat} />
            </button>
        </div>
    );
}

export default Control;
