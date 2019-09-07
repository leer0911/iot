import { useContext } from 'react';
import GlobalStoreContext from './GlobalStoreContext';

const useGlobalStore = () => {
  return useContext(GlobalStoreContext);
};

export default useGlobalStore;
