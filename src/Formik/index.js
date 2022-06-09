import classNames from 'classnames/bind';
import React, { Fragment } from 'react';
import Practice1 from './Practice1';
// import Practice2 from './Practice2';
// import Practice3 from './Practice3';
// import Practice4 from './Practice4';
// import Practice5 from './Practice5';
// import Practice6 from './Practice6';
import styles from './Formik.module.scss';
const cx = classNames.bind(styles);
const practices = [
    { title: '1. Practice1', component: <Practice1 /> },
    // { title: '1. Practice1', component: <Practice1 /> },
    // { title: '1. Practice1', component: <Practice1 /> },
    // { title: '2. Practice2', component: <Practice2 /> },
    // { title: '3. Practice3', component: <Practice3 /> },
    // { title: '4. Practice4', component: <Practice4 /> },
    // { title: '5. Practice5', component: <Practice5 /> },
    // { title: '6. Practice6', component: <Practice6 /> },
];
function Formik() {
    console.log('render-formik');
    return (
        <div className={cx('wrapper')}>
            {practices.map((e, i) => {
                return (
                    <Fragment key={`formik-${i}`}>
                        <h1 className={cx('title')}>{e.title}</h1>
                        {e.component}
                    </Fragment>
                );
            })}
        </div>
    );
}

export default Formik;
