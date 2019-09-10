import { http } from '../utils';

export const login = ({ username, password }) => {
  return http.get('/', { auth: { username, password } });
};
