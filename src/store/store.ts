import { combineReducers, configureStore } from '@reduxjs/toolkit';
import searchReducer from '../store/reducers/SearchSlice';

const rootReducer = combineReducers({
  searchReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    //   middleware: (getDefaultMiddleware) =>
    //     getDefaultMiddleware().concat(postApi.middleware),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppState = ReturnType<typeof setupStore>;
export type AppDispatch = AppState['dispatch'];
