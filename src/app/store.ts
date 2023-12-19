import { configureStore } from "@reduxjs/toolkit";
import packagesReducer from "../features/packages/packages-slice";

export const store = configureStore({
  reducer: {
    packages: packagesReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
