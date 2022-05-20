import { configureStore } from "@reduxjs/toolkit";
import template1Reducer from "./template1Slice";

export const store = configureStore({
  reducer: {
    // user: userReducer,
    template1: template1Reducer,
  },
});
