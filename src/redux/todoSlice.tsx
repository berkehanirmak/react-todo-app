import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { TodoInitialState, TodoType } from '../types/Types'

const initialState: TodoInitialState = {
  todos: [],
  searchQuery: '', 
  filterByCompleted: null, 
}

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    createTodo: (state: TodoInitialState, action: PayloadAction<TodoType>) => {
      state.todos = [action.payload, ...state.todos]
    },
    removeTodoById: (state: TodoInitialState, action: PayloadAction<number>) => {
      state.todos = [...state.todos.filter((todo: TodoType) => todo.id !== action.payload)]
    },
    updateTodoById: (state: TodoInitialState, action: PayloadAction<TodoType>) => {
      state.todos = [...state.todos.map((todo: TodoType) => todo.id !== action.payload.id ? todo : action.payload)]
    },
    setSearchQuery: (state: TodoInitialState, action: PayloadAction<string>) => {
      state.searchQuery = action.payload; 
    },
    setFilterByCompleted: (state: TodoInitialState, action: PayloadAction<boolean | null>) => {
      state.filterByCompleted = action.payload; 
    }
  },
})

export const { createTodo, removeTodoById, updateTodoById, setSearchQuery, setFilterByCompleted } = todoSlice.actions

export default todoSlice.reducer
