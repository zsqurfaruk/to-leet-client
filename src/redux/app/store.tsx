import { configureStore } from '@reduxjs/toolkit'
import  allPostsSlice  from '../features/AllPosts/AllPostsSlice'
import logger from 'redux-logger'
import languageSlice  from '../features/Language/LanguageSlice'
 

export const store = configureStore({
//   devTools:false,
  reducer: {
    allPosts: allPostsSlice,
    language: languageSlice
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch