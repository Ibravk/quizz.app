import React from 'react';
import './Introduce.css';
import Dropdown from '../../Components/Dropdown/Dropdown';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Introduce = () => {

    const difficulty = ["easy", "medium", "hard"];
    const [difficultyChange, setDifficultyChange] = useState('');
    const navigate = useNavigate();
    const total_questions = 10;

    console.log(difficultyChange, "difficultyChange");

    const startquizz = () => {
        if (difficultyChange) {
            navigate(`/quizz/${difficultyChange}/${total_questions}`)
            
        }
    }
    
  return (
    <div className='introduce' >
        <div className='introduce-container'>
            <img src="https://images-platform.99static.com/HnADN15_994-Z93tt-hGBAoTLrI=/363x425:1555x1617/500x500/top/smart/99designs-contests-attachments/95/95890/attachment_95890421" alt="Logo" />

            <Dropdown data={difficulty} setDifficultyChange = {setDifficultyChange}  />
            <div onClick={startquizz} className='introduce-btn'>Commencer le quizz</div>
        </div>   
    </div>
  )
}

export default Introduce