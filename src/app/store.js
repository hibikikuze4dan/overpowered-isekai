import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import dataSlice from "../redux/slice";

export default configureStore({
  reducer: {
    counter: counterReducer,
    data: dataSlice,
  },
});
