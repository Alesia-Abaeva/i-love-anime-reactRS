import { Eye } from './eye';

export const DISPLAY_WIDTH = window.innerWidth;
export const DISPLAY_HEIGHT = window.innerHeight;
export const DISPLAY_DURATION = 10;

export const initEyes = (canvasNode?: HTMLCanvasElement) => {
  if (!canvasNode) {
    return null;
  } else {
    const mouse = { x: 0, y: 0 };

    const initialize = () => {
      const canvas = canvasNode;

      if (canvas) {
        canvas.width = DISPLAY_WIDTH;
        canvas.height = DISPLAY_HEIGHT;

        const context = canvas.getContext('2d') as CanvasRenderingContext2D;

        window.addEventListener(
          'mousemove',
          function (event) {
            mouse.x = event.clientX;
            mouse.y = event.clientY;
          },
          false
        );

        const eyes = [
          new Eye(canvas, 0.19, 0.8, 0.88, 0.31),
          new Eye(canvas, 0.1, 0.54, 0.84, 0.32),
          new Eye(canvas, 0.81, 0.13, 0.63, 0.33),
          new Eye(canvas, 0.89, 0.19, 0.58, 0.34),
          new Eye(canvas, 0.4, 0.08, 0.97, 0.35),
          new Eye(canvas, 0.64, 0.74, 0.57, 0.36),
          new Eye(canvas, 0.41, 0.89, 0.56, 0.37),
          new Eye(canvas, 0.92, 0.89, 0.75, 0.38),
          new Eye(canvas, 0.27, 0.2, 0.87, 0.39),
          new Eye(canvas, 0.17, 0.46, 0.68, 0.41),
          new Eye(canvas, 0.71, 0.29, 0.93, 0.42),
          new Eye(canvas, 0.84, 0.46, 0.54, 0.43),
          new Eye(canvas, 0.93, 0.35, 0.63, 0.44),
          new Eye(canvas, 0.77, 0.82, 0.85, 0.45),
          new Eye(canvas, 0.36, 0.74, 0.9, 0.46),
          new Eye(canvas, 0.13, 0.24, 0.85, 0.47),
          new Eye(canvas, 0.58, 0.2, 0.77, 0.48),
          new Eye(canvas, 0.55, 0.84, 0.87, 0.5),

          new Eye(canvas, 0.5, 0.5, 5.0, 0.1),
        ];

        const startTime = Date.now();

        animate({ context, startTime, eyes });
      }
    };

    const animate = ({
      context,
      startTime,
      eyes,
    }: {
      context: CanvasRenderingContext2D;
      startTime: number;
      eyes: Eye[];
    }) => {
      // The number of seconds that have passed since initialization
      const seconds = (Date.now() - startTime) / 1000;

      // Out with the old ...
      context?.clearRect(0, 0, DISPLAY_WIDTH, DISPLAY_HEIGHT);

      // ... in with the new
      eyes.forEach((eye) => {
        if (seconds > eye.activationTime * DISPLAY_DURATION) {
          eye.activate();
        }

        eye.update(mouse);
      });

      requestAnimationFrame(() =>
        animate({
          context,
          startTime,
          eyes,
        })
      );
    };

    setTimeout(initialize, 1);
  }
};
