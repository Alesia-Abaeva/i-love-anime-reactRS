import img1 from '../assets/img/err/err_1.png';
import img2 from '../assets/img/err/err_2.png';
import img3 from '../assets/img/err/err_3.png';
import img4 from '../assets/img/err/err_4.png';
import img5 from '../assets/img/err/err_5.png';
import img6 from '../assets/img/err/err_6.png';
import img7 from '../assets/img/err/err_7.png';
import img8 from '../assets/img/err/err_8.png';

export const random_img = (): string => {
  const arr = [img4, img1, img2, img3, img5, img6, img7, img8];
  const item = arr[Math.floor(Math.random() * arr.length)];
  console.log(item);

  return item;
};
