import classNames from 'classnames/bind';
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({ children, to, href, primary, leftIcon }) {
    let Cmp = 'button';
    const props = {};
    if (to) {
        Cmp = Link;
        props.to = to;
    }
    if (href) {
        Cmp = 'a';
        props.href = href;
    }

    const className = cx('btn', { primary });
    return (
        <Cmp {...props} className={className}>
            {leftIcon && <span className={cx('icon-left')}>{leftIcon}</span>}
            <span>{children}</span>
        </Cmp>
    );
}

export default Button;
