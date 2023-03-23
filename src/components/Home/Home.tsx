import React, { useEffect } from 'react'
import { Container, Grid } from '@mui/material'
import ToDos from '../ToDosContainer/ToDos'
import BehavioralQuestion from '../BehavioralQuestion/BehavioralQuestion'
import TechChallenge from '../TechChallenge/TechChallenge'
import TechQuestion from '../TechQuestion/TechQuestion'
import { useQuery, gql, useMutation } from '@apollo/client'

const B_QUESTIONS = gql `
query BQuestions {
  bQuestions {
    id
    question
  }
}`

const T_QUESTIONS = gql `
query TQuestions {
  tQuestions {
    id
    question
  }
}
`

const Home = (props: any) => {
  const bQuestions = useQuery(B_QUESTIONS)
  const tQuestions = useQuery(T_QUESTIONS)

  return(
    <Container sx={{ py: 0, display: 'flex', alignItems: 'baseline'}} maxWidth="md">
    <ToDos todos={props.todos} addTodo={props.addTodo} removeFromList={props.removeFromList}/>
    <Grid container spacing={0} sx={{display: 'flex', flexDirection: 'column'}}>
      {bQuestions.data && <BehavioralQuestion bQuestions={bQuestions.data.bQuestions}/>}
      {tQuestions.data && <TechQuestion tQuestions={tQuestions.data.tQuestions}/>}
      <TechChallenge />
    </Grid>
</Container>
  )
}

export default Home