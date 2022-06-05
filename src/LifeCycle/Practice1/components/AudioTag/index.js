import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { memo } from 'react';
import styles from './AudioTag.module.scss';
const cx = classNames.bind(styles);

function AudioTag({ number, img, song, singer, ablum, time, onPlay, onPause, playIndex, index, playStatus }) {
    return (
        <div className={cx('container')}>
            {console.log('render audio tag')}
            <div className={cx('left')}>
                <span className={cx('number')}>{number}</span>
                <div className={cx('photo')}>
                    <div className={cx('action')}>
                        <img src={img}></img>
                        <div className={cx('overlay-icon')}>
                            <>
                                {playIndex !== index && playStatus == false ? (
                                    <span className={cx('icon-play')} onClick={onPlay}>
                                        <FontAwesomeIcon icon={faPlay} />
                                    </span>
                                ) : (
                                    <>
                                        {playIndex == index && playStatus == true ? (
                                            <span className={cx('icon-play')} onClick={onPause}>
                                                <i className={cx('icon-play')}></i>
                                            </span>
                                        ) : (
                                            <span className={cx('icon-play')} onClick={onPlay}>
                                                <FontAwesomeIcon icon={faPlay} />
                                            </span>
                                        )}
                                    </>
                                )}
                            </>
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
