import { TITLE } from '../const/page-title';
import canvas from '../components/404/404.module.scss';

export const NotFound = () => {
  return (
    <>
      <div className={canvas.canvas_page}>
        <h2>{TITLE[404]}</h2>
      </div>
    </>
  );
};
