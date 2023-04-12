import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SearchState {
  search: string;
  searchResults: AnimeData[] | undefined;
}

const initialState: SearchState = {
  search: '',
  searchResults: [],
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearch(state, action: PayloadAction<string>) {
      state.search = action.payload;
    },
    setAnime(state, action: PayloadAction<AnimeData[]>) {
      state.searchResults = action.payload;
    },
  },
});

const { actions, reducer } = searchSlice;

export const { setSearch, setAnime } = actions;

export default reducer;

// export default searchSlice.reducer;
