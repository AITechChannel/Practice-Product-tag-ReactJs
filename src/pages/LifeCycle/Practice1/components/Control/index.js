import {
    faBackward,
    faBackwardStep,
    faCirclePause,
    faCirclePlay,
    faForward,
    faForwardStep,
    faRepeat,
    faShuffle,
    faVolumeHigh,
    faVolumeXmark,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import React, { useEffect, useState } from 'react';
import styles from './Control.module.scss';
const cx = classNames.bind(styles);

function Control({ onClick, loop, shuffle, className, playing }) {
    const [count, setCount] = useState(0);

    const handleOnClick = (actionName, count) => {
        if (actionName === 'loop') {
            if (count < 4) {
                setCount(count + 1);
            } else {
                setCount(0);
            }
        }
        onClick(actionName, count);
    };
    return (
        <div className={[cx('player-container'), `${className}`].join(' ')}>
            <button className={cx('shuffle', `${shuffle ? 'active' : ''}`)} onClick={() => handleOnClick('shuffle')}>
                <FontAwesomeIcon icon={faShuffle} />
            </button>

            <button className={cx('prev')} onClick={() => handleOnClick('prev')}>
                <FontAwesomeIcon icon={faBackward} />
            </button>

            {!playing && (
                <button className={cx('play')} onClick={() => handleOnClick('play')}>
                    <FontAwesomeIcon icon={faCirclePlay} />
                </button>
            )}

            {playing && (
                <button className={cx('pause')} onClick={() => handleOnClick('pause')}>
                    <FontAwesomeIcon icon={faCirclePause} />
                </button>
            )}

            <button className={cx('next')} onClick={() => handleOnClick('next')}>
                <FontAwesomeIcon icon={faForward} />
            </button>

            <button className={cx('loop', `${count > 0 ? 'active' : ''}`)} onClick={() => handleOnClick('loop', count)}>
                <FontAwesomeIcon icon={faRepeat} />
                {count > 0 && <span className={cx('count')}>{count}</span>}
            </button>
        </div>
    );
}

export default Control;
