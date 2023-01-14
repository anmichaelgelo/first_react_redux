import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: []
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            return { items: [...state.items, action.payload] }
        },
        removeTodo: (state, action) => {
            let arr = [...state.items]
            let index = action.payload
            if(index > -1){
                arr.splice(index, 1)
                return { items: arr }
            }
        },
        clearTodos: () => {
            return { items: []}
        }
    }
})

export const {addTodo, removeTodo, clearTodos } = todoSlice.actions

export default todoSlice.reducer