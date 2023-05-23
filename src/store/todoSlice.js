// src/store/todoSlice.js
import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todo',
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    },
    toggleStatus: (state, action) => {
      const todo = state.find((item) => item.id === action.payload);
      if (todo) {
        todo.status = todo.status === 'pending' ? 'complete' : 'pending';
      }
    },
  },
});

export const { addTodo, toggleStatus } = todoSlice.actions;
export default todoSlice.reducer;
