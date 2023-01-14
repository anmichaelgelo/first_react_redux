import React, { useState, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addTodo, removeTodo, clearTodos } from '../features/todoSlice'

export default function TodoList(){
    const items = useSelector(state => state.todos.items)
    const dispatch = useDispatch()
    const [ input, setInput ] = useState('')
    const inputRef = useRef()

    const submitTodo = (e) => {
        e.preventDefault()
        dispatch(addTodo(input))
    }

    const renderItems = items.map((item, index) => {
        // console.log(index)
        return(
            <li key={index}>
                <span>{item}</span>
                <span style={{cursor: 'pointer'}} onClick={() => dispatch(removeTodo(index))}>&#10005;</span>
            </li>
        )
    })

    const clearList = () => {
        let refs = inputRef.current.value = ''
        dispatch(clearTodos())
        setInput(refs)
    }

    return (
        <>
            <form onSubmit={(e) => submitTodo(e)}>
                <input type="text" onChange={(e) => setInput(e.target.value)} ref={inputRef} />
                <button type='submit'>Add List</button>
            </form>

            <ul>{renderItems}</ul>

            <button onClick={() => clearList()}>Clear</button>
        </>
    )
}