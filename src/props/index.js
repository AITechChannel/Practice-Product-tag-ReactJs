import Practice5 from './practice5/components';
import Practice6 from './practice6/components';
import Practice7 from './practice7/components';

import React from 'react';
import styles from './Props.module.scss';

import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Props() {
    return (
        <div className={cx('wrapper')}>
            <h1 className = {cx('title')}>5. Block UI</h1>
            <Practice5 />
            <h1 className = {cx('title')}>6. Block UI</h1>
            <Practice6 />
            <h1 className = {cx('title')}>7. Block UI</h1>
            <Practice7 />
        </div>
    );
}

export default Props;
