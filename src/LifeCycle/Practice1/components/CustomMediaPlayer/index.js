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
import React from 'react';
import styles from './CustomMediaPlayer.module.scss';
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
    loop,
    onLoop,
}) {
    const handleOnClickSeek = (e) => {
        const percentSeek = e.target.value / 100;
        ReactPlayer.seekTo(percentSeek * durationSeconds);
    };

    // xu ly percent seek
    if (played) {
        const minutes = Math.floor(played.playedSeconds / 60);
        const seconds = Math.floor(played.playedSeconds % 60);
        const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
        var playedFormat = `${minutes}:${returnedSeconds}`;

        var loadedSeek = Math.floor((played.playedSeconds / durationSeconds) * 100);
    }

    return (
        <div>
            <div className={cx('player-container')}>
                <div className={cx('main')}>
                    <button className={cx('random')}>
                        <FontAwesomeIcon icon={faShuffle} />
                    </button>
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
                    <button className={cx('repeat', `${loop ? 'active' : ''}`)} onClick={onLoop}>
                        <FontAwesomeIcon icon={faRepeat} />
                    </button>
                </div>

                <div className={cx('more')}>
                    {console.log('render')}
                    <div className={cx('time')}>
                        <span className={cx('played')}>{playedFormat ? playedFormat : '0:00'}</span>
                        <input
                            type="range"
                            max="100"
                            onChange={(e) => handleOnClickSeek(e)}
                            value={loadedSeek ? loadedSeek : 0}
                        />
                        {console.log(loadedSeek)}
                        <span className={cx('duration')}>{duration}</span>
                    </div>
                    <div className={cx('volume')}>
                        <button className={cx('mute')} onClick={onMuted}>
                            {muted ? <FontAwesomeIcon icon={faVolumeXmark} /> : <FontAwesomeIcon icon={faVolumeHigh} />}
                        </button>
                        <input type="range" max="100" value={volume * 100} onChange={onVolume} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CustomMediaPlayer;
