// https://developer.github.com/v3/issues/

import { http } from '../utils';

export default {
  fetch() {
    return http.get('/user/issues');
  },
};
