export default function TodoCard(props) {
    return (
        <li className="todoItem">
            {props.children}
            <div className="actionsContainer">
                <i className="fa-solid fa-hand-sparkles"></i>
                <i className="fa-solid fa-skull"></i>
            </div>
        </li>
    )
}