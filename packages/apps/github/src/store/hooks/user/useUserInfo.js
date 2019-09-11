import { useEffect } from 'react';
import { useGlobalStore } from '../..';
import { FETCH_USER_INFO_SUCCESS } from '../../reducers';
import { user as userService } from '../../../api';

const useUserInfo = () => {
  const { userState, userDispatch } = useGlobalStore();
  const { data: userInfo, loaded } = userState;

  useEffect(() => {
    const fetchUserInfo = async () => {
      useUserInfo.loading = true;
      const res = await userService.fetch();
      userDispatch({
        type: FETCH_USER_INFO_SUCCESS,
        payload: res,
      });
    };

    if (!loaded && !useUserInfo.loading) {
      fetchUserInfo();
    }
  }, [loaded, userDispatch]);

  return userInfo || {};
};

useUserInfo.loading = false;

export default useUserInfo;
