import { login as loginService } from '../../../api';

const useUserAction = () => {
  const login = async ({ username, password }) => {
    try {
      await loginService({ username, password });
    } catch (error) {
      console.error(error);
    }
  };

  return { login };
};

export default useUserAction;
