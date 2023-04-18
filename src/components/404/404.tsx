import { useMount } from '../../hooks';
import React from 'react';
import { DISPLAY_HEIGHT, DISPLAY_WIDTH, initEyes } from './utils';

export const Page404 = () => {
  const canvasRef = React.useRef<HTMLCanvasElement | null>(null);

  useMount(() => {
    canvasRef.current && initEyes(canvasRef.current);
  });

  return (
    <canvas data-testid="canvas" ref={canvasRef} width={DISPLAY_WIDTH} height={DISPLAY_HEIGHT} />
  );
};
