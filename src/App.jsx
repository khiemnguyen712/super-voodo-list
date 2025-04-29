import './App.css'
import TodoCard from "./components/TodoCard.jsx";
import TodoInput from "./components/TodoInput.jsx";
import TodoList from "./components/TodoList.jsx";

function App() {

    let todos = ["Get a strand of hair from a virgin", "Get a vile of Garmen frog's blood", "Pick up the kids"]

    return (
        <>
            <TodoInput/>
            <TodoList todos={todos}/>
        </>
    )
}

export default App
