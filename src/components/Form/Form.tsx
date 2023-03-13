import React, { useState } from 'react'
import Input from '@mui/material/Input';
import { Box } from '@mui/material';

const ariaLabel = { 'aria-label': 'description' };

const Form = (props: any) => {
  const [newTodo, setNewTodo] = useState('')
  const updateTodos = (event: any) => {
    setNewTodo(event.currentTarget.value)
    props.addTodo(newTodo)
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
      <Input placeholder='Add Todo' value={newTodo} inputProps={ariaLabel} onChange={(event) => updateTodos(event)}/>
    </Box>
  )
}

export default Form