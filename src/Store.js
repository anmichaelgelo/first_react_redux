import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './features/counterSlice'
import todoReducer from './features/todoSlice'

export const Store = configureStore({
    reducer: {
        counter: counterReducer,
        todos: todoReducer
    }
})