import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { animeAPI } from '../service/AnimeService';
import searchReducer from '../store/reducers/SearchSlice';

const rootReducer = combineReducers({
  searchReducer,
  [animeAPI.reducerPath]: animeAPI.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(animeAPI.middleware),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppState = ReturnType<typeof setupStore>;
export type AppDispatch = AppState['dispatch'];
