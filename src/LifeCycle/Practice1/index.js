import classNames from 'classnames/bind';
import React, { useRef, useState } from 'react';
import ReactPlayer from 'react-player';
import CustomMediaPlayer from './components/CustomMediaPlayer';
import playlistData from './components/data';
import Media from './components/Media';
import MediaControl from './components/MediaControl';
import styles from './Practice1.module.scss';

const cx = classNames.bind(styles);

function Pracice1() {
    const defaultUrl =
        'https://mp3-s1-zmp3.zmdcdn.me/88be6f81d7c03e9e67d1/6553320916969453382?authen=exp=1654444233~acl=/88be6f81d7c03e9e67d1/*~hmac=a95bcbbdca4c3c042a9eb90832048a32&fs=MTY1NDI3MTQzMzmUsICwOXx3ZWJWNnwwfDEdUngNTIdUngNTgdUngOTI';

    const [play, setPlay] = useState(false);
    const [urlAudio, setUrlAudio] = useState(defaultUrl);
    const [playIndex, setPlayIndex] = useState('');
    console.log(playIndex);

    const [duration, setDuration] = useState('');
    const [durationSeconds, setDurationSeconds] = useState('');

    const [played, setPlayed] = useState('0:00');
    const reactPlayerRef = useRef();

    const [volume, setVolume] = useState(0.2);

    const [muted, setMuted] = useState(false);

    const hanldePlay = (e, i) => {
        setPlay(true);
        setUrlAudio(playlistData[i].url);
        setPlayIndex(i);
    };

    const hanldePause = (e, i) => {
        setPlay(false);
        // setUrlAudio(e.url);
        // setPlayIndex(i);
    };

    const handleDuration = (duration) => {
        const minutes = Math.floor(duration / 60);
        const seconds = Math.floor(duration % 60);
        const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
        setDuration(`${minutes}:${returnedSeconds}`);
        setDurationSeconds(duration);
    };

    const handleProgress = (infoPlayed) => {
        setPlayed(infoPlayed);
    };

    const handleVolume = (e) => {
        setVolume(e.target.value / 100);
    };

    const handleMuted = () => {
        setMuted(!muted);
    };

    const handleNext = () => {
        setUrlAudio(playlistData[playIndex + 1].url);
        setPlayIndex(playIndex + 1);
    };
    const handlePrev = () => {
        if (playIndex > 0) {
            setUrlAudio(playlistData[playIndex - 1].url);
            setPlayIndex(playIndex - 1);
        }
    };
    return (
        <div className={cx('container')}>
            <div className={cx('music-list')}>
                {playlistData.map((e, i) => (
                    <Media
                        number={e.number}
                        img={e.img}
                        song={e.song}
                        singer={e.singer}
                        ablum={e.ablum}
                        time={e.time}
                        onPlay={() => hanldePlay(e, i)}
                        onPause={() => hanldePause(e, i)}
                        playIndex={playIndex}
                        index={i}
                        playStatus={play}
                    />
                ))}
            </div>
            <div className={cx('music-control')}>
                <MediaControl rotateCD={play}>
                    <ReactPlayer
                        ref={reactPlayerRef}
                        className={cx('react-player')}
                        url={urlAudio}
                        config={{
                            file: {
                                forAudio: true,
                                forceVideo: false,
                            },
                        }}
                        height={50}
                        width="100%"
                        controls={true}
                        playing={play}
                        onPlay={() => setPlay(true)}
                        onPause={() => setPlay(false)}
                        onDuration={(duration) => handleDuration(duration)}
                        onProgress={(infoPlayed) => handleProgress(infoPlayed)}
                        onSeek={(e) => console.log('seek', e)}
                        volume={volume}
                        muted={muted}
                    />

                    <CustomMediaPlayer
                        ReactPlayer={reactPlayerRef.current}
                        onPlayPause={() => setPlay(!play)}
                        playStatus={play}
                        duration={duration}
                        played={played}
                        durationSeconds={durationSeconds}
                        volume={volume}
                        onVolume={(e) => handleVolume(e)}
                        muted={muted}
                        onMuted={() => handleMuted()}
                        onNext={() => handleNext()}
                        onPrev={() => handlePrev()}
                    />
                </MediaControl>
            </div>
        </div>
    );
}

export default Pracice1;
