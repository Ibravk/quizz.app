import React from 'react'
import './Quizz.css'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { useState } from 'react'
import * as Api from '../../Api/Api'
import QuestionCard from '../../Components/QuestionsCard/QuestionCard';
import Modal from '../../Components/Modal/Modal'



const Quizz = () => {
  const {difficulty, amount} = useParams()
  const [questionsData, setQuestionsData] = useState([])
  const [score, setScore] = useState(0)
  const [count, setCount] = useState(0)
  const [modal, setModal] = useState(false)


  useEffect(() => {
    const getData = async() => {
      const data = await Api.fetchQuizData(difficulty, amount)
      setQuestionsData(data)

    }
    getData(); 
  }, [])
  
  console.log(questionsData, "questionsData");
  

  return (
    <div className='quizz'>

      {
      modal ?  <Modal score={score}/> :
      <QuestionCard   
      questionsData={questionsData}
      score= {score}
      setScore = {setScore}
      count = {count}
      setCount = {setCount}
      modal = {modal}
      setModal = {setModal}
       />
      } 
    </div>
  )
}

export default Quizz