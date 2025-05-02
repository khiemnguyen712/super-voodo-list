import React from 'react'
import axios from 'axios'
import TodoItem from './TodoItem.jsx'

export default function TodoList({todos, setTodos}) {
    const handleDeleteTodo = async (id) => {
        try {
            await axios.delete(`http://localhost:8080/${id}`)
            setTodos(todos.filter(todo => todo.id !== id))
        } catch (error) {
            console.error("Error deleting todo:", error)
        }
    }

    return (
        <ul className="todo-list">
            {todos.map(todo => (
                <TodoItem key={todo.id} todo={todo} onDelete={handleDeleteTodo}/>
            ))}
        </ul>
    )
}