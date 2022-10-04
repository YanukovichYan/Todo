import React, {useState} from 'react';
import TodoItem from "./item/TodoItem";
import CreateTodoField from "./create-todo-field/CreateTodoField";

const todoArray = [
    {
        id: 1,
        title: 'Finish the essay collaboration',
        isCompleted: false,
    },
    {
        id: 2,
        title: 'Read next chapter of the book',
        isCompleted: false,
    },
    {
        id: 3,
        title: 'Send the finished assignment',
        isCompleted: false,
    },
]


const Home = () => {

    const [todos, setTodos] = useState(todoArray)

    const changeTodo = (id) => {
        const copy = [...todoArray]
        const currentItem = copy.find(item => {
            return item.id === id
        })
        currentItem.isCompleted = !currentItem.isCompleted
        setTodos(copy)
    }

    const removeTodo = (id) => {
        setTodos([...todos].filter(item => {
                return item.id !== id
            })
        )
    }


    // window.addTodo = addTodo
    return (
        <div className="text-white w-1/2 mx-auto">
            <h1 className={`text-2xl font-bold text-center mb-10`}>ToDo</h1>
            {todos.map((todo, index) => {
                return <TodoItem todo={todo} key={index} index={index} changeTodo={changeTodo} removeTodo={removeTodo}/>
            })}
            <CreateTodoField todos={todos} setTodos={setTodos}/>
        </div>
    );
};

export default Home;