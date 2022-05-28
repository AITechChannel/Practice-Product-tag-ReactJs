import Avatar from '~/practice5/components/Avatar';
import Infor from '~/practice5/components/Infor';

import classNames from 'classnames/bind';

import styles from './Practice5.module.scss';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper.min.css';
import data from '../data';

const cx = classNames.bind(styles);

console.log(data);

function Practice5() {
    return (
        <div className={cx('wrapper')}>
            {data.map((e, i) => (
                <div className={cx('container')}>
                    <Avatar imgSrc={e.avatarSrc} full_name={e.full_name} job={e.job} />
                </div>
            ))}
        </div>
    );
}

export default Practice5;
