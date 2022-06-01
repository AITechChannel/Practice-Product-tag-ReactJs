import 'bootstrap/dist/css/bootstrap.min.css';
import classNames from 'classnames/bind';
import { Autoplay, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Swiper, SwiperSlide } from 'swiper/react';
import Avatar from '~/Props/practice5/components/ProfileCard/Avatar';
import Contact from '~/Props/practice5/components/ProfileCard/Contact';
import Infor from '~/Props/practice5/components/ProfileCard/Infor';
import data from '../data';
import styles from './ProfileCard.module.scss';

const cx = classNames.bind(styles);

function Practice5() {
    return (
        <div className={cx('container')}>
            <Swiper
                modules={[Autoplay, Navigation]}
                autoplay={{ delay: 2000 }}
                loop={true}
                navigation={false}
                spaceBetween={10}
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                    },
                    576: {
                        slidesPerView: 2,
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
