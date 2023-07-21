// openModalSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface OpenModalState {
  eng: any;
  ban?: any;
}

const initialState: OpenModalState = {
  eng: null,
  ban: null,
};

export const openModalSlice = createSlice({
  name: 'openModalValue',
  initialState,
  reducers: {
    setOpenModalValue(state, action: PayloadAction<{ eng: any; ban?: any }>) {
      state.eng = action.payload;
      state.ban = action.payload;
    },
    clearOpenModalValue(state) {
      state.eng = null;
      state.ban = null;
    },
  },
});

export const { setOpenModalValue, clearOpenModalValue } = openModalSlice.actions;
export default openModalSlice.reducer;
