import { http } from '../utils';

export const login = ({ username, password }) => {
  return http.get('/', { auth: { username, password } });
};

export { default as user } from './user.js';
export { default as event } from './event.js';
