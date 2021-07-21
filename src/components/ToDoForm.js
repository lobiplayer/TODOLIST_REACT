import React, {useState} from 'react'

function ToDoForm({setTodos, todos}) {

    


    const [text, setText] = useState('')

    const handleSubmit = e => {
        e.preventDefault()
        setTodos([...todos, {
            done: false,
            id: todos[todos.length -1].id +1,
            task: text}])
        console.log(todos)
    }

    const handleInput = e => {
        setText(e.target.value)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input onChange={handleInput} value={text} type="text" />
            <input type="submit" value="Add Task" />
        </form>
    )

}

export default ToDoForm;