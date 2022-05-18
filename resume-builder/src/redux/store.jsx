import { configureStore } from "@reduxjs/toolkit";
import template1Reducer from "./template1Slice";
import userReducer from "./userSlice";

export const store = configureStore({
  reducer: {
    // user: userReducer,
    template1: template1Reducer,
  },
});
