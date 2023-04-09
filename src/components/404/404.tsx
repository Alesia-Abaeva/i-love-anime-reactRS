import { useMount } from '../../hooks';
import React from 'react';
import { DISPLAY_HEIGHT, DISPLAY_WIDTH, initEyes } from './404.helpers';

export const Page404 = () => {
  const canvasRef = React.useRef<HTMLCanvasElement | null>(null);

  useMount(() => {
    canvasRef.current && initEyes(canvasRef.current);
  });

  return <canvas ref={canvasRef} width={DISPLAY_WIDTH} height={DISPLAY_HEIGHT} />;
};
