import React, { useState, useEffect } from 'react'
import { Container, Card, CardContent, Typography, CardActions, Button } from '@mui/material'
import AnswerModal from '../AnswerModal/AnswerModal'

const TechQuestion = () => {
  const [tQuestions, setTQuestions] = useState(['How do you implement your error handling?', 'What is your process to test and find bugs in an application?'])
  const [dailyQuestion, setDailyQuestion] = useState('') 
  const [open, setOpen] = useState(false)

  const openModal = () => {
    setOpen(true)
  }

  const closeModal = () => {
    setOpen(false)
  }

  const randomizeTQuestion = () => {
    const question = tQuestions[Math.floor(Math.random()*tQuestions.length)]
    setDailyQuestion(question)
  }

  useEffect(() => {
    randomizeTQuestion()
  })

  return(
    <Container>
      {open && <AnswerModal closeModal={closeModal} open={open} />}
    <Card sx={{ minWidth: 275, minHeight: 200, margin: '1rem', padding: '1rem', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      Daily Technical Interview Question
      <CardContent sx={{display: 'flex', alignItems: 'center'  }}>
        <Typography sx={{fontSize: '1.5rem'}}>
          {dailyQuestion}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={randomizeTQuestion} variant="contained">Generate New Question</Button>
        <Button onClick={openModal}>Answer Question</Button>
      </CardActions>
    </Card>
    </Container>
    )
}

export default TechQuestion