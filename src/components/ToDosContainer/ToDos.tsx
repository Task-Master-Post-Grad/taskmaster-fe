import React from 'react'
import Item from '../Item/Item'
import { Container, Card, FormGroup, FormControlLabel } from '@mui/material';
import Form from '../Form/Form';

const ToDos: React.FC<any> = (props) => {

  const todosList = props.todos.map((item: any, index: number) => {
    return(
      <Item 
        key={index}
        name={item}
      />
    )
  })

  return(
    <Container>
      <Form addTodo={props.addTodo}/>
      <h2>Todos: </h2>
      <FormGroup>
        {todosList}
      </FormGroup>
    </Container>
  )
}

export default ToDos