import React, { useState } from 'react'
import { Modal, Box, TextField, CardActions, Button } from '@mui/material'

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
  return(
    <div className='modal-card'>
    <Modal open={props.open} onClose={props.closeModal} >
      <Box sx={style}>
      <Button onClick={props.closeModal} sx={{cursor: 'pointer'}}>🆇</Button>
      <TextField
          id="outlined-multiline-flexible"
          label="Answer Question"
          multiline
          maxRows={4}
          sx={{width: 350}}
        />
      <CardActions>
        <Button>SAVE</Button>
      </CardActions>
      </Box>
    </Modal>
  </div>
  )
}

export default AnswerModal