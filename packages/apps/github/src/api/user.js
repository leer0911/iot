import { http } from '../utils';

export default {
  fetch() {
    return http.get('/user');
  },
};
