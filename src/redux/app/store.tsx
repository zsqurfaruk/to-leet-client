import { configureStore } from "@reduxjs/toolkit";
import { createLogger } from "redux-logger";
import allPostsSlice from "../features/AllPosts/AllPostsSlice";
import languageSlice from "../features/Language/LanguageSlice";

const middlewares: Array<any> = [];

if (process.env.NODE_ENV === "development") {
  const logger = createLogger({
    collapsed: true,
  });

  middlewares.push(logger);
}

const rootReducer = {
  allPosts: allPostsSlice,
  language: languageSlice,
};

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middlewares),
  devTools: false,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
