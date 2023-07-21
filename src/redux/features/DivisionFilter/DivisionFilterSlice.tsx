import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface FilterDivisionState {
  divisionNameEng: {
    eng: string;
    ban: string;
  };
  // Add other relevant state properties here
}

const initialState: FilterDivisionState = {
  divisionNameEng: {
    eng: "",
    ban: "",
  }
  // Initialize other state properties
};

export const filterDivisionSlice = createSlice({
  name: "divisionNameEng",
  initialState,
  reducers: {
    setDivisionNameEng: (state, action: PayloadAction<{ eng: string; ban: string }>) => {
      return {
        ...state,
        divisionNameEng: {
          ...state.divisionNameEng,
          ...action.payload,
        },
      };
    },
    // Add other relevant reducer functions here
  },
});

export const { setDivisionNameEng } = filterDivisionSlice.actions;
export default filterDivisionSlice.reducer;
