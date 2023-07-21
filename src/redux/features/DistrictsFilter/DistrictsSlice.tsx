import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FilterDistrictsState {
  districtsName: {
    eng: string,
    ban: string,
  }
}

const initialState: FilterDistrictsState = {
  districtsName: {
    eng: "",
    ban: "",
  }
};

export const filterDistrictsSlice = createSlice({
  name: "districtsName",
  initialState,
  reducers: {
    setDistrictsName: (state, action: PayloadAction<{ eng: string; ban: string }>) => {
      return {
        ...state,
        districtsName: {
          ...state.districtsName,
          ...action.payload,
        },
      };
    },
  },
});

export const { setDistrictsName } = filterDistrictsSlice.actions;
export default filterDistrictsSlice.reducer;
