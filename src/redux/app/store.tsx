import { configureStore } from '@reduxjs/toolkit'
import  allPostsSlice  from '../features/AllPosts/AllPostsSlice'
import { createLogger } from 'redux-logger'
import languageSlice  from '../features/Language/LanguageSlice'
 
const middlewares: Array<any>  = [];

if (process.env.NODE_ENV === 'development') {
  const logger = createLogger({
    // Specify your desired options here
    collapsed: true,
  });

  middlewares.push(logger);
}
export const store = configureStore({
  
  reducer: {
    allPosts: allPostsSlice,
    language: languageSlice
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({
      thunk: true,
      immutableCheck: true,
      serializableCheck: true,
    }),
    ...middlewares,
  ],
  
  devTools: false,
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch