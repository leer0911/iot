import { useEffect } from 'react';
import { user as userService } from '../../../api';
import { useGlobalStore } from '../..';
import { FETCH_USER_INFO_SUCCESS } from '../../reducers';

const useUserInfo = () => {
  const { userState, userDispatch } = useGlobalStore();
  const { data: userInfo, loaded } = userState;

  // 获取用户信息
  useEffect(() => {
    const fetchUserInfo = async () => {
      const res = await userService.fetch();
      userDispatch({
        type: FETCH_USER_INFO_SUCCESS,
        payload: res,
      });
    };

    if (!loaded) {
      fetchUserInfo();
    }
  }, [loaded, userDispatch]);

  return userInfo || {};
};

export default useUserInfo;
