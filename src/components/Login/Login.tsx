import React from 'react'
import { Container, Card, Button, TextField, CardActions } from '@mui/material'
import { IconButton,Typography, Toolbar, Box, AppBar } from '@mui/material';

const style ={
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  minWidth: 275,
  maxWidth: 400,
  marginTop: '1rem',
  padding: '1rem'
}

const Login = () => {
  return(
    <Container sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <AppBar position="static">
      <Toolbar>
          <IconButton
            size="large"
            edge="start"
            aria-label="menu"
            sx={{ mr: 4 }}
          />
      </Toolbar>
      <Typography variant="h1" component="div" sx={{ flexGrow: 1 }}>
            Task Master
      </Typography>
      </AppBar>
    <Card sx={style}>
      <TextField   id="outlined"label="Username"/>
      <TextField id='outlined' label='Password'/>
      <CardActions>
        <Button variant="contained">Login</Button>
      </CardActions>
    </Card>
    </Container>
  )
}

export default Login