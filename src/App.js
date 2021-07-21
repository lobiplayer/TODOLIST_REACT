import React, {useState} from 'react'
import './App.css';
import ToDoForm from './components/ToDoForm'
import ToDoItem from './components/ToDoItem'

function App() {

  const [todos, setTodos] = useState(
    [
      { id: 1, task: 'Walk the dog', done: false },
      { id: 2, task: 'Water the flower', done: true }
    ]
  )


  return (
    <div className="App">
      <ToDoItem setTodos={setTodos} todos={todos} />
      <ToDoForm setTodos={setTodos} todos={todos} />
    </div>
  );
}

export default App;
