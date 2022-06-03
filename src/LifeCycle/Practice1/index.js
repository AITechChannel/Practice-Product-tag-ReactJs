import React, { useState } from 'react';
import Media from './components/Media';
import MediaControl from './components/MediaControl';

import classNames from 'classnames/bind';
import styles from './Practice1.module.scss';
import ReactPlayer from 'react-player';

const cx = classNames.bind(styles);

const playlistData = [
    {
        number: 1,
        img: 'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/b/f/d/4/bfd49cf4cb9e6fc7180c67522f22aefb.jpg',
        song: 'Thương em',
        url: 'https://mp3-s1-zmp3.zmdcdn.me/88be6f81d7c03e9e67d1/6553320916969453382?authen=exp=1654444233~acl=/88be6f81d7c03e9e67d1/*~hmac=a95bcbbdca4c3c042a9eb90832048a32&fs=MTY1NDI3MTQzMzmUsICwOXx3ZWJWNnwwfDEdUngNTIdUngNTgdUngOTI',
        singer: 'Châu Khải Phong',
        ablum: 'Thương em(single)',
        time: '5:00',
    },
    {
        number: 1,
        img: 'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/b/f/d/4/bfd49cf4cb9e6fc7180c67522f22aefb.jpg',
        song: 'Thương em',
        url: 'https://vnso-zn-10-tf-mp3-s1-zmp3.zmdcdn.me/b7fe9bd00091e9cfb080/4100962724146792337?authen=exp=1654390714~acl=/b7fe9bd00091e9cfb080/*~hmac=0a2e197adfc915da6181c8a9ec23e181&fs=MTY1NDIxNzkxNDY1OXx3ZWJWNnwwfDE4MC4yMzIdUngOS4xMzI',
        singer: 'Châu Khải Phong',
        ablum: 'Thương em(single)',
        time: '5:00',
    },
    {
        number: 1,
        img: 'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/b/f/d/4/bfd49cf4cb9e6fc7180c67522f22aefb.jpg',
        song: 'Thương em',
        url: 'https://vnso-zn-10-tf-mp3-s1-zmp3.zmdcdn.me/b7fe9bd00091e9cfb080/4100962724146792337?authen=exp=1654390714~acl=/b7fe9bd00091e9cfb080/*~hmac=0a2e197adfc915da6181c8a9ec23e181&fs=MTY1NDIxNzkxNDY1OXx3ZWJWNnwwfDE4MC4yMzIdUngOS4xMzI',
        singer: 'Châu Khải Phong',
        ablum: 'Thương em(single)',
        time: '5:00',
    },
    {
        number: 1,
        img: 'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/b/f/d/4/bfd49cf4cb9e6fc7180c67522f22aefb.jpg',
        song: 'Thương em',
        url: 'https://vnso-zn-10-tf-mp3-s1-zmp3.zmdcdn.me/b7fe9bd00091e9cfb080/4100962724146792337?authen=exp=1654390714~acl=/b7fe9bd00091e9cfb080/*~hmac=0a2e197adfc915da6181c8a9ec23e181&fs=MTY1NDIxNzkxNDY1OXx3ZWJWNnwwfDE4MC4yMzIdUngOS4xMzI',
        singer: 'Châu Khải Phong',
        ablum: 'Thương em(single)',
        time: '5:00',
    },
    {
        number: 1,
        img: 'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/b/f/d/4/bfd49cf4cb9e6fc7180c67522f22aefb.jpg',
        song: 'Thương em',
        url: 'https://vnso-zn-10-tf-mp3-s1-zmp3.zmdcdn.me/b7fe9bd00091e9cfb080/4100962724146792337?authen=exp=1654390714~acl=/b7fe9bd00091e9cfb080/*~hmac=0a2e197adfc915da6181c8a9ec23e181&fs=MTY1NDIxNzkxNDY1OXx3ZWJWNnwwfDE4MC4yMzIdUngOS4xMzI',
        singer: 'Châu Khải Phong',
        ablum: 'Thương em(single)',
        time: '5:00',
    },
    {
        number: 1,
        img: 'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/b/f/d/4/bfd49cf4cb9e6fc7180c67522f22aefb.jpg',
        song: 'Thương em',
        url: 'https://vnso-zn-10-tf-mp3-s1-zmp3.zmdcdn.me/b7fe9bd00091e9cfb080/4100962724146792337?authen=exp=1654390714~acl=/b7fe9bd00091e9cfb080/*~hmac=0a2e197adfc915da6181c8a9ec23e181&fs=MTY1NDIxNzkxNDY1OXx3ZWJWNnwwfDE4MC4yMzIdUngOS4xMzI',
        singer: 'Châu Khải Phong',
        ablum: 'Thương em(single)',
        time: '5:00',
    },
];
function Pracice1() {
    const [play, setPlay] = useState(false);
    const [urlAudio, setUrlAudio] = useState('');
    const [playIndex, setPlayIndex] = useState('');
    console.log(play);
    console.log(urlAudio);
    const hanldePlay = (e, i) => {
        setPlay(true);
        setUrlAudio(e.url);
        setPlayIndex(i);
    };
    const hanldePause = (e, i) => {
        setPlay(false);
        setUrlAudio(e.url);
        setPlayIndex(i);
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
                    />
                </MediaControl>
            </div>
        </div>
    );
}

export default Pracice1;
