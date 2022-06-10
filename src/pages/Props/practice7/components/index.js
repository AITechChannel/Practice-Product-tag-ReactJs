import 'bootstrap/dist/css/bootstrap.min.css';
import classNames from 'classnames/bind';
import { Autoplay, Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import data from '../data';
import styles from './ProductCard.module.scss';
import Product from './ProductCard/Product';

const cx = classNames.bind(styles);

function Practice7() {
    return (
        <div className={cx('container')}>
            <Swiper
                modules={[Autoplay, Navigation, Pagination]}
                pagination={{
                    clickable: true,
                }}
                autoplay={{ delay: 2000 }}
                loop={true}
                navigation={true}
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
                            <Product
                                imgSrc={e.imgSrc}
                                shop_name={e.shop_name}
                                price_now={e.price_now}
                                price_origin={e.price_origin}
                                sale_off={e.sale_off}
                                product_des={e.product_des}
                                star={e.star}
                                sold={e.sold}
                                store={e.store}
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default Practice7;
