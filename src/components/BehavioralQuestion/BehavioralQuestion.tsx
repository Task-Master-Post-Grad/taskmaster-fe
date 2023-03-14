import React, { useState, useEffect } from 'react'
import { Card, Typography } from '@mui/material'

const BehavioralQuestion = () => {
  const [bQuestions, setBQuestions] = useState(['What are you looking for in your next role?'])
  const [dailyQuestion, setDailyQuestion] = useState('')

  const randomizeBQuestion = () => {
    const question = bQuestions[Math.floor(Math.random()*bQuestions.length)]
    setDailyQuestion(question)
  }

  useEffect(() => {
    randomizeBQuestion()
  })

  return(
    <Card>
      <Typography>
        {dailyQuestion}
      </Typography>
    </Card>
    )
}

export default BehavioralQuestion