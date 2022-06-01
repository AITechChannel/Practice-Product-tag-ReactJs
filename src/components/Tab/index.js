import classNames from 'classnames/bind';
import React, { useState } from 'react';
import Button from '~/components/Button';

import styles from './Tab.module.scss';

const cx = classNames.bind(styles);

function Tab() {
    const tabs = [];
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
                            <>
                                <Button
                                    uppercase
                                    xl
                                    hoverGrey
                                    activeGreen={tabShowIndex == i + 1 ? 'activeGreen' : ''}
                                    onClick={() => hanldeActiveTab(tab, i)}
                                >
                                    {tab.title}
                                </Button>
                            </>
                        );
                    })}
                </div>
                {tabs.map((tab, i) => {
                    return <>{tabShowIndex == i + 1 && <p>{tab.content}</p>}</>;
                })}
            </div>
        </div>
    );
}

export default Tab;
