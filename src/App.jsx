import './App.css'
import TodoInput from "./components/TodoInput.jsx";
import TodoList from "./components/TodoList.jsx";
import {useState} from "react";

function App() {
    const [todos, setTodos] = useState([])

    function handleAddTodos(newTodo) {
        const newTodoList = [...todos, newTodo]
        setTodos(newTodoList)
    }

    function handleDeleteTodos(index) {
        const newTodoList = todos.filter((todo, todoIndex) => {
            return todoIndex !== index
        })

        setTodos(newTodoList)
    }

    function handleEditTodos(index) {

    }

    return (
        <>
            <TodoInput handleAddTodos={handleAddTodos}/>
            <TodoList handleDeleteTodos={handleDeleteTodos} todos={todos}/>
        </>
    )
}

export default App
