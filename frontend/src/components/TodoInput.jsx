import React, {useState} from "react";
import axios from 'axios';

export default function TodoInput(props) {
    const {handleAddTodos, todoValue, setTodoValue} = props

    return (
        <header>
            <input value={todoValue} onChange={(e) => {
                setTodoValue(e.target.value)
            }} placeholder="Whisper your wicked whim..."/>

            <button onClick={() => {
                handleAddTodos(todoValue)
                setTodoValue('')
            }}>
                Inscribe
            </button>
        </header>
    )
}