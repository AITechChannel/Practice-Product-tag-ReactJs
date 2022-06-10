import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { memo, useEffect, useState } from 'react';
import styles from './AudioTag.module.scss';
const cx = classNames.bind(styles);

function AudioTag({ number, img, song, singer, ablum, time, index, playing, onClick, playingIndex }) {
    const [status, setStatus] = useState('pause');
    const [isPlayingIndex, setIsPlayingIndex] = useState(0);

    useEffect(() => {
        if (playing) {
            setStatus('play');
        } else {
            setStatus('pause');
        }
    }, [playing]);

    useEffect(() => {
        if (playingIndex === index && status === 'play') {
            setIsPlayingIndex(true);
        } else {
            setIsPlayingIndex(false);
        }
    }, [index, playingIndex, status]);

    const handleOnClick = (acitonName) => {
        setStatus(acitonName);
        onClick(acitonName);
    };

    return (
        <div className={cx('container')}>
            <div className={cx('left')}>
                <span className={cx('number')}>{number}</span>
                <div className={cx('photo')}>
                    <div className={cx('action')}>
                        <img src={img}></img>
                        <div className={cx('overlay-icon')}>
                            {!isPlayingIndex && (
                                <span className={cx('icon-play')} onClick={() => handleOnClick('play')}>
                                    <FontAwesomeIcon icon={faPlay} />
                                </span>
                            )}

                            {isPlayingIndex && (
                                <span className={cx('icon-play')} onClick={() => handleOnClick('pause')}>
                                    <i className={cx('icon-play')}></i>
                                </span>
                            )}
                        </div>
                    </div>
                </div>
                <div className={cx('content')}>
                    <h3>{song}</h3>
                    <span>
                        <a href="">{singer}</a>
                    </span>
                </div>
            </div>
            <div className={cx('mid')}>
                <span className={cx('ablum')}>
                    <a href="">{ablum}</a>
                </span>
            </div>
            <div className={cx('right')}>
                <span className={cx('duration')}>{time}</span>
            </div>
        </div>
    );
}

export default memo(AudioTag);
