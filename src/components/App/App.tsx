import React, { useState } from 'react';
import './App.css';
import ToDos from '../ToDosContainer/ToDos';

function App() {
  const [todos, setTodos] = useState<any>(['Job Hunt'])

  const addTodo = (todo: any) => {
    setTodos([...todos, todo])
  }
  return (
    <div className="App">
      <h1>TaskMaster</h1>
      <ToDos todos={todos} addTodo={addTodo}/>
    </div>
  );
}

export default App;
