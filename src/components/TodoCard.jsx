export default function TodoCard(props) {
    const {children, handleDeleteTodos, handleEditTodos, index} = props

    return (
        <li className="todoItem">
            {children}
            <div className="actionsContainer">
                <button onClick={() => {handleEditTodos(index)}}>
                    <i className="fa-solid fa-hand-sparkles"></i>
                </button>
                <button onClick={() => {handleDeleteTodos(index)}}>
                    <i className="fa-solid fa-skull"></i>
                </button>
            </div>
        </li>
    )
}