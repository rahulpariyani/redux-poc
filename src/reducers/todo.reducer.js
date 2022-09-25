import { createReducer } from "@reduxjs/toolkit";
import {
  a__todo_add,
  a__todo_delete,
  a__todo_toggle,
} from "../actions/todo.action";

let initialState = [];
export const r__todo = createReducer(initialState, (builder) => {
  builder
    .addCase(a__todo_add, (state, action) => {
      return [...state, action.payload];
    })
    .addCase(a__todo_delete, (state, action) => {
      const { index } = action.payload;
      state = [...state.splice(index, 1)];
    })
    .addCase(a__todo_toggle, (state, action) => {
      const { index, isCompleted } = action.payload;
      state = [...state, (state[index].isCompleted = isCompleted)];
    });
});
