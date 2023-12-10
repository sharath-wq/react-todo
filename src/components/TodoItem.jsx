import React from "react";

const TodoItem = ({ todo, handleCheck }) => {
    return (
        <div className={`todoItem ${todo.isCompleted ? "checked" : ""}`}>
            <span>{todo.todo}</span>
            <input onClick={() => handleCheck(todo.id)} checked={todo.isCompleted} type="checkbox" />
        </div>
    );
};

export default TodoItem;
