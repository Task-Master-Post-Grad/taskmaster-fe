import React, { useState, useEffect } from 'react'
import { Card, Typography, CardContent, CardActions, Button } from '@mui/material'

const BehavioralQuestion = () => {
  const [bQuestions, setBQuestions] = useState(['What are you looking for in your next role?', 'What is the most challenging aspect of your current project?'])
  const [dailyQuestion, setDailyQuestion] = useState('')

  const randomizeBQuestion = () => {
    const question = bQuestions[Math.floor(Math.random()*bQuestions.length)]
    setDailyQuestion(question)
  }

  useEffect(() => {
    randomizeBQuestion()
  })

  return(
    <Card sx={{ minWidth: 275, minHeight: 200, margin: '1rem', padding: '1rem'}}>
      Daily Behavioral Interview Question
      <CardContent sx={{display: 'flex', alignItems: 'center'}}>
        <Typography sx={{fontSize: '1.5rem'}}>
          {dailyQuestion}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={randomizeBQuestion}>Generate New Question</Button>
      </CardActions>
    </Card>
    )
}

export default BehavioralQuestion