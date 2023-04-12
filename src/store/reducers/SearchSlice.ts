import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SearchState {
  anime: AnimeData[];
  isLoading: boolean;
  error: string | null;
  search: string;
}

const initialState: SearchState = {
  anime: [],
  isLoading: false,
  error: null,
  search: '',
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearch(state, action: PayloadAction<string>) {
      state.search = action.payload;
    },
  },
});

export default searchSlice.reducer;
