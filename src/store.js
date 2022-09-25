import { configureStore } from "@reduxjs/toolkit";
import { r__todo } from "./reducers/todo.reducer";
import { s__counter } from "./reducers/counter.slice";
const rootReducer = {
  Todo: r__todo,
  Counter: s__counter.reducer,
};

const preloadedState = {
  Todo: [
    // {
    //   name: "solve codewars problems...",
    //   isCompleted: true,
    // },
    // {
    //   name: "explore redux concepts...",
    //   isCompleted: true,
    // },
  ],
  Counter: 0,
};
const store = configureStore({
  reducer: rootReducer,
  devTools: true,
  preloadedState: preloadedState,
});
export default store;
