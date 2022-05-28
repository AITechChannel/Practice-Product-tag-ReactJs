import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';

import styles from './Infor.module.scss';

const cx = classNames.bind(styles);

function Infor() {
    return (
        <>
            {/* {inforLists.map((e, i) => (
                <div key={i} className={cx('item')}>
                    <div className={cx('title')}>
                        <span>
                            <FontAwesomeIcon icon={e.icon} />
                        </span>
                        <span>{e.title}</span>
                    </div>
                    <span className={cx('content')}>{e.content}</span>
                </div>
            ))} */}
        </>
    );
}

export default Infor;
