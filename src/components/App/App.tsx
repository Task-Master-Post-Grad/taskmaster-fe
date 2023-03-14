import React, { useState } from 'react';
import './App.css';
import ToDos from '../ToDosContainer/ToDos';
import BehavioralQuestion from '../BehavioralQuestion/BehavioralQuestion';
import TechChallenge from '../TechChallenge/TechChallenge';
import TechQuestion from '../TechQuestion/TechQuestion';
import { Container } from '@mui/system';
import { Grid } from '@mui/material';

function App() {
  const [todos, setTodos] = useState<any>(['Job Hunt'])

  const addTodo = (todo: any) => {
    setTodos([...todos, todo])
  }
  return (
    <div className="App">
      <h1 style={{fontSize: '3rem'}}>Task Master</h1>
      <Container sx={{ py: 0, display: 'flex', alignItems: 'baseline'}} maxWidth="md">
          <ToDos todos={todos} addTodo={addTodo}/>
          <Grid container spacing={0} sx={{display: 'flex', flexDirection: 'column'}}>
            <BehavioralQuestion />
            <TechQuestion />
            <TechChallenge />
          </Grid>
      </Container>
    </div>
  );
}

export default App;
