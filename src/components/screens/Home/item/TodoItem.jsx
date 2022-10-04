import React from 'react';
import Check from "./Check";
import {BsTrash} from "react-icons/bs";

const TodoItem = ({todo, changeTodo, removeTodo, index}) => {
    return (
        <div
            className={`flex items-center justify-between mb-4 rounded-2xl bg-zinc-800 p-5 w-full`}
        >
            <button
                onClick={() => changeTodo(todo.id)}
                className={`flex items-center w-full`}>
                <Check isCompleted={todo.isCompleted}/>
                <span className={`${todo.isCompleted ? 'line-through' : null}`}>{todo.title}</span>
            </button>
            <button onClick={() => removeTodo(todo.id)}>
                <BsTrash size={22}
                         className={`text-gray-600 hover:text-pink-400 transition-colors ease-in-out duration-300`}/>
            </button>
        </div>
    );
};

export default TodoItem;