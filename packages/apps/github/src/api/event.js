import { http } from '../utils';

export default {
  fetch(username) {
    return http.get(`/users/${username}/events`);
  },
  fetchReceived(username) {
    return http.get(`/users/${username}/received_events`);
  },
};
