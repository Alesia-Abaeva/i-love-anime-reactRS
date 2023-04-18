import { createSelector } from '@reduxjs/toolkit';
import { rootStateSelector } from './root';

export const formValueSelector = createSelector(rootStateSelector, (state) => state.formReducer);
