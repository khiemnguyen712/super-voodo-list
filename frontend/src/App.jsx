import React, {useState, useEffect} from 'react';
import axios from 'axios';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import './App.css';

export default function App() {
    const [todos, setTodos] = useState([])
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchTodos = async () => {
            try {
                const response = await axios.get('http://localhost:8080/todos')
                setTodos(response.data)
                setLoading(false);
            } catch (error) {
                setError(error.message || 'Failed to fetch todos');
                setLoading(false);
                console.error("Error fetching todos: ", error)
            }
        }
        fetchTodos()
    }, [])

    if (loading) {
        return <div>Loading todos...</div>;
    }
    if (error) {
        return <div>Error fetching todos: {error}</div>
    }

    return (
        <div className="app">
            <h1>My Todo List</h1>
            <TodoInput setTodos={setTodos} todos={todos}/>
            <TodoList todos={todos} setTodos={setTodos}/>
        </div>
    )
}