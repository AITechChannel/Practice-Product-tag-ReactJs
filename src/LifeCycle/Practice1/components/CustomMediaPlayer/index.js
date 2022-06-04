import React, { useRef, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './CustomMediaPlayer.module.scss';
import {
    faPlay,
    faPause,
    faVolumeHigh,
    faVolumeXmark,
    faVolumeDown,
    faBackwardStep,
    faForwardStep,
    faCircle,
    faCirclePlay,
    faCirclePause,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const cx = classNames.bind(styles);

function CustomMediaPlayer({
    onPlayPause,
    playStatus,
    duration,
    played,
    ReactPlayer,
    durationSeconds,
    volume,
    onVolume,
    muted,
    onMuted,
    onNext,
    onPrev,
}) {
    const handleOnClickSeek = (e) => {
        const percentSeek = e.target.value / 100;
        ReactPlayer.seekTo(percentSeek * durationSeconds);
    };

    const VolumeRef = useRef();

    // xu ly percent seek
    const minutes = Math.floor(played.playedSeconds / 60);
    const seconds = Math.floor(played.playedSeconds % 60);
    const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    const playedFormat = `${minutes}:${returnedSeconds}`;

    const loadedSeek = Math.floor((played.playedSeconds / durationSeconds) * 100);

    return (
        <div>
            <div className={cx('player-container')}>
                <div className={cx('main')}>
                    <button className={cx('prev')} onClick={onPrev}>
                        <FontAwesomeIcon icon={faBackwardStep} />
                    </button>
                    <button className={cx('play')} onClick={onPlayPause}>
                        {playStatus == !true ? (
                            <FontAwesomeIcon icon={faCirclePlay} />
                        ) : (
                            <FontAwesomeIcon icon={faCirclePause} />
                        )}
                    </button>
                    <button className={cx('next')} onClick={onNext}>
                        <FontAwesomeIcon icon={faForwardStep} />
                    </button>
                </div>

                <div className={cx('more')}>
                    <div className={cx('time')}>
                        <span className={cx('played')}>{playedFormat}</span>
                        <input type="range" max="100" onChange={(e) => handleOnClickSeek(e)} value={loadedSeek} />
                        <span className={cx('duration')}>{duration}</span>
                    </div>
                    <div className={cx('volume')}>
                        <button className={cx('mute')} onClick={onMuted}>
                            {muted ? <FontAwesomeIcon icon={faVolumeXmark} /> : <FontAwesomeIcon icon={faVolumeHigh} />}
                        </button>
                        <input type="range" max="100" ref={VolumeRef} value={volume * 100} onChange={onVolume} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CustomMediaPlayer;
