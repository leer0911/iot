import { http } from '../utils';

export const login = ({ username, password }) => {
  return http.get('/', { auth: { username, password } });
};

export { default as user } from './user';
export { default as event } from './event';
export { default as repo } from './repo';
export { default as notification } from './notification';
export { default as issue } from './issue';
