import { faCloudMoonRain, faCloudSun, faCloudSunRain, faSmog } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { useEffect, useRef, useState } from 'react';
import { FaWind } from 'react-icons/fa';
import { IoIosWater } from 'react-icons/io';
import { TbGauge } from 'react-icons/tb';
import apiConfig from '../../api/apiConfig';
import weatherApi from '../../api/weatherApi';
import LineChart from '../LineChart';
import styles from './Thumbnail.module.scss';
const cx = classNames.bind(styles);
function Thumbnail() {
    const [city, setCity] = useState('hanoi');
    const [data, setData] = useState();
    const [valueSearch, setValueSearch] = useState('');
    const inputRef = useRef();
    useEffect(() => {
        const getWeatherData = async () => {
            const params = {};
            try {
                const res = await weatherApi.getData(city, { params });
                setData(res);
            } catch (error) {
                alert('City not found, please check again, Ex: Ha Noi, Da Nang, Sai gon, Tokyo,,,,');
            }
        };
        getWeatherData();
    }, [city]);

    const handleOnChangeInput = (e) => {
        setValueSearch(e.target.value);
    };

    useEffect(() => {
        const inputElement = inputRef.current;
        const handleOnEnter = (e) => {
            if (e.which == 13) {
                setCity(valueSearch.replace(/ /g, ''));
                inputElement.value = '';
            }
        };
        if (inputElement) {
            inputElement.addEventListener('keydown', handleOnEnter);
        }

        return () => {
            if (inputElement) {
                inputElement.removeEventListener('keydown', handleOnEnter);
            }
        };
    }, [valueSearch]);
    return (
        data && (
            <div className={cx('thumbnail-container')}>
                <div className={cx('main')}>
                    <input
                        className={cx('search')}
                        placeholder="Search city name"
                        onChange={(e) => handleOnChangeInput(e)}
                        ref={inputRef}
                    />
                    <div className={cx('temp-icon')}>
                        <span className={cx('temp')}>{Math.floor(data.main.temp - 273.15)}°C</span>
                        <img src={apiConfig.iconUrl(data.weather[0].icon)} />
                    </div>
                    <h1 className={cx('city')}>{data.name}</h1>
                    <h3 className={cx('country')}>{data.sys.country}</h3>
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
