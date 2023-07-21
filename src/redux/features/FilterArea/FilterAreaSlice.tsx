import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface FilterAreaState {
  homePopularAreaName: {
    eng: string;
    ban?: string;
  };
}

const initialState: FilterAreaState = {
  homePopularAreaName: {
    eng: "",
    ban: "",
  },
};

export const filterAreaSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setHomePopularAreaName: (state, action: PayloadAction<{ eng: string; ban?: string }>) => {
      return {
        ...state,
        homePopularAreaName: {
          ...state.homePopularAreaName,
          ...action.payload,
        },
      };
    },
  },
});


export const { setHomePopularAreaName } = filterAreaSlice.actions;

export default filterAreaSlice.reducer;
