import React from 'react'
import axios from 'axios'
import TodoItem from './TodoItem.jsx'

export default function TodoList({todos, setTodos}) {
    const handleDeleteTodo = async (id) => {
            await axios.delete(`http://localhost:8080/todos/${id}`)
            setTodos(todos.filter(todo => todo.id !== id))
    }

    return (
        <ul className="todo-list">
            {todos.map(todo => (
                <TodoItem key={todo.id} todo={todo} onDelete={handleDeleteTodo}/>
            ))}
        </ul>
    )
}