const apiConfig = {
    baseUrl: process.env.REACT_APP_WEATHER_BASE_URL,
    apiKey: process.env.REACT_APP_WEATHER_API_KEY,
    iconUrl: (path) => {
        return `https://openweathermap.org/img/wn/${path}@4x.png`;
    },
};
export default apiConfig;
