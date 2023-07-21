// universityFilterSlice.ts
import { RootState } from "@/redux/app/store";
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { useRouter } from "next/router";

// Define the initial state
interface UniversityFilterState {
  isLoading: boolean;
  filterPost: any[]; // Replace 'any' with the actual type of objects in the array if possible
}

const initialState: UniversityFilterState = {
  isLoading: true,
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
  // const router = useRouter();
  // const params = router.asPath;
  // const refreshParams = params.split("/");
  //  const openModalValue = (decodeURIComponent(refreshParams[2]))
  const openModalValue = state.openModalValue; // Assuming the state key for openModalValue is "openModalValue"
  //  console.log(openModalValue)
  // const dispatch = useDispatch<AppDispatch>()
  // useEffect(() => {
  //     dispatch(fetchAndFilterUniversityData()); // Dispatch the async thunk with openModalValue as the argument
  //   }, [dispatch, openModalValue]);
  const response = await fetch("http://localhost:5000/api/v1/product");
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

// Create the slice
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
    // Handle the pending and fulfilled actions of fetchAndFilterUniversityData
    builder
      .addCase(fetchAndFilterUniversityData.fulfilled, (state, action) => {
        state.filterPost = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchAndFilterUniversityData.rejected, (state, action) => {
        state.isLoading = false;
        // Handle error, if needed
      });
  },
});
export const { setUniversity } = universityFilterSlice.actions;
export default universityFilterSlice.reducer;
