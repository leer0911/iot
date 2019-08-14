import { keyframes, css } from 'emotion';
import { useTheme } from '../theme';

const useClasses = classes => {
  const theme = useTheme() || {};
  let originClasses = classes;
  if (typeof classes === 'function') {
    originClasses = classes(theme);
  }
  const finalClasses = {};
  const keys = Object.keys(originClasses);
  const animationNames = keys.filter(key => key.indexOf('@keyframes') !== -1);
  const finalKeys = keys.filter(key => key.indexOf('@keyframes') === -1);
  const keysframes = {};

  animationNames.forEach(key => {
    const animationName = key.split(' ')[1];
    keysframes[animationName] = keyframes(originClasses[key]);
  });

  finalKeys.forEach(key => {
    finalClasses[key] = originClasses[key];
    const sheetKeys = Object.keys(originClasses[key]);
    sheetKeys.forEach(sheetkey => {
      if (sheetkey === 'animationName') {
        finalClasses[key][sheetkey] = keysframes[originClasses[key][sheetkey]];
      }
    });
  });

  finalKeys.forEach(key => {
    finalClasses[key] = css(finalClasses[key]);
  });

  return finalClasses;
};

export default useClasses;
