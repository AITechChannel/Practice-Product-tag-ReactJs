import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Practice1.module.scss';

import { AiFillLike, AiOutlineLike } from 'react-icons/ai';

const cx = classNames.bind(styles);
function Practice1() {
    const [like, setLike] = useState(false);
    return (
        <div className={cx('container')}>
            <span>
                {like ? (
                    <AiFillLike onClick={() => setLike(false)} className={cx('like')} />
                ) : (
                    <AiOutlineLike onClick={() => setLike(true)} className={cx('disLike')} />
                )}
            </span>
            <span>Like</span>
        </div>
    );
}

export default Practice1;
