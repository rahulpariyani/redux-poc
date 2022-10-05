import { configureStore } from "@reduxjs/toolkit";
import { s__todo } from "./slice/todo.slice";
const rootReducer = {
  Todo: s__todo.reducer,
};

const preloadedState = {
  Todo: [],
};
const store = configureStore({
  reducer: rootReducer,
  devTools: true,
  preloadedState: preloadedState,
});
export default store;
