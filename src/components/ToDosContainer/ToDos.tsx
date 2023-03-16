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
        removeFromList={props.removeFromList}
      />
    )
  })

  return(
    <Container>
      <Card style={{minWidth: 275, minHeight: 250, display: 'flex', flexDirection: 'column'}}>
        <Form addTodo={props.addTodo}/>
        <h2>Todos: </h2>
        <FormGroup>
          {todosList}
        </FormGroup>
      </Card>
    </Container>
  )
}

export default ToDos