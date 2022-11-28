const callToApi = () => {
    return fetch('https://beta.adalab.es/curso-intensivo-fullstack-recursos/apis/adalabers-v1/promo-radsajsd.json')
            .then((response) => response.json())
            .then((data) => data.results)
};

export default callToApi;
