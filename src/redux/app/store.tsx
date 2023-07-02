import { configureStore } from '@reduxjs/toolkit'
import  allPostsSlice  from '../features/AllPosts/AllPostsSlice'
import { createLogger } from 'redux-logger'
import languageSlice  from '../features/Language/LanguageSlice'
 
const middlewares: Array<any>  = [];

if (process.env.NODE_ENV === 'production') {
  const logger = createLogger({
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

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch