import { login as loginService } from '../../../api';
import { useGlobalStore, LOGIN_SUCCESS } from '../../../store';

const useUserAction = () => {
  const { userDispatch } = useGlobalStore();

  const login = async ({ username, password }) => {
    try {
      await loginService({ username, password });
      userDispatch({ type: LOGIN_SUCCESS, payload: { token: btoa(`${username}:${password}`) } });
    } catch (error) {
      console.error(error);
    }
  };

  return { login };
};

export default useUserAction;
