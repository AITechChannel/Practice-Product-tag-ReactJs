import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Fragment, useEffect, useRef, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Practice3.module.scss';

import { AiFillStar, AiOutlineStar, AiOutlineClose } from 'react-icons/ai';
import { FcPrevious, FcNext } from 'react-icons/fc';

import Modal from '~/components/Modal';

const cx = classNames.bind(styles);
function Practice3() {
    const [photoIndex, setPhotoIndex] = useState(5);
    const [showPhoto, setShowPhoto] = useState(false);

    const hanldePrev = () => {
        if (photoIndex > 5) {
            setPhotoIndex(photoIndex - 1);
        }
    };
    const hanldeNext = () => {
        if (photoIndex < 8) {
            setPhotoIndex(photoIndex + 1);
        }
    };

    const modalRef = useRef();

    console.log(modalRef);

    const ar = [5, 6, 7, 8];
    return (
        <div ref={modalRef} className={cx('container')}>
            <div className={cx('photo')}>
                <div className={cx('photo-list')}>
                    {ar.map((e, i) => {
                        return (
                            <Fragment key={i}>
                                <img
                                    src={`http://foundry.mediumra.re/img/cover${e}.jpg`}
                                    onClick={() => {
                                        setPhotoIndex(e);
                                        setShowPhoto(true);
                                    }}
                                />
                            </Fragment>
                        );
                    })}
                </div>
            </div>

            {showPhoto && (
                <Modal>
                    <div className={cx('inner')}>
                        <div className={cx('photo')}>
                            <span className={cx('control-prev', `${photoIndex == 5 ? 'limit-left' : ''}`)}>
                                <FcPrevious onClick={hanldePrev} />
                            </span>
                            {ar.map((e, i) => {
                                return (
                                    <div key={i} className={cx('image', `${photoIndex == e ? 'active' : ''}`)}>
                                        <img src={`http://foundry.mediumra.re/img/cover${e}.jpg`} className={cx(``)} />
                                        <span className={cx('control-close')}>
                                            <AiOutlineClose onClick={() => setShowPhoto(false)} />
                                        </span>
                                    </div>
                                );
                            })}
                            <span className={cx('control-next', `${photoIndex == 8 ? 'limit-right' : ''}`)}>
                                <FcNext onClick={hanldeNext} />
                            </span>
                        </div>
                        <div className={cx('thumbnail')}>
                            {ar.map((e, i) => {
                                return (
                                    <Fragment key={i}>
                                        <img
                                            src={`http://foundry.mediumra.re/img/cover${e}.jpg`}
                                            onClick={() => setPhotoIndex(e)}
                                        />
                                    </Fragment>
                                );
                            })}
                        </div>
                    </div>
                </Modal>
            )}
        </div>
    );
}

export default Practice3;
