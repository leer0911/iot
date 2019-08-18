import { useEffect, useRef } from 'react';

const useUpdateEffect = (effect, deps) => {
  const isInitialMount = useRef(true);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      effect();
    }
  }, [effect]);
};

export default useUpdateEffect;
