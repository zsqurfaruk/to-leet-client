import { configureStore, combineReducers} from "@reduxjs/toolkit";
import { createLogger } from "redux-logger";
import { persistStore, persistReducer, createMigrate } from 'redux-persist';
import storageSession from 'redux-persist/lib/storage/session';
import allPostsSlice  from "../features/AllPosts/AllPostsSlice";
import languageSlice from "../features/Language/LanguageSlice";
import filterSlice, {setCityName } from "../features/FilterCity/FilterCitySlice";
import  filterAreaSlice,{ setHomePopularAreaName } from "../features/FilterArea/FilterAreaSlice";
import filterModalSlice, { setFilterModalValue } from "../features/FilterModalSlice/FilterModalSlice";
import  filterDivisionSlice, { setDivisionNameEng }  from "../features/DivisionFilter/DivisionFilterSlice";
import  filterDistrictsSlice, { setDistrictsName }  from "../features/DistrictsFilter/DistrictsSlice";
import openModalSlice, {  setOpenModalValue }  from "../features/UniversitySlice/UniversitySlice";
import { encryptTransform } from 'redux-persist-transform-encrypt';
import migrations from "./migrates";
import universityFilterSlice, { setUniversity }  from "../features/UniversityFilter/UniversityFilerSlice";
import signInModalSlice  from "../features/SignInModal/SignInModalSlice";
import  signUpModalSlice  from "../features/SignUpModal/SignUpModal";
import { io } from 'socket.io-client';
import  getMessagesSlice  from "../features/Messages/GetMessage/GetMessageSlice";

const socket = io('http://localhost:5000');
  

const middlewares: Array<any> = [];

if (process.env.NODE_ENV === "development") {
  const logger = createLogger({
    collapsed: true,
  });

  middlewares.push(logger);
}

const rootReducer = combineReducers({
  allPosts: allPostsSlice,
  language: languageSlice,
  ['qv-cn']: filterSlice,
  ['qv-hpa']: filterAreaSlice,
  ['qv-fmv']: filterModalSlice,
  ['qv-dn']: filterDivisionSlice,
  ['qv-dsn'] : filterDistrictsSlice,
  ['qv-omv']: openModalSlice,
  ['qv-uv']: universityFilterSlice,
  // ['qv-utv']: UniversityTypeFilterSlice,
  signInModal: signInModalSlice,
  signUpModal: signUpModalSlice,
  messages: getMessagesSlice
});

const encryptionKey = '362a94e7a161bc4ddaf2b58bf7026ce48fa4312e2d5df6195485ee2ab0efd4202408a0368515f9cb6c1802556320dfbe4aa3a3494c5fa441e74811686551293e7fab68249f611efc5cc545f9256e5996915c85717d7ff3df5336249fca44edf7a1015cc4c0ff2e5755f800e88d9571cad74e479a15bf263fa679f9994b19b9e5a33264835e93dad0f5bbaf1b';

// Create the encryption transform
const encryptionTransform = encryptTransform({
  secretKey: encryptionKey,
  onError: function (error) {
    // Handle encryption/decryption errors here (optional)
    // console.error('Encryption/Decryption Error:', error);
  },
});
 
const persistConfig = {
  key: 'root',
  storage: storageSession,
  transforms: [encryptionTransform], 
  whitelist: ['qv-cn', 'qv-hpa', 'qv-fmv', 'qv-dn', 'qv-dsn', 'qv-omv','qv-uv'],
  version: 2, // Update this to the latest version
  // migrate: createMigrate(migrations, { debug: false }),
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
export const emitAuthorEmail = (authorEmail: string) => {
  return () => {
    // Dispatch an action to emit "set-email" via WebSocket
    socket.emit("set-email", authorEmail);
  };
};
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middlewares),
    devTools: false,
});

export const persistor = persistStore(store);
const persistedState = persistor.getState();

if (persistedState && Object.keys(persistedState).length > 0) {
  const { cityName, homePopularAreaName, filterModalValue, divisionNameEng, districtsName, openModalValue,university }: any = persistedState;

  // Dispatch the action to update the Redux store
  store.dispatch(setCityName(cityName));
  store.dispatch(setHomePopularAreaName(homePopularAreaName));
  store.dispatch(setFilterModalValue(filterModalValue));
  store.dispatch(setDivisionNameEng(divisionNameEng));
  store.dispatch(setDistrictsName(districtsName));
  store.dispatch(setOpenModalValue(openModalValue));
  store.dispatch(setUniversity(university));

}
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;


