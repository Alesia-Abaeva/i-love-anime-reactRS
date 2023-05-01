import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { defaultValues } from '../../const';

export const formSlice = createSlice({
  name: 'search',
  initialState: defaultValues,
  reducers: {
    setTitle(state, action: PayloadAction<string>) {
      state.title = action.payload;
    },
    setDate(state, action: PayloadAction<string>) {
      state.date = action.payload;
    },
    setFile(state, action: PayloadAction<string>) {
      state.file = action.payload;
    },
    setSelect(state, action: PayloadAction<string>) {
      state.select = action.payload;
    },
    setCheck(state, action: PayloadAction<string>) {
      state.check = action.payload;
    },
    setRadio(state, action: PayloadAction<string>) {
      state.radio = action.payload;
    },
    setDescription(state, action: PayloadAction<string>) {
      state.description = action.payload;
    },
    setFormState(state, action: PayloadAction<FormState>) {
      state = action.payload;
    },
    setButtonDisabled(state, action: PayloadAction<boolean>) {
      state.buttonDisabled = action.payload;
    },
    setCards(state, action: PayloadAction<NewCard>) {
      state.cards = [...state.cards, action.payload];
    },
  },
});

const { actions, reducer } = formSlice;

export const {
  setCheck,
  setDescription,
  setDate,
  setFile,
  setRadio,
  setSelect,
  setTitle,
  setFormState,
  setButtonDisabled,
  setCards,
} = actions;

export default reducer;
