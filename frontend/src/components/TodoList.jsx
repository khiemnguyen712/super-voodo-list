import React from 'react'
import axios from 'axios'

export default function TodoList({todos, setTodos}) {

    const handleDeleteTodo = async (id) => {
            await axios.delete(`http://localhost:8080/todos/${id}`)
            setTodos(todos.filter(todo => todo.id !== id))
    }

    return (
        <ul className="todo-list">
            {todos.map(todo => (
                <li>
                    <span>{todo.content}</span>
                    <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
                </li>
            ))}
        </ul>
    )
}
// Git test
console.log('This is on the main branch')
console.log('This is also on the main branch')