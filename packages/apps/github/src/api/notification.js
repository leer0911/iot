// https://developer.github.com/v3/activity/notifications/

import { http } from '../utils';

export default {
  fetch(params) {
    return http.get('/notifications', { params });
  },
};
