import TodoCard from "./TodoCard.jsx";

export default function TodoList(props) {
    const {todos} = props

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