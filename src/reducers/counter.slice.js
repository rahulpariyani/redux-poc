import { createSlice } from "@reduxjs/toolkit";
export const s__counter = createSlice({
  name: "Counter",
  initialState: 0,
  reducers: {
    increment: (state, action) => state + 1,
    decrement: (state, action) => state - 1,
    increment_by_value: (state, action) => state + action.payload,
    decrement_by_value: (state, action) => state - action.payload,
  },
});
