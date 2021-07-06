import axios from 'axios';

const Api = axios.create({
    baseURL:'https://server-gait.herokuapp.com/'
});

export default Api;
