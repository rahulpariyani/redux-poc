
import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchDummyTodos = createAsyncThunk(
  'todo/dummyTodos',
   async(payload, thunkAPI) => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos')
    return response.data
  }
)
export const s__todo = createSlice({
  name: "Todo",
  initialState: [],
  reducers: {
    todo_add: (state, action) => [...state, action.payload],
    todo_delete: (state, action) => {
            const { index } = action.payload;
            state = [...state.splice(index, 1)];
          },
    todo_toggle: (state, action)=> {
            const { index, isCompleted } = action.payload;
            state = [...state, (state[index].isCompleted = isCompleted)];
          },
  },
  extraReducers: {
    [fetchDummyTodos.fulfilled]: (state, action) => [...state,...action.payload]
  },
});
