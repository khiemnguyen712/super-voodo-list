export default function TodoCard(props) {
    const {children, handleDeleteTodos, index} = props

    return (
        <li className="todoItem">
            {children}
            <div className="actionsContainer">
                <button>
                    <i className="fa-solid fa-hand-sparkles"></i>
                </button>
                <button onClick={() => {handleDeleteTodos(index)}}>
                    <i className="fa-solid fa-skull"></i>
                </button>
            </div>
        </li>
    )
}