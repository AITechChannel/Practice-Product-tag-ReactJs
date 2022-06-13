const apiConfig = {
    baseUrl: 'https://api.openweathermap.org/data/2.5/',
    apiKey: 'd78fd1588e1b7c0c2813576ba183a667',
    iconUrl: (path) => {
        return `https://openweathermap.org/img/wn/${path}@4x.png`;
    },
};
export default apiConfig;
