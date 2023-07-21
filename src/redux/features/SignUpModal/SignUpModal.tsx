import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface SignUpModalState {
  signUpOpen: boolean;
}

const initialState: SignUpModalState = {
    signUpOpen: false,
};

export const signUpModalSlice = createSlice({
  name: 'signUpModal',
  initialState,
  reducers: {
    setSignUpOpen: (state, action: PayloadAction<boolean>) => {
      state.signUpOpen = action.payload;
    },
  },
});

export const { setSignUpOpen } = signUpModalSlice.actions;
export default signUpModalSlice.reducer;
