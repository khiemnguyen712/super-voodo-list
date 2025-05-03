// src/components/TodoInput.js
import React, {useState} from 'react';
import axios from 'axios';

function TodoInput({setTodos, todos}) {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleAddTodo = async () => {
        const response = await axios.post('http://localhost:8080/todos', {content: inputValue});
        setTodos([...todos, response.data]);
        setInputValue('');
    }


    return (
        <div className="todo-input">
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                placeholder="Whatever..."
            />
            <button onClick={handleAddTodo}>Add</button>
        </div>
    );
}

export default TodoInput;