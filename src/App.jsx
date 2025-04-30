import './App.css'
import TodoInput from "./components/TodoInput.jsx";
import TodoList from "./components/TodoList.jsx";
import {useState} from "react";

function App() {
    const [todos, setTodos] = useState(() => [])

    function handleAddTodos(newTodo) {
        const newTodoList = [...todos, newTodo]
        setTodos(newTodoList)
    }

    return (
        <>
            <TodoInput handleAddTodos={handleAddTodos}/>
            <TodoList todos={todos}/>
        </>
    )
}

export default App
