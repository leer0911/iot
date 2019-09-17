import { useGlobalStore, SET_THEME } from '../../../store';

const useThemeAction = () => {
  const { themeDispatch } = useGlobalStore();

  const setTheme = type => {
    themeDispatch({ type: SET_THEME, payload: type });
  };

  return { setTheme };
};

export default useThemeAction;
