import { combineReducers, configureStore, PreloadedState } from '@reduxjs/toolkit';
import { animeAPI } from '../service/AnimeService';
import searchReducer from '../store/reducers/SearchSlice';
import formReducer from '../store/reducers/FormSlice';

const rootReducer = combineReducers({
  searchReducer,
  formReducer,
  [animeAPI.reducerPath]: animeAPI.reducer,
});

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(animeAPI.middleware),
    preloadedState,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppState = ReturnType<typeof setupStore>;
export type AppDispatch = AppState['dispatch'];
