import { RootState } from "@/redux/app/store";
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

interface UniversityFilterState {
  isLoading: boolean;
  filterPost: any[];
}

const initialState: UniversityFilterState = {
  isLoading: false,
  filterPost: [],
};

// Create an async thunk to fetch and filter university data
type UniversityData = any;
export const fetchAndFilterUniversityData = createAsyncThunk<
  UniversityData[], // Return type of the thunk (filtered data)
  void, // Argument type (no argument in this case)
  {
    state: RootState; // Type for getState()
  }
>("university/fetchData", async (_, { getState }) => {
  const state: any = getState() as RootState;

  const openModalValue = state.openModalValue;
  const response = await fetch("https://zsqur.quickvara.com/api/v1/product");
  const data = await response.json();

  if (openModalValue?.eng) {
    const result = data.filter(
      (post: any) => openModalValue?.eng?.eng === post.university?.eng
    );
    return result;
  } else {
    return [];
  }
});

export const universityFilterSlice = createSlice({
  name: "university",
  initialState,
  reducers: {
    // Add the 'setUniversity' action
    setUniversity(state, action: PayloadAction<any>) {
      state.filterPost = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAndFilterUniversityData.pending, (state) => {
        state.filterPost = []
        state.isLoading = true;
      })
      .addCase(fetchAndFilterUniversityData.fulfilled, (state, action) => {
        state.filterPost = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchAndFilterUniversityData.rejected, (state) => {
        state.isLoading = false;
        // Handle error, if needed
      });
  },
});
export const { setUniversity } = universityFilterSlice.actions;
export default universityFilterSlice.reducer;
