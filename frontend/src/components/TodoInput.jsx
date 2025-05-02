import React, {useState} from 'react'
import axios from 'axios'

export default function TodoInput({todos, setTodos}) {
    const [inputValue, setInputValue] = useState('')

    const handleInputChange = (event) => {
        setInputValue(event.target.value)
    }

    const handleAddTodo = async () => {
        if (inputValue.trim()) {
            try {
                const response = await axios.post('http://localhost:8080/todos', {content: inputValue})

                setTodos([...todos], response.data)
            } catch (error) {
                console.error("Error adding todo: ", error)
            }
        }

        return (
            <div className="todo-input">
                <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                placeholder="Whisper your wicked whim..."
                />
                <button onClick={handleAddTodo}>
                    Inscribe
                </button>
            </div>
        )
    }
}