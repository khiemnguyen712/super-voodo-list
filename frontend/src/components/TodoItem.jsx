// src/components/TodoItem.js
import React from 'react';

export default function TodoItem({ todo, onDelete }) {
    return (
        <li>
            <span>{todo.content}</span>
            <button onClick={() => onDelete(todo.id)}>Delete</button>
        </li>
    );
}

export default TodoItem;