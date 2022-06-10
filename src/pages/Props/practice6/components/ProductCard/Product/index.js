import classNames from 'classnames/bind';
import styles from './Product.module.scss';

const cx = classNames.bind(styles);

function Product({ imgSrc, title, des }) {
    return (
        <div className={cx('container')}>
            <div className={cx('img')}>
                <img src={imgSrc} alt="" />
            </div>
            <h5 className={cx('title')}>{title}</h5>
            <p className={cx('des')}>{des}</p>
        </div>
    );
}

export default Product;
