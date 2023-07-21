import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FilterModalState {
  filterModalValue: {
    eng: string;
    ban?: string;
  };
}

const initialState: FilterModalState = {
  filterModalValue: {
    eng: "",
    ban: "",
  },
   
};

export const filterModalSlice = createSlice({
  name: "filterModalValue",
  initialState,
  reducers: {
    setFilterModalValue: (state, action: PayloadAction<{ eng: string; ban?: string }>) => {
      state.filterModalValue = action.payload;
    },
    // setFilterValue: (state, action: PayloadAction<Partial<FilterModalState>>) => {
    //   state.filterValue = {
    //     ...state.filterValue,
    //     ...action.payload.filterValue,
    //   };
    // },
  },
});

export const { setFilterModalValue } = filterModalSlice.actions;

export default filterModalSlice.reducer;
