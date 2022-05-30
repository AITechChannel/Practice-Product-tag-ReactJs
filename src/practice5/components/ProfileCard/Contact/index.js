import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import data from '~/practice5/data';

import styles from './Contact.module.scss';

const cx = classNames.bind(styles);

function Contact({ title, content, bg }) {
    return (
        <>
            <div className={cx('container', `${bg}`)}>
                <p className={cx('title')}>{title}</p>
                <p className={cx('content')}>{content}</p>
            </div>
        </>
    );
}

export default Contact;
