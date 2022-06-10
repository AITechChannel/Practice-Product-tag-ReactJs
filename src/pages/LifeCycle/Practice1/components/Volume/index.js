import React from 'react';
import classNames from 'classnames/bind';
import styles from './Volume.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVolumeHigh, faVolumeMute } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);
function Volume({ muted, onClick }) {
    return (
        <div className={cx('volume-container')}>
            <button onClick={onClick}>
                {!muted ? <FontAwesomeIcon icon={faVolumeHigh} /> : <FontAwesomeIcon icon={faVolumeMute} />}
            </button>
        </div>
    );
}

export default Volume;
