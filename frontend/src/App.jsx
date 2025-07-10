import React, {useState, useEffect} from 'react';
import axios from 'axios';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import './App.css';

export default function App() {

    const [todos, setTodos] = useState([])
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchTodos = async () => {
            const response = await axios.get('http://localhost:8080/todos')
            setTodos(response.data)
            setLoading(false);
        }
        fetchTodos()
    }, [])

    // loading check AFTER useEffect runs
    if (loading) {
        return <h2 className="loading-message">Loading todos...</h2>;
    }

    return (
        <div className="app">
            <h1>Generic todo</h1>
            <TodoInput setTodos={setTodos} todos={todos}/>
            <TodoList todos={todos} setTodos={setTodos}/>
        </div>
    )
}
