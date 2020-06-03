import axios from 'axios';

const instance = axios.create({
    baseURL:'https://burger-builder-back-end.herokuapp.com/api',
    // baseURL: 'http://localhost:5500/api'
});


instance.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

export default instance