import TodoCard from "./TodoCard.jsx";

export default function TodoList() {

    let todos = ["Get a strand of hair from a virgin", "Get a vile of Garmen frog's blood", "Pick up the kids"]

    return (
        <ul className="main">
            {todos.map((todo, index) =>
                <TodoCard key={index} content={todo}>
                    <p>{todo}</p>
                </TodoCard>
            )}
        </ul>
    )
}