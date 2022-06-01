import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Practice2.module.scss';

import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

const cx = classNames.bind(styles);
function Practice2() {
    const [rating, setRating] = useState(2);
    console.log(rating);
    return (
        <div className={cx('container')}>
            {[...Array(5)].map((e, i) => {
                return (
                    <span onClick={() => setRating(i + 1)}>{rating < i + 1 ? <AiOutlineStar /> : <AiFillStar />}</span>
                );
            })}

            <span>Rating</span>
        </div>
    );
}

export default Practice2;
