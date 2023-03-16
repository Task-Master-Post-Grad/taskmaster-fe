import React, { useState } from 'react';
import './App.css';
import NavBar from '../NavBar/NavBar';
import Home from '../Home/Home';
import { Routes, Route, useLocation } from 'react-router-dom';

function App() {
  const [todos, setTodos] = useState<any>(['Job Hunt'])
  const location = useLocation()

  const addTodo = (todo: any) => {
    setTodos([...todos, todo])
  }

  const removeFromList = (todo: any) => {
    const unfinishedTodos = todos.filter((item: any) => item !== todo)
    console.log(unfinishedTodos)
    setTodos(unfinishedTodos)
  }

  return (
    <div className="App">
      {location.pathname !== '/' && <NavBar />}
      <Routes>
        <Route path='/' element={<h1>Login Page.</h1>} />
        <Route path='/home' element={<Home todos={todos} addTodo={addTodo} removeFromList={removeFromList}/>}/>
        <Route path='/answers' element={<h2>saved answers</h2>} />
      </Routes>
    </div>
  );
}

export default App;
