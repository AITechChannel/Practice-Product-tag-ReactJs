import classNames from 'classnames/bind';
import React from 'react';
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
