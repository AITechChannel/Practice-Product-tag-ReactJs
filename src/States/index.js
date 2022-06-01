import React from 'react';
import Practice1 from './Practice1';
import Practice2 from './Practice2';
import Practice3 from './Practice3';
import Practice4 from './Practice4';
import Practice5 from './Practice5';
import Practice6 from './Practice6';
import Tab from '~/components/Tab';
import classNames from 'classnames/bind';
import styles from './States.module.scss';
const cx = classNames.bind(styles);
function States() {
    return (
        <div className={cx('wrapper')}>
            <h1>1. Practice1</h1>
            <Practice1 />
            <h1>2. Practice2</h1>
            <Practice2 />
            <h1>3. Practice3</h1>
            <Practice3 />
            <h1>4. Practice4</h1>
            <Practice4 />
            <h1>5. Practice5</h1>
            <Practice5 />
            <h1>6. Practice6</h1>
            <Practice6 />
        </div>
    );
}

export default States;
