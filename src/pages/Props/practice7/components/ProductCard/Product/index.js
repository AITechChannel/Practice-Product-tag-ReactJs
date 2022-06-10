import classNames from 'classnames/bind';
import styles from './Product.module.scss';

import { useRef, useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Product({ imgSrc, shop_name, price_now, price_origin, sale_off, product_des, star, sold, store }) {
    const [rating, setRating] = useState(0);

    const soldPercent = (sold / store) * 100;
    console.log(soldPercent);

    useEffect(() => {
        setRating(star);
        console.log(rating);
    }, []);

    return (
        <div className={cx('container')}>
            <div className={cx('img')}>
                <img src={imgSrc} alt="" />
            </div>
            <h6 className={cx('title')}>{shop_name}</h6>
            <div className={cx('price')}>
                <span className={cx('price-now')}>{price_now}</span>
                <span className={cx('price-origin')}>{price_origin}</span>
                <span className={cx('sale-off')}>{sale_off} off</span>
            </div>
            <div className={cx('product-des')}>{product_des}</div>
            <div className={cx('rating')}>
                {[...Array(5)].map((e, i) => {
                    const ratingValue = i + 1;
                    return (
                        <span key={i}>
                            <FontAwesomeIcon icon={faStar} color={ratingValue <= rating ? '#ffc107' : '#E3E4E5'} />
                        </span>
                    );
                })}
            </div>

            <div className={cx('slidebar-ctn')}>
                <div className={cx('slidebar-child')} style={{ width: `${soldPercent}%` }}></div>
            </div>
            <div>
                <span>Sold:</span>
                <span>{sold}</span>
            </div>
        </div>
    );
}

export default Product;
