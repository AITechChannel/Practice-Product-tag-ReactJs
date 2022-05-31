import 'bootstrap/dist/css/bootstrap.min.css';
import classNames from 'classnames/bind';
import { Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Swiper, SwiperSlide } from 'swiper/react';
import data from '../data';
import styles from './ProductCard.module.scss';
import Product from './ProductCard/Product';

import { Navigation } from 'swiper';
import 'swiper/css/navigation';

const cx = classNames.bind(styles);

console.log(data);
function ProductCard() {
    return (
        <div className={cx('container')}>
            <Swiper
                modules={[Autoplay, Navigation]}
                autoplay={{ delay: 2000 }}
                loop={true}
                // navigation={true}
                spaceBetween={10}
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                    },
                    992: {
                        slidesPerView: 3,
                        navigation: true,
                    },
                    1200: {
                        slidesPerView: 4,
                        navigation: true,
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

export default ProductCard;
