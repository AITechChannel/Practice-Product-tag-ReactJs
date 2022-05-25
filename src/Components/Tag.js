import { faCalendar, faHeart } from '@fortawesome/free-regular-svg-icons';
import React from 'react';
import classNames from 'classnames/bind';
import styles from './Tag.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faLocation, faLocationDot } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);

function Tag() {
    const memberData = [
        {
            avatar: 'https://i.guim.co.uk/img/media/26392d05302e02f7bf4eb143bb84c8097d09144b/446_167_3683_2210/master/3683.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=49ed3252c0b2ffb49cf8b508892e452d',
            full_name: 'Robort patitision',
            job: 'developing',
            dob: '23/05/2014',
            bg: 'B+',
            edu: 'MCA',
            res: 'Bangalore',
            email: 'robot12@gmail.com',
            phone: '123456789',
        },
        {
            avatar: 'https://i.guim.co.uk/img/media/26392d05302e02f7bf4eb143bb84c8097d09144b/446_167_3683_2210/master/3683.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=49ed3252c0b2ffb49cf8b508892e452d',
            full_name: 'Robort patitision',
            job: 'developing',
            dob: '23/05/2014',
            bg: 'B+',
            edu: 'MCA',
            res: 'Bangalore',
            email: 'robot12@gmail.com',
            phone: '123456789',
        },
        {
            avatar: 'https://i.guim.co.uk/img/media/26392d05302e02f7bf4eb143bb84c8097d09144b/446_167_3683_2210/master/3683.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=49ed3252c0b2ffb49cf8b508892e452d',
            full_name: 'Robort patitision',
            job: 'developing',
            dob: '23/05/2014',
            bg: 'B+',
            edu: 'MCA',
            res: 'Bangalore',
            email: 'robot12@gmail.com',
            phone: '123456789',
        },
        {
            avatar: 'https://i.guim.co.uk/img/media/26392d05302e02f7bf4eb143bb84c8097d09144b/446_167_3683_2210/master/3683.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=49ed3252c0b2ffb49cf8b508892e452d',
            full_name: 'Robort patitision',
            job: 'developing',
            dob: '23/05/2014',
            bg: 'B+',
            edu: 'MCA',
            res: 'Bangalore',
            email: 'robot12@gmail.com',
            phone: '123456789',
        },
    ];
    return (
        <>
            {memberData.map((item, index) => (
                <div className={cx('wrapper')}>
                    <div className={cx('container')} key={index}>
                        <div className={cx('container__img')}>
                            <img src={item.avatar}></img>
                        </div>

                        <h2 className={cx('container__name')}>{item.full_name}</h2>
                        <p className={cx('container__job')}>{item.job}</p>
                        <div className={cx('container__info')}>
                            <div className={cx('title')}>
                                <span>
                                    <FontAwesomeIcon icon={faCalendar} />
                                </span>
                                <p>dob</p>
                            </div>
                            <p className={cx('dov__content')}>{item.dob}</p>
                        </div>

                        <div className={cx('container__info')}>
                            <div className={cx('title')}>
                                <span>
                                    <FontAwesomeIcon icon={faHeart} />
                                </span>
                                <p>BG</p>
                            </div>
                            <p>{item.bg}</p>
                        </div>

                        <div className={cx('container__info')}>
                            <div className={cx('title')}>
                                <span>
                                    <FontAwesomeIcon icon={faGraduationCap} />
                                </span>
                                <p>edu</p>
                            </div>
                            <p>{item.edu}</p>
                        </div>

                        <div className={cx('container__info')}>
                            <div className={cx('title')}>
                                <span>
                                    <FontAwesomeIcon icon={faLocationDot} />
                                </span>
                                <p>BG</p>
                            </div>
                            <p>{item.res}</p>
                        </div>

                        <div className={cx('container__email')}>
                            <h3>Email ID</h3>
                            <p>{item.email}</p>
                        </div>

                        <div className={cx('container__phone')}>
                            <h3>Phone no</h3>
                            <p>{item.phone}</p>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}

export default Tag;
