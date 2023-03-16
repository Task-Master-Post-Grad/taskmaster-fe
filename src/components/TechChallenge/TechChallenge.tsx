import React, { useState } from 'react'
import { Container, Card, CardActions, Button } from '@mui/material'
import AnswerModal from '../AnswerModal/AnswerModal'

const TechChallenge = () => {
  const [tChallenge, setTChallenge] = useState('https://leetcode.com/problemset/all/')
  const [open, setOpen] = useState(false)

  const openModal = () => {
    setOpen(true)
  }

  const closeModal = () => {
    setOpen(false)
  }

  return(
    <Container>
       {open && <AnswerModal closeModal={closeModal} open={open} />}
    <Card sx={{ minWidth: 275, minHeight: 100, margin: '1rem', padding: '1rem', display: 'flex', alignItems: 'center', flexDirection: 'column', justifyContent: 'space-around'}}>
      Daily Technical Challenge
      <CardActions>
          <Button href={tChallenge} target='_blank' size='small' variant="contained" component='a' color='primary'>Tech Challenge</Button>
          <Button onClick={openModal}>Answer Question</Button>
      </CardActions>
    </Card>
    </Container>
    )
}

export default TechChallenge