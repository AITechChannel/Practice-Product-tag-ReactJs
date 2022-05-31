import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'bootstrap/dist/css/bootstrap.min.css';
import classNames from 'classnames/bind';
import { Autoplay, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Swiper, SwiperSlide } from 'swiper/react';
import data from '../data';
import Button from './Button';
import styles from './ProductCard.module.scss';
import Product from './ProductCard/Product';

const cx = classNames.bind(styles);

function ProductCard() {
    return (
        <div className={cx('container')}>
            <Swiper
                modules={[Autoplay, Navigation]}
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
                            <Product imgSrc={e.imgSrc} title={e.title} des={e.des} />
                            <h5>XL/XXL/S</h5>
                            <h4>{e.price}</h4>
                            <Button primary leftIcon={<FontAwesomeIcon icon={faCartPlus} />}>
                                Add Cart
                            </Button>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default ProductCard;
