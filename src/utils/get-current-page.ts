import { DIRECTION, ITEM_ON_PAGE } from '../const';

export const getCurrentPage = <T>(direction: string, page: number, animes: T[]) => {
  let current = 1;

  if (direction === DIRECTION.NEXT && animes.length === ITEM_ON_PAGE) {
    current = page + 1;
    return current;
  }

  if (direction === DIRECTION.PREV && page > 1) {
    current = page - 1;
    return current;
  }
};
