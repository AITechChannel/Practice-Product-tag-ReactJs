import axiosClient from './axiosClient';

const weatherApi = {
    getData: (city, params) => {
        const url = '/weather?q=' + city;
        return axiosClient.get(url, params);
    },
};

export default weatherApi;
