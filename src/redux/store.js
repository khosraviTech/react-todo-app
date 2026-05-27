import { configureStore } from "@reduxjs/toolkit";
import todosSlice from "./todosSlice";

let store = configureStore({
  reducer: todosSlice.reducer
});
export default store;
