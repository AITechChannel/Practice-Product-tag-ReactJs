import Avatar from '~/practice5/components/ProfileCard/Avatar';
import Infor from '~/practice5/components/ProfileCard/Infor';
import Contact from '~/practice5/components/ProfileCard/Contact';

import classNames from 'classnames/bind';

import styles from './ProfileCard.module.scss';

import data from '../data';
import { Container } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper';

const cx = classNames.bind(styles);

console.log(data);

function Practice5() {
    return (
        <div className={cx('container')}>
            <Swiper
                modules={[Autoplay]}
                autoplay={{ delay: 2000 }}
                loop={true}
                spaceBetween={10}
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                    },
                    992: {
                        slidesPerView: 3,
                    },
                    1200: {
                        slidesPerView: 4,
                    },
                }}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                {data.map((e, i) => (
                    <SwiperSlide key={i}>
                        <div className={cx('inner', 'bg-custom')}>
                            <Avatar imgSrc={e.avatarSrc} full_name={e.full_name} job={e.job} />

                            <Infor icon={e.icon_dob} title={'dob'} content={e.dob} />
                            <Infor icon={e.icon_gb} title={'bg'} content={e.bg} />
                            <Infor icon={e.icon_edu} title={'edu'} content={e.edu} />
                            <Infor icon={e.icon_res} title={'bg'} content={e.res} />

                            <Contact title={'email'} content={e.email} bg={cx(`${e.e_bg}`, 'mg-top')} />
                            <Contact title={'phone'} content={e.phone} bg={cx(`${e.p_bg}`)} />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default Practice5;
