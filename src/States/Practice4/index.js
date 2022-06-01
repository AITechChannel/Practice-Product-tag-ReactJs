import classNames from 'classnames/bind';
import React, { Fragment, useState } from 'react';
import Button from '~/components/Button';
import tabs from './data';
import styles from './Practice4.module.scss';

const cx = classNames.bind(styles);

function Practice4() {
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
                            <Fragment key={i}>
                                <Button
                                    width={200}
                                    uppercase
                                    md
                                    hoverGrey
                                    activeGreenBg={tabShowIndex == i + 1 ? 'activeGreenBg' : ''}
                                    onClick={() => hanldeActiveTab(tab, i)}
                                >
                                    {tab.title}
                                </Button>
                            </Fragment>
                        );
                    })}
                </div>
                <div className={cx('content')}>
                    {tabs.map((tab, i) => {
                        return <Fragment key={i}>{tabShowIndex == i + 1 && <p>{tab.content}</p>}</Fragment>;
                    })}
                </div>
            </div>
        </div>
    );
}

export default Practice4;
