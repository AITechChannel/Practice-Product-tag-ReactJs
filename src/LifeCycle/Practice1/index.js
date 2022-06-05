import classNames from 'classnames/bind';
import React, { useCallback, useRef, useState } from 'react';
import ReactPlayer from 'react-player';
import AudioTag from './components/AudioTag';
import CustomMediaPlayer from './components/CustomMediaPlayer';
import playlistData from './components/data';
import MediaControl from './components/MediaControl';
import styles from './Practice1.module.scss';

const cx = classNames.bind(styles);

function Pracice1() {
    const defaultUrlAudio = 'https://tainhac123.com/listen/thuong-em-chau-khai-phong-ft-acv.zMcUoKLMFctX.html';

    const defaultUrlImage =
        'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/1/9/d/8/19d8b42b0aa5a00084d29c06a62556c7.jpg';
    const reactPlayerRef = useRef();

    const [urlImage, setUrlImage] = useState(defaultUrlImage);
    const [play, setPlay] = useState(false);
    const [urlAudio, setUrlAudio] = useState(defaultUrlAudio);
    const [playIndex, setPlayIndex] = useState('');

    const [duration, setDuration] = useState('');
    const [durationSeconds, setDurationSeconds] = useState('');

    const [played, setPlayed] = useState('');
    const [volume, setVolume] = useState(0.2);

    const [muted, setMuted] = useState(false);

    const [loop, setLoop] = useState(false);

    const handlePlay = useCallback((e, i) => {
        setPlay(true);
        setUrlAudio(playlistData[i].url);
        setUrlImage(playlistData[i].img);
        setPlayIndex(i);
    }, []);

    const handlePause = useCallback((e, i) => {
        setPlay(false);
    }, []);

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
        if (playIndex < 5) {
            setUrlAudio(playlistData[playIndex + 1].url);
            setUrlImage(playlistData[playIndex + 1].img);
            setPlayIndex(playIndex + 1);
        }
    };
    const handlePrev = () => {
        if (playIndex > 0) {
            setUrlAudio(playlistData[playIndex - 1].url);
            setUrlImage(playlistData[playIndex - 1].img);
            setPlayIndex(playIndex - 1);
        }
    };
    return (
        <div className={cx('container')}>
            <div className={cx('music-list')}>
                {playlistData.map((e, i) => (
                    <AudioTag
                        number={e.number}
                        img={e.img}
                        song={e.song}
                        singer={e.singer}
                        ablum={e.ablum}
                        time={e.time}
                        onPlay={() => handlePlay(e, i)}
                        onPause={() => handlePause(e, i)}
                        playIndex={playIndex}
                        index={i}
                        playStatus={play}
                    />
                ))}
            </div>
            <div className={cx('music-control')}>
                <MediaControl rotateCD={play} image={urlImage}>
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
                        loop={loop}
                    />
                    {console.log(played)}
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
                        onLoop={() => setLoop(!loop)}
                        loop={loop}
                    />
                </MediaControl>
            </div>
        </div>
    );
}

export default Pracice1;
