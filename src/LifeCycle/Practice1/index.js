import React from 'react';
import Media from './components/Media';
import MediaControl from './components/MediaControl';

import classNames from 'classnames/bind';
import styles from './Practice1.module.scss';
const cx = classNames.bind(styles);
function Pracice1() {
    return (
        <div className={cx('container')}>
            {/* <audio
                src="https://vnso-zn-10-tf-mp3-s1-zmp3.zmdcdn.me/b7fe9bd00091e9cfb080/4100962724146792337?authen=exp=1654390714~acl=/b7fe9bd00091e9cfb080/*~hmac=0a2e197adfc915da6181c8a9ec23e181&fs=MTY1NDIxNzkxNDY1OXx3ZWJWNnwwfDE4MC4yMzIdUngOS4xMzI"
                controls="false"
            >
                sdfsdfsdf
            </audio> */}
            <div className={cx('music-list')}>
                <Media />
                <Media />
                <Media />
                <Media />
            </div>
            <div className={cx('music-control')}>
                <MediaControl />
                <audio
                    src="https://vnso-zn-10-tf-mp3-s1-zmp3.zmdcdn.me/b7fe9bd00091e9cfb080/4100962724146792337?authen=exp=1654390714~acl=/b7fe9bd00091e9cfb080/*~hmac=0a2e197adfc915da6181c8a9ec23e181&fs=MTY1NDIxNzkxNDY1OXx3ZWJWNnwwfDE4MC4yMzIdUngOS4xMzI"
                    controls="false"
                >
                    sdfsdfsdf
                </audio>
            </div>
        </div>
    );
}

export default Pracice1;
