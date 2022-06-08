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
    const defaultUrlAudio = 'https://tainhac123.com/listen/thuong-em-chau-khai-phong-ft-acv.zMcUoKLMFctX.html';

    const defaultUrlImage =
        'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/1/9/d/8/19d8b42b0aa5a00084d29c06a62556c7.jpg';
    const reactPlayerRef = useRef();

    const [playing, setPlaying] = useState(false);

    const [loop, setLoop] = useState(false);

    return (
        <div className={cx('player-container')}>
            {/* <div className={cx('list')}>
                {playlistData.map((e, i) => (
                    <AudioTag
                        number={e.number}
                        img={e.img}
                        song={e.song}
                        singer={e.singer}
                        ablum={e.ablum}
                        time={e.time}
                        index={i}
                    />
                ))}
            </div> */}
            <div className={cx('tab-control')}>
                <Disc />
                <Control
                    loop={loop}
                    onClick={(actionName) => {
                        console.log(actionName);

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
                                setLoop(!loop);
                        }
                    }}
                />
                <RangeSlider loaded={true} duration={true} />

                <ReactPlayer
                    ref={reactPlayerRef}
                    className={cx('react-player')}
                    url={defaultUrlAudio}
                    // config={{
                    //     file: {
                    //         forAudio: true,
                    //         forceVideo: false,
                    //     },
                    // }}
                    // height={50}
                    // width="100%"
                    // controls={true}
                    playing={playing}
                    // onPlay={() => setPlay(true)}
                    // onPause={() => setPlay(false)}
                    // onDuration={(duration) => handleDuration(duration)}
                    // onProgress={(infoPlayed) => handleProgress(infoPlayed)}
                    // onSeek={(e) => console.log('seek', e)}
                    // volume={volume}
                    // muted={muted}
                    loop={loop}
                    // onEnded={handleEnded}
                />
            </div>
        </div>
    );
}

export default Pracice1;
