import React from 'react'
import { Container, Grid } from '@mui/material'
import ToDos from '../ToDosContainer/ToDos'
import BehavioralQuestion from '../BehavioralQuestion/BehavioralQuestion'
import TechChallenge from '../TechChallenge/TechChallenge'
import TechQuestion from '../TechQuestion/TechQuestion'

const Home = (props: any) => {
  return(
    <Container sx={{ py: 0, display: 'flex', alignItems: 'baseline'}} maxWidth="md">
    <ToDos todos={props.todos} addTodo={props.addTodo} removeFromList={props.removeFromList}/>
    <Grid container spacing={0} sx={{display: 'flex', flexDirection: 'column'}}>
      <BehavioralQuestion />
      <TechQuestion />
      <TechChallenge />
    </Grid>
</Container>
  )
}

export default Home