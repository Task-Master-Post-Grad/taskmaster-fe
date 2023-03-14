import React, { useState, useEffect } from 'react'
import { Card, CardContent, Typography, CardActions, Button } from '@mui/material'

const TechQuestion = () => {
  const [tQuestions, setTQuestions] = useState(['How do you implement your error handling?', 'What is your process to test and find bugs in an application?'])
  const [dailyQuestion, setDailyQuestion] = useState('') 

  const randomizeTQuestion = () => {
    const question = tQuestions[Math.floor(Math.random()*tQuestions.length)]
    setDailyQuestion(question)
  }

  useEffect(() => {
    randomizeTQuestion()
  })

  return(
    <Card sx={{ minWidth: 275, minHeight: 200, margin: '1rem', padding: '1rem'}}>
      Daily Technical Interview Question
      <CardContent sx={{display: 'flex', alignItems: 'center'  }}>
        <Typography sx={{fontSize: '1.5rem'}}>
          {dailyQuestion}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={randomizeTQuestion}>Generate New Question</Button>
      </CardActions>
    </Card>
    )
}

export default TechQuestion