import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface CityState {
  cityName: {
    eng: string;
    ban?: string;
  };
}

export const initialCityState: CityState = {
  cityName: {
    eng: "",
    ban: "",
  },
};

export const filterSlice = createSlice({
  name: "cityName",
  initialState: initialCityState,
  reducers: {
    setCityName: (state, action: PayloadAction<{ eng: string; ban?: string }>) => {
      return {
        ...state,
        cityName: {
          ...state.cityName,
          ...action.payload,
        },
      };
    },
  },
});

export const { setCityName } = filterSlice.actions;

export default filterSlice.reducer;