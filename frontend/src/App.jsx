import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import './App.css';

function App() {
    const [todos, setTodos] = useState([])
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchTodo = async () => {
            try {
                const response = await axios.get('http://localhost:8080/todos')
                setTodo(response.data)
                setLoading(false);
            }
        }
    })
}