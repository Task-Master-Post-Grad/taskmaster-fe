import React, { useState, useEffect } from 'react'
import { Card, Typography } from '@mui/material'

const TechQuestion = () => {
  const [tQuestions, setTQuestions] = useState(['How do you implement your error handling?'])
  const [dailyQuestion, setDailyQuestion] = useState('') 

  const randomizeTQuestion = () => {
    const question = tQuestions[Math.floor(Math.random()*tQuestions.length)]
    setDailyQuestion(question)
  }

  useEffect(() => {
    randomizeTQuestion()
  })

  return(
    <Card>
      <Typography>
        {dailyQuestion}
      </Typography>
    </Card>
    )
}

export default TechQuestion