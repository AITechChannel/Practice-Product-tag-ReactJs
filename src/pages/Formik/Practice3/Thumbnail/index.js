import React, { useEffect, useState } from 'react';
import { Button, Input, TextField } from '@mui/material';
// import 'antd/dist/antd.css';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook, FaApple, FaWind } from 'react-icons/fa';
import { IoIosWater } from 'react-icons/io';
import { TbGauge } from 'react-icons/tb';
import styles from './Thumbnail.module.scss';
import classNames from 'classnames/bind';
import * as yup from 'yup';
import { useFormik } from 'formik';
import apiConfig from '../components/api/apiConfig';
import weatherApi from '../components/api/weatherApi';
import LineChart from '../LineChart';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudMoonRain, faCloudSun, faCloudSunRain, faSmog, faSun } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);
function Thumbnail() {
    const [city, setCity] = useState('danang');
    const [data, setData] = useState();
    useEffect(() => {
        const getWeatherData = async () => {
            const params = {};
            try {
                const res = await weatherApi.getData(city, { params });
                setData(res);
                console.log(data);
            } catch (error) {}
        };
        getWeatherData();
    }, [city]);
    console.log(data);

    return (
        data && (
            <div className={cx('thumbnail-container')}>
                <div className={cx('main')}>
                    <div className={cx('temp-icon')}>
                        <span className={cx('temp')}>{Math.floor(data.main.temp - 273.15)}°C</span>
                        <img src={apiConfig.iconUrl(data.weather[0].icon)} />
                    </div>
                    <h1 className={cx('city')}>Da nang</h1>
                    <h3 className={cx('country')}>VietNam</h3>
                </div>
                <div className={cx('weather-right')}>
                    <div className={cx('des')}>
                        <div className={cx('humidity', 'info-item')}>
                            <IoIosWater className={cx('icon')} />
                            <span>{data.main.humidity}</span>
                        </div>
                        <div className={cx('humidity', 'info-item')}>
                            <TbGauge className={cx('icon')} />
                            <span>{data.main.pressure / 1000} mmBar</span>
                        </div>
                        <div className={cx('humidity', 'info-item')}>
                            <FaWind className={cx('icon')} />
                            <span>{data.wind.speed} m/s</span>
                        </div>
                    </div>
                    <div className={cx('line-chart')}>
                        <LineChart />
                        <span className={cx('weather-icon')}>
                            <FontAwesomeIcon icon={faCloudMoonRain} />
                            <FontAwesomeIcon icon={faSmog} />
                            <FontAwesomeIcon icon={faCloudSun} />
                            <FontAwesomeIcon icon={faCloudSunRain} />
                        </span>
                    </div>
                </div>
            </div>
        )
    );
}

export default Thumbnail;
