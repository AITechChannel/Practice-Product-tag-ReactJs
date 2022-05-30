import classNames from 'classnames/bind';

import styles from './ProductCard.module.scss';
import Button from './Button';

import data from '../data';
import { Container } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper';

import Product from './ProductCard/Product';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

console.log(data);
function ProductCard() {
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
                    <SwiperSlide>
                        <div key={i} className={cx('inner', 'bg-custom')}>
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
