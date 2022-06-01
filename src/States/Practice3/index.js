import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Practice3.module.scss';

import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
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

    const ar = [5, 6, 7, 8];
    return (
        <div className={cx('container')}>
            <div className={cx('photo')}>
                <div className={cx('thumbnail')}>
                    {ar.map((e) => {
                        return (
                            <div>
                                <img
                                    src={`http://foundry.mediumra.re/img/cover${e}.jpg`}
                                    onClick={() => {
                                        setPhotoIndex(e);
                                        setShowPhoto(true);
                                    }}
                                />
                            </div>
                        );
                    })}
                </div>
            </div>

            {showPhoto && (
                <Modal>
                    <div className={cx('inner')}>
                        <div className={cx('photo')}>
                            <span className={cx('control-prev')}>
                                <FcPrevious onClick={hanldePrev} />
                            </span>
                            {ar.map((e) => {
                                return (
                                    <div className={cx('image', `${photoIndex == e ? 'active' : ''}`)}>
                                        <img src={`http://foundry.mediumra.re/img/cover${e}.jpg`} className={cx(``)} />
                                    </div>
                                );
                            })}
                            <span className={cx('control-next')}>
                                <FcNext onClick={hanldeNext} />
                            </span>
                            <span className={cx('control-close')}>
                                <FcNext onClick={hanldeNext} />
                            </span>
                        </div>
                        <div className={cx('thumbnail')}>
                            {ar.map((e) => {
                                return (
                                    <div>
                                        <img
                                            src={`http://foundry.mediumra.re/img/cover${e}.jpg`}
                                            onClick={() => setPhotoIndex(e)}
                                        />
                                    </div>
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
