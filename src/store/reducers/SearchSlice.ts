import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SearchState {
  search: string;
}

const initialState: SearchState = {
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

const { actions, reducer } = searchSlice;

export const { setSearch } = actions;

export default reducer;
