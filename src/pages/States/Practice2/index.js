import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Practice2.module.scss';

import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

const cx = classNames.bind(styles);
function Practice2() {
    const [rating, setRating] = useState(2);
    const [ratingClick, setRatingClick] = useState(2);
    const handleClickStar = (i) => {
        setRating(i + 1);
        setRatingClick(i + 1);
    };
    const handleMouseOverStar = (i) => {
        setRating(i + 1);
    };
    const handleMouseOutStar = (i) => {
        setRating(ratingClick);
    };
    return (
        <div className={cx('container')}>
            {[...Array(5)].map((e, i) => {
                return (
                    <span
                        key={i}
                        onClick={() => handleClickStar(i)}
                        onMouseOver={() => handleMouseOverStar(i)}
                        onMouseOut={() => handleMouseOutStar(i)}
                    >
                        {rating < i + 1 ? <AiOutlineStar /> : <AiFillStar />}
                    </span>
                );
            })}

            <span>Rating</span>
        </div>
    );
}

export default Practice2;
