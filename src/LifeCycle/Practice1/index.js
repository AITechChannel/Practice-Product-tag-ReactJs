import classNames from 'classnames/bind';
import React, { useCallback, useRef, useState } from 'react';
import ReactPlayer from 'react-player';
import AudioTag from './components/AudioTag';
import Control from './components/Control';
import playlistData from './components/data';
import Disc from './components/Disc';
import styles from './Practice1.module.scss';

import { Slider } from '@mui/material';
import RangeSlider from './components/RangeSlider';
import { faLaptopHouse, faShuffle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Pracice1() {
    const defaultAudioUrl = 'https://tainhac123.com/listen/thuong-em-chau-khai-phong-ft-acv.zMcUoKLMFctX.html';

    const defaultImgUrl =
        'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/1/9/d/8/19d8b42b0aa5a00084d29c06a62556c7.jpg';
    const reactPlayerRef = useRef();

    const [playing, setPlaying] = useState(false);
    const [loop, setLoop] = useState(false);
    const [shuffle, setShuffle] = useState(false);
    const [duration, setDuration] = useState('0:00');
    const [played, setPlayed] = useState('0:00');
    const [SecondsPlayed, setSecondsPlayed] = useState(0);
    const [secondsDuration, setSecondsDuration] = useState(0);

    const [audioUrl, setAudioUrl] = useState(defaultAudioUrl);
    const [imgUrl, setImgUrl] = useState(defaultImgUrl);
    const [playingIndex, setPlayingIndex] = useState(0);
    const [countCurrent, setCountCurrent] = useState(0);

    const handleOnClickControl = (actionName, count) => {
        switch (actionName) {
            case 'play':
                setPlaying(true);
                break;
        }
        switch (actionName) {
            case 'pause':
                setPlaying(false);
                break;
        }
        switch (actionName) {
            case 'loop':
                setCountCurrent(count);
                setLoop(true);
                setShuffle(false);
                if (count > 3) {
                    setLoop(false);
                    setShuffle(false);
                }
                break;
        }
        switch (actionName) {
            case 'shuffle':
                setShuffle(!shuffle);
                setLoop(false);
                break;
        }
        switch (actionName) {
            case 'prev':
                if (playingIndex > 0) {
                    setPlayingIndex(playingIndex - 1);
                    setAudioUrl(playlistData[playingIndex - 1].url);
                    setImgUrl(playlistData[playingIndex - 1].img);
                }
                break;
        }
        switch (actionName) {
            case 'next':
                if (playingIndex < 5) {
                    setPlayingIndex(playingIndex + 1);
                    setAudioUrl(playlistData[playingIndex + 1].url);
                    setImgUrl(playlistData[playingIndex + 1].img);
                }
                break;
        }
    };

    const handleDuration = (duration) => {
        const minutes = Math.floor(duration / 60);
        const seconds = Math.floor(duration % 60);
        const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
        const durationFormat = `${minutes}:${returnedSeconds}`;
        setDuration(durationFormat);
        setSecondsDuration(duration);
        console.log(duration);
    };

    const handleProgress = (infoPlayed) => {
        const minutes = Math.floor(infoPlayed.playedSeconds / 60);
        const seconds = Math.floor(infoPlayed.playedSeconds % 60);
        const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
        const playedFormat = `${minutes}:${returnedSeconds}`;
        setPlayed(playedFormat);
        setSecondsPlayed(infoPlayed.playedSeconds);
    };

    const handleChangeRange = (e) => {
        setSecondsPlayed(e.target.value);

        reactPlayerRef.current.seekTo(e.target.value);
    };

    const handleOnClickAudioTag = (e, i, actionName) => {
        setAudioUrl(playlistData[i].url);
        setImgUrl(playlistData[i].img);
        setPlayingIndex(i);
        setPlaying(true);
        if (playingIndex == i) {
            setPlaying(!playing);
        }
        console.log('click');
    };

    const handleEnded = () => {
        setCountCurrent(countCurrent - 1);
        if ((countCurrent = 0)) {
            setLoop(false);
        }
        if (shuffle) {
            const randomIndex = Math.floor(Math.random()) * 4;
            setPlayingIndex(randomIndex + 1);
            setAudioUrl(playlistData[randomIndex + 1].url);
            setImgUrl(playlistData[randomIndex + 1].img);
        } else if (loop) {
        } else {
            if (playingIndex < 5) {
                setPlayingIndex(playingIndex + 1);
                setAudioUrl(playlistData[playingIndex + 1].url);
                setImgUrl(playlistData[playingIndex + 1].img);
            }
        }
    };
    return (
        <div className={cx('player-container')}>
            <div className={cx('list')}>
                {playlistData.map((e, i) => (
                    <AudioTag
                        number={e.number}
                        img={e.img}
                        song={e.song}
                        singer={e.singer}
                        ablum={e.ablum}
                        time={e.time}
                        index={i}
                        playingIndex={playingIndex}
                        playing={playing}
                        onClick={(actionName) => handleOnClickAudioTag(e, i, actionName)}
                    />
                ))}
            </div>
            <div className={cx('media-control')}>
                <Disc className={cx('disc')} imgUrl={imgUrl} rotation={playing} />
                <Control
                    className={cx('control')}
                    playing={playing}
                    loop={loop}
                    shuffle={shuffle}
                    onClick={(actionName, count) => handleOnClickControl(actionName, count)}
                />
                <RangeSlider
                    className={cx('range-slider')}
                    played={played}
                    duration={duration}
                    min={0}
                    value={Math.floor(SecondsPlayed)}
                    max={Math.floor(secondsDuration)}
                    onChange={(e) => handleChangeRange(e)}
                />

                <ReactPlayer
                    ref={reactPlayerRef}
                    className={cx('react-player')}
                    url={audioUrl}
                    // config={{
                    //     file: {
                    //         forAudio: true,
                    //         forceVideo: false,
                    //     },
                    // }}
                    playing={playing}
                    onDuration={(duration) => handleDuration(duration)}
                    onProgress={(infoPlayed) => handleProgress(infoPlayed)}
                    onSeek={(e) => console.log('seek', e)}
                    // volume={volume}
                    // muted={muted}
                    loop={loop}
                    onEnded={handleEnded}
                />
            </div>
        </div>
    );
}

export default Pracice1;
