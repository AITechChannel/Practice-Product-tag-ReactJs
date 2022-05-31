import React from 'react';
import styles from './Header.module.scss';

import classNames from 'classnames/bind';

import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);

function Header() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <img
                    className={cx('logo')}
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
                ></img>
                <div className={cx('title')}>
                    <h1>React JS</h1>
                    <p>Tuananh Doan</p>
                </div>
                <div className={cx('navbar')}>
                    <Link to="/Practice-Product-tag-ReactJs">Session1</Link>
                    <Link to="/session2">Session2</Link>
                </div>
            </div>
        </div>
    );
}

export default Header;
