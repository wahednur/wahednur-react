import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
// Add more slices as needed

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
  //   devTools: process.env.NODE_ENV !== 'production',
});
