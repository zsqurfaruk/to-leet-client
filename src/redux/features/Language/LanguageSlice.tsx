import { createSlice, PayloadAction, Reducer } from '@reduxjs/toolkit';

export interface LanguageState {
  language: boolean;
}

const initialState: LanguageState = {
  language: false,
};

export const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    toggleLanguage: (state, action: PayloadAction<boolean>) => {
      state.language = action.payload;
    },
  },
});

export const { toggleLanguage } = languageSlice.actions;

export const languageReducer: Reducer<LanguageState> = languageSlice.reducer;

export default languageReducer;
