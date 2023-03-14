import React, { useState } from 'react'
import { Card, CardActions, Button } from '@mui/material'

const TechChallenge = () => {
  const [tChallenge, setTChallenge] = useState('https://leetcode.com/problemset/all/')

  return(
    <Card>
      <CardActions>
          <Button href={tChallenge} target='_blank' size='small' variant="contained" component='a' color='primary'>Tech Challenge</Button>
      </CardActions>
    </Card>
    )
}

export default TechChallenge