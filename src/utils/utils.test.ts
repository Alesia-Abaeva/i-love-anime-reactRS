import { DIRECTION, ITEM_ON_PAGE } from '../const';
import { describe } from 'vitest';
import { getCurrentPage } from './get-current-page';
import { agreeValidate, dateValidate, fileValidate } from './validate';

describe('Test utils', () => {
  const page = 1;
  const array4 = ['t', 'e', 's', 't'];
  const array15 = [...Array(ITEM_ON_PAGE).keys()];
  const array32 = [...Array(33).keys()];

  const yesterday = String(new Date().setDate(new Date().getDate() - 1));

  it('check current page', async () => {
    expect(getCurrentPage(DIRECTION.NEXT, page, array4 as string[])).toBe(undefined);
    expect(getCurrentPage(DIRECTION.NEXT, page, array15 as number[])).toBe(2);
    expect(getCurrentPage(DIRECTION.PREV, page + 1, array32 as number[])).toBe(1);
  });

  it('check date validate', async () => {
    expect(dateValidate()).toBe(true);
    expect(dateValidate(yesterday)).toBe(false);
  });

  it('check agree validate', async () => {
    expect(agreeValidate()).toBe(true);
    expect(agreeValidate('on')).toBe(false);
  });

  it('check file validate', async () => {
    expect(fileValidate('')).toBe(true);
    expect(fileValidate('on')).toBe(false);
  });
});
