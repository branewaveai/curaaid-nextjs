import { configureStore } from "@reduxjs/toolkit";
import currencyReducer from "./currencySlice";

const store = configureStore({
  reducer: {
    currency: currencyReducer,
  },
});

// Export types for the store
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
