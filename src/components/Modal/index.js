import React, { useRef } from 'react';
import styles from './Modal.module.scss';

import classNames from 'classnames/bind';
import { animated, useTransition } from 'react-spring';
import { easeBounceInOut } from 'd3-ease';

import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);

function Modal({ children, showHeader, onClick, showModal }) {
    const transitionOpacity = useTransition(showModal, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { Opacity: 0 },
        config: { duration: 200, easing: easeBounceInOut },
    });
    return (
        <>
            {transitionOpacity((style, item) =>
                item ? (
                    <animated.div style={style} className={cx('overlay')}>
                        <div onClick={onClick} className={cx('overlay', { showHeader })}>
                            {children}
                        </div>
                    </animated.div>
                ) : (
                    ''
                ),
            )}
        </>
    );
}

export default Modal;
