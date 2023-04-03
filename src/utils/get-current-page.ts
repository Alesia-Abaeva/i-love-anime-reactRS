import { DIRECTION } from '../const/direction-button';

export const getCurrentPage = (direction: string, page: number, animes: Animes[]) => {
  let current = 1;

  if (direction === DIRECTION.NEXT && animes.length === 15) {
    console.log('зашли в DIRECTION.NEXT');

    current = page + 1;
    return current;
  }

  if (direction === DIRECTION.PREV && page > 1) {
    console.log('зашли в DIRECTION.PREV');
    current = page - 1;
    return current;
  }
};
