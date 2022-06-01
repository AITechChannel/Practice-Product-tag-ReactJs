import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({
    children,
    onClick,
    to,
    href,
    primary,
    leftIcon,
    rightIcon,
    icon,
    sm,
    md,
    xl,
    xxl,
    hoverGrey,
    hoverGreyCl,
    activeGreenBg,
    activeGreenCl,
    custom,
    uppercase,
    width,
    mgBottom,
}) {
    let Cmp = 'button';
    const props = { onClick };
    if (to) {
        Cmp = Link;
        props.to = to;
    }
    if (href) {
        Cmp = 'a';
        props.href = href;
    }

    const className = cx('btn', {
        primary,
        sm,
        md,
        xl,
        xxl,
        hoverGrey,
        hoverGreyCl,
        activeGreenBg,
        activeGreenCl,
        custom,
        uppercase,
    });
    return (
        <Cmp {...props} className={className} style={{ width: `${width}px`, marginBottom: `${mgBottom}px` }}>
            {leftIcon && <span className={cx('icon-left')}>{leftIcon}</span>}
            {icon && <span className={cx('icon')}>{icon}</span>}
            {!icon && <span>{children}</span>}
            {rightIcon && <span className={cx('icon-right')}>{rightIcon}</span>}
        </Cmp>
    );
}

export default Button;
