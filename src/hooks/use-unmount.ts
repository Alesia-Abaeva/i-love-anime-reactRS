import React from 'react';

export const useUnmount = (fn: () => void): void => {
  const fnRef = React.useRef(fn);

  fnRef.current = fn;

  React.useEffect(() => () => fnRef.current(), []);
};
