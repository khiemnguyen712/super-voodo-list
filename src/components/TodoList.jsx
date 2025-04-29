export default function TodoList() {

    let todos = ["Get a strand of hair from a virgin", "Get a vile of Garmen frog's blood", "Pick up the kids"]

    return (
        <ul className="main">
            {todos.map((todo, index) =>
            <li className="todoItem" key={index}>
                {todo}
            </li>)}
        </ul>
    )
}