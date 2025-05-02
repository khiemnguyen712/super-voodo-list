// src/components/TodoInput.js
import React, { useState } from 'react';
import axios from 'axios';

function TodoInput({ setTodos, todos }) {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleAddTodo = async () => {
        if (inputValue.trim()) {
            try {
                const response = await axios.post('http://localhost:8080/todos', { content: inputValue });
                // Assuming your backend returns the newly created todo with an 'id'
                setTodos([...todos, response.data]);
                setInputValue('');
            } catch (error) {
                console.error("Error adding todo:", error);
                // Handle error (e.g., display a message to the user)
            }
        }
    };

    return (
        <div className="todo-input">
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                placeholder="Add new todo"
            />
            <button onClick={handleAddTodo}>Add</button>
        </div>
    );
}

export default TodoInput;