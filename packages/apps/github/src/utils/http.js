import axios from 'axios';

const http = axios.create({ baseURL: 'https://api.github.com', timeout: 5000 });

export default http;
