import { http } from '../utils';

export default {
  fetchStarred(username) {
    return http.get(`/users/${username}/starred`);
  },
  fetchIssue() {
    return http.get('issues');
  },
};
