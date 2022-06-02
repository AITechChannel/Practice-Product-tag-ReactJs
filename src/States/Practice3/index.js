import classNames from 'classnames/bind';
import React, { Fragment, useEffect, useRef, useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { FcNext, FcPrevious } from 'react-icons/fc';
import Modal from '~/components/Modal';
import styles from './Practice3.module.scss';

const cx = classNames.bind(styles);
function Practice3() {
    const [photoIndex, setPhotoIndex] = useState(0);
    const [showPhoto, setShowPhoto] = useState(false);

    const [photoList, setPhotoList] = useState([]);

    useEffect(() => {
        const apiPhotos =
            'https://api.themoviedb.org/3/movie/popular?api_key=718ca6dfce46881e7e3f67da8daa3e77&language=en-US&page=10';
        const getphotos = async () => {
            try {
                const res = await fetch(apiPhotos);
                const data = await res.json();
                setPhotoList(data.results);
            } catch (error) {
                console.log('Error');
            }
        };
        getphotos();
    }, []);

    const hanldePrev = () => {
        if (photoIndex > 0) {
            setPhotoIndex(photoIndex - 1);
        }
    };
    const hanldeNext = () => {
        if (photoIndex < 19) {
            setPhotoIndex(photoIndex + 1);
        }
    };

    const modalRef = useRef();

    return (
        <div ref={modalRef} className={cx('container')}>
            <div className={cx('photo')}>
                <div className={cx('photo-list')}>
                    {photoList.map((e, i) => {
                        return (
                            <Fragment key={i}>
                                <img
                                    src={`http://image.tmdb.org/t/p/original/${e.backdrop_path}`}
                                    onClick={() => {
                                        setPhotoIndex(i);
                                        setShowPhoto(true);
                                    }}
                                />
                            </Fragment>
                        );
                    })}
                </div>
            </div>

            <Modal show={showPhoto ? 'show' : ''}>
                <div className={cx('inner')}>
                    <div className={cx('photo')}>
                        <span className={cx('control-prev', `${photoIndex == 0 ? 'limit-left' : ''}`)}>
                            <FcPrevious onClick={hanldePrev} />
                        </span>

                        {photoList.map((e, i) => {
                            return (
                                <div className={cx('image', `${photoIndex == i ? 'active' : ''}`)}>
                                    <img
                                        src={`http://image.tmdb.org/t/p/original/${photoList[photoIndex].backdrop_path}`}
                                        className={cx(``)}
                                    />
                                    <span className={cx('control-close')}>
                                        <AiOutlineClose onClick={() => setShowPhoto(false)} />
                                    </span>
                                </div>
                            );
                        })}
                        <span className={cx('control-next', `${photoIndex == 19 ? 'limit-right' : ''}`)}>
                            <FcNext onClick={hanldeNext} />
                        </span>
                    </div>
                    <div className={cx('thumbnail')}>
                        {photoList.map((e, i) => {
                            return (
                                <Fragment key={i}>
                                    <img
                                        src={`http://image.tmdb.org/t/p/original/${e.backdrop_path}`}
                                        onClick={() => setPhotoIndex(i)}
                                    />
                                </Fragment>
                            );
                        })}
                    </div>
                </div>
            </Modal>
        </div>
    );
}

export default Practice3;
