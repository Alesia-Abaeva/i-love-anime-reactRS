import { DIRECTION } from '../const/direction-button';
import { itemOnPage } from './api-default-value';

export const getCurrentPage = <T>(direction: string, page: number, animes: T[]) => {
  let current = 1;

  if (direction === DIRECTION.NEXT && animes.length === itemOnPage) {
    current = page + 1;
    return current;
  }

  if (direction === DIRECTION.PREV && page > 1) {
    current = page - 1;
    return current;
  }
};
