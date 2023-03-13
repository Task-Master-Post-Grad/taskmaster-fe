import React, { useState } from 'react'
import Input from '@mui/material/Input';
import { Box, Button } from '@mui/material';

const ariaLabel = { 'aria-label': 'description' };

const Form = (props: any) => {
  const [newTodo, setNewTodo] = useState('')
  const updateTodos = (event: any) => {
    setNewTodo(event.currentTarget.value)
  }

  const addToTheList = () => {
    props.addTodo(newTodo)
    clearInput()
  }

  const clearInput = () => {
    setNewTodo('')
  }

  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1 },
      }}
      noValidate
      autoComplete="off"
      >
      <Input placeholder='Todos...' value={newTodo} inputProps={ariaLabel} onChange={(event) => updateTodos(event)}/>
      <Button onClick={addToTheList}>Add</Button>
    </Box>
  )
}

export default Form