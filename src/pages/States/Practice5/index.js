import classNames from 'classnames/bind';
import React, { useState } from 'react';
import Button from '~/components/Button';
import tabs from './data';
import styles from './Practice5.module.scss';
import { AiOutlineHistory } from 'react-icons/ai';

const cx = classNames.bind(styles);

function Practice5() {
    const [tabShowIndex, setTabShowIndex] = useState(1);

    const hanldeActiveTab = (tab, i) => {
        setTabShowIndex(i + 1);
    };

    return (
        <div className={cx('container')}>
            <div className={cx('inner')}>
                <div className={cx('nav')}>
                    {tabs.map((tab, i) => {
                        return (
                            <Button
                                key={i}
                                icon={tab.titleIcon}
                                width={200}
                                xxl
                                hoverGreyCl
                                activeGreenCl={tabShowIndex == i + 1 ? 'activeGreenCl' : ''}
                                onClick={() => hanldeActiveTab(tab, i)}
                            ></Button>
                        );
                    })}
                </div>
                <div className={cx('content')}>
                    {tabs.map((tab, i) => {
                        return <div key={i}>{tabShowIndex == i + 1 && <p>{tab.content}</p>}</div>;
                    })}
                </div>
            </div>
        </div>
    );
}

export default Practice5;
