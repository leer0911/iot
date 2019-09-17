// https://developer.github.com/v3/issues/

import { http } from '../utils';

export default {
  fetch(params) {
    return http.get('/issues', { params });
  },
};
