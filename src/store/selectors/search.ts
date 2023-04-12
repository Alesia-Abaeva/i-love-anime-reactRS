import { createSelector } from '@reduxjs/toolkit';
import { rootStateSelector } from './root';

export const searchValueSelector = createSelector(
  rootStateSelector,
  (state) => state.searchReducer.search
);

export const searchResultSelector = createSelector(
  rootStateSelector,
  (state) => state.searchReducer.searchResults
);
