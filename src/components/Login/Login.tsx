import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Container, Card, Button, TextField, CardActions, IconButton,Typography, Toolbar, AppBar } from '@mui/material'

const style ={
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  minWidth: 275,
  maxWidth: 400,
  marginTop: '1rem',
  padding: '1rem'
}


const Login = (props: any) => {
  const navigate = useNavigate();
  const [user, setUser] = useState({})
  const [account, setAccount] = useState(true)
  const checkLogin = () => {
    props.login()
    setUser(props.profile)
    navigate("/home");
  }

  // const createAccount = () => {
  //   if(props.profile) {
  //     setAccount(true)
  //   }
  //   else {setAccount(false)}
  // }

  return(
    <div>
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
      {/* {props.profile ?  */}
    <Card sx={style}>
      {/* <TextField id="outlined"label="Username"/>
      <TextField id='outlined' label='Password'/> */}
      <CardActions>
        <Button variant="contained" onClick={checkLogin}>Login with Google</Button>
      </CardActions>
      {/* <CardActions>
        <Button onClick={createAccount}>Create Account</Button>
      </CardActions> */}
    </Card> 
    {/* : <Card sx={style}>
      <TextField id="outlined"label="Username"/>
      <TextField id='outlined' label="Email" />
      <TextField id='outlined' label='Password'/>
      <CardActions>
        <Button onClick={createAccount}>Create Account</Button>
      </CardActions> */}
    {/* </Card> */}
    {/* } */}
    </Container>
    </div>
  )
}

export default Login