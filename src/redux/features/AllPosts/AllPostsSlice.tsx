import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export interface AllPostsState {
  allPosts: Array<[]>;
  isLoading:Boolean;
  isError:Boolean
  error:  string | undefined
}

const initialState: AllPostsState = {
  allPosts: [],
  isLoading: true,
  isError:false,
  error:""
}

export const getAllPosts= createAsyncThunk("allPosts/getAllPosts", async ()=>{
     const res = await fetch("https://zsqur.quickvara.com/api/v1/product")
     const data = res.json()
     return data
})
export const allPostsSlice = createSlice({
  name: 'allPosts',
  initialState,
  reducers:{},
  extraReducers: (builder) => {
     builder.addCase(getAllPosts.fulfilled, (state, action)=>{
      state.allPosts= action.payload;
      state.isLoading = false
     })
     .addCase(getAllPosts.rejected, (state, action)=>{
      state.allPosts =[]
      state.isLoading = false
      state.isError= true
      state.error = action.error.message;
     })
  },
   
});


// Action creators are generated for each case reducer function
// export const {} = allPostsSlice.actions

export default allPostsSlice.reducer