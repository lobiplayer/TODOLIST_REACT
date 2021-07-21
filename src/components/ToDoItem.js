import React, { useState } from 'react'

function ToDoItem({ setTodos, todos }) {

    const [counter, setCounter] = useState(0)

    console.log(todos)
    const onRemove = id => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    const toggleDone = (todo) => {
        todo.done ? todo.done = false : todo.done = true;
        setCounter(counter + 1)

    }

    const todoTask = (todo) => {
        if (todo.done === false) {
            return <p>{todo.task}</p>
        }
        else {
            return <p style={{ textDecoration: "line-through" }}>{todo.task}</p>
        }
    }

    return (
        <div className="App">
            {console.log(todos)}
            {
                todos.map(todo => (
                    <div className='todo' key={todo.id} onClick={() => { toggleDone(todo) }}>
                        {todoTask(todo)}
                        <p>{todo.done}</p>
                        <button onClick={() => { onRemove(todo.id) }}>delete</button>
                    </div>

                )
                )
            }
        </div>
    );
}

export default ToDoItem;


// todo.done ? todo.done = false : todo.done = true } toggleDone(todo)

//<p className='todotask'>{todo.task}</p>