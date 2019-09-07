export function hasValue(value) {
  return value != null && !(Array.isArray(value) && value.length === 0);
}

export function isFilled(obj, SSR = false) {
  return (
    obj &&
    ((hasValue(obj.value) && obj.value !== '') ||
      (SSR && hasValue(obj.defaultValue) && obj.defaultValue !== ''))
  );
}

export function isAdornedStart(obj) {
  return obj.startAdornment;
}
