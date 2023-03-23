import React, { useEffect } from 'react'
import { useQuery, gql, useMutation } from '@apollo/client'

const SAVED_ANSWERS = gql`
query SavedAnswers {
  user(id:1){
    userTQuestions {
      id
      userId
      tQuestionId
     	answer 
      status
      tQuestion {
        question
        qType
      }
    } 
    userBQuestions {
      id
      userId
      bQuestionId
     	answer 
      status
      bQuestion {
        question
      }
    } 

  }
}`

const SavedAnswers = () => {
  const { data, error, loading } = useQuery(SAVED_ANSWERS)
  console.log('DATA', data)
  return(
    <div>
      Saved Answers Page.
    </div>
  )
}

export default SavedAnswers


