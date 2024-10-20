import { configureStore } from "@reduxjs/toolkit";
import { type TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { combineReducers } from "redux";
import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE, persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import { apiMiddleware } from "./api.middleware";
import { APIsReducers } from "./api.reducers";
import { authSlice } from "./slices/auth/auth.slice";
import { modalSlice } from "./slices/modal/modal.slice";

type Store = typeof store;
export type RootState = ReturnType<Store["getState"]>;
export type AppDispatch = Store["dispatch"];

// Persist configuration
const persistConfig = {
   key: "auth",
   version: 1,
   storage,
   whitelist: ["auth"], // Specify which slice to persist
};

// Combine your reducers
const rootReducer = combineReducers({
   auth: authSlice.reducer,
   modal: modalSlice.reducer,
   ...APIsReducers,
});

// Apply persistReducer to the rootReducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure the store and middleware
const store = configureStore({
   reducer: persistedReducer,
   middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
         serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
         },
      }).concat(...apiMiddleware),
});

const persistor = persistStore(store);

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export { persistor, store };
