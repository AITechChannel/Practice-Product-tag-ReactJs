import Modal from '~/components/Modal';
import classNames from 'classnames/bind';
import { easeBounceInOut } from 'd3-ease';
import React, { useState } from 'react';
import { CgMenu } from 'react-icons/cg';
import { MdClose } from 'react-icons/md';
import { Link, useLocation } from 'react-router-dom';
import { animated, useTransition } from 'react-spring';
import { sessions } from '~/App';
import Avatar from '~/assets/images/avatar.jpg';
import styles from './Header.module.scss';
const cx = classNames.bind(styles);

function Header() {
    const { pathname } = useLocation();
    const active = sessions.findIndex((e) => e.path === pathname);

    const [showMenu, setShowMenu] = useState(false);

    const translateYMenu = useTransition(showMenu, {
        from: { translateY: -210 },
        enter: { translateY: 70 },
        leave: { translateY: -210 },
        config: { duration: 200, easing: easeBounceInOut },
    });

    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('header')}>
                    <div className={cx('logo')}>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" />

                        <h1>React JS</h1>
                    </div>
                    <ul className={cx('navbar-pc')}>
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
                    {!showMenu && (
                        <span className={cx('menu-open')} onClick={() => setShowMenu(true)}>
                            <CgMenu />
                        </span>
                    )}
                    {showMenu && (
                        <span className={cx('menu-close')} onClick={() => setShowMenu(false)}>
                            <MdClose />
                        </span>
                    )}
                </div>
                <>
                    {translateYMenu((style, item) =>
                        item ? (
                            // modal default opacity transition
                            <Modal showModal={showMenu}>
                                <animated.ul style={style} className={cx('navbar-mobile')}>
                                    {sessions.map((item, i) => (
                                        <li
                                            key={i}
                                            className={cx(`${i == active ? 'active' : ''}`)}
                                            onClick={() => {
                                                setShowMenu(false);
                                            }}
                                        >
                                            <Link to={item.path}>{item.tabName}</Link>
                                        </li>
                                    ))}
                                </animated.ul>
                            </Modal>
                        ) : (
                            ''
                        ),
                    )}
                </>
            </div>
        </div>
    );
}

export default Header;
