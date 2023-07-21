import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface SignInModalState {
  signInOpen: boolean;
}

const initialState: SignInModalState = {
    signInOpen: false,
};

export const signInModalSlice = createSlice({
  name: 'signInModal',
  initialState,
  reducers: {
    setSignInOpen: (state, action: PayloadAction<boolean>) => {
      state.signInOpen = action.payload;
    },
  },
});

export const { setSignInOpen } = signInModalSlice.actions;
export default signInModalSlice.reducer;
