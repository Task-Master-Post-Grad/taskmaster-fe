import React, { useState } from 'react'
import { Modal, Box, TextField, CardActions, Button } from '@mui/material'
import { useQuery, gql, useMutation } from '@apollo/client'

const B_ANSWER = gql`
mutation createUserBQuestion ($userId: Int!, $bQuestionId: Int!, $answer: String!) {
  createUserBQuestion(input: {userId: $userId, bQuestionId: $bQuestionId, answer: $answer})
  {userBQuestion {
      id
      userId
      bQuestionId
      status
      answer
      bQuestion {
        question
      }
    }
  }
}`

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3
};

const AnswerModal = (props: any) => {
  const [ saveTheAnswer, {loading, error, data} ] = useMutation(B_ANSWER)
  const [answer, setAnswer] = useState('')

  const answerQuestion = async () => {
    const result = await saveTheAnswer({
      variables: {
        userId: 1,
        bQuestionId: props.id,
        answer: answer
      }
    })
  }

  return(
    <div className='modal-card'>
    <Modal open={props.open} onClose={props.closeModal} >
      <Box sx={style}>
      <Button onClick={props.closeModal} sx={{cursor: 'pointer'}}>🆇</Button>
      <TextField
          id="outlined-multiline-static"
          label="Answer Question"
          multiline
          maxRows={4}
          sx={{width: 350}}
          value={answer}
          onChange={event => setAnswer(event.target.value)}
        />
      <CardActions>
        <Button onClick={answerQuestion}>SAVE</Button>
      </CardActions>
      </Box>
    </Modal>
  </div>
  )
}

export default AnswerModal