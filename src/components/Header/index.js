import React from 'react';
import styles from './Header.module.scss';

import { useState } from 'react';
import classNames from 'classnames/bind';
import { VscMenu, VscChromeClose } from 'react-icons/vsc';
import Modal from '../Modal';
import { Link, useLocation } from 'react-router-dom';
import { sessions } from '~/App';
import Avatar from '~/assets/images/avatar.jpg';
const cx = classNames.bind(styles);

function Header() {
    const { pathname } = useLocation();
    const active = sessions.findIndex((e) => e.path === pathname);

    const [showMenu, setShowMenu] = useState(false);
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('logo')}>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" />

                    <h1>React JS</h1>
                </div>
                <ul className={cx('navbar')}>
                    {sessions.map((item, i) => (
                        <li key={i} className={cx(`${i == active ? 'active' : ''}`)}>
                            <Link to={item.path}>{item.tabName}</Link>
                        </li>
                    ))}
                </ul>
                <div className={cx('auth')}>
                    <a href="https://www.facebook.com/tuananhdoan.195">
                        <img src={Avatar} />
                        <div>
                            <p>Tuananh</p>
                            <p>Doan</p>
                        </div>
                    </a>
                </div>
                <span className={cx('menu-open')} onClick={() => setShowMenu(true)}>
                    <VscMenu />
                </span>
                {showMenu && (
                    <Modal>
                        <div className={cx('sub-menu')}>
                            <ul className={cx('navbar', 'show')}>
                                {sessions.map((item, i) => (
                                    <li
                                        key={i}
                                        className={cx(`${i == active ? 'active' : ''}`)}
                                        onClick={() => {
                                            setShowMenu(false);
                                        }}
                                    >
                                        <Link to={item.path}>{item.tabName}</Link>
                                        {console.log(item)}
                                    </li>
                                ))}
                            </ul>
                            <span className={cx('menu-close')} onClick={() => setShowMenu(false)}>
                                <VscChromeClose />
                            </span>
                        </div>
                    </Modal>
                )}
            </div>
        </div>
    );
}

export default Header;
