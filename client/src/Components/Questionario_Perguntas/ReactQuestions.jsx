import React, { useState, useEffect } from 'react';
import '../../assets/css/ReactQuestions.css'
import Axios from 'axios'
function ReactQuestions() {
    const [questions, setQuestions] = useState([]);
    const [answers, setAnswers] = useState({
        q1: '',
        q2: '',
        q3: '',
        q4: '',
        q5: ''
    });
    useEffect(() => {
        Axios.get('http://localhost:3001/perguntas')
            .then(response => {
                setQuestions(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);
    let answerDB = []
    let answerUser = []
    questions.map((question) => {
        answerDB.push(question.resposta)
    })
    const handleAnswerChange = (question, answer) => {
        setAnswers(prevAnswers => ({
            ...prevAnswers,
            [question]: answer
        }));
    }
    const checkAnswers = () => {
        answerUser.push(answers.q1, answers.q2, answers.q3, answers.q4, answers.q5)
        let correctCount = 0;
        for (let i = 0; i < answerDB.length; i++) {
            if (answerDB[i] === answerUser[i]) {
                correctCount++
            }
        }
        if (correctCount === 5) {
            alert(`Parabéns! Você acertou todas as respostas! Sua note é : ${correctCount * 2}`);
        } else if (correctCount > 0) {
            alert(`Você acertou ${correctCount} respostas de 5. Sua note é : ${correctCount * 2}`);
        } else {
            alert('Que pena, você não acertou nenhuma resposta.');
        }
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        checkAnswers();
    };
    return (
        <div className='Questions typewriter' id='text'>
            {questions.map((question, index) => (
                <div > <h2>Pergunta {index+1}:</h2>
                    <p>{question.pergunta}</p>
                    <div className='labelRadio'>
                <span className='QuestionsType'>
                    <input type="radio" name={`q${index+1}`} value="A" checked={`${index+1}-pergunta` === 'A'} onChange={() => handleAnswerChange(`q${index+1}`, 'A')} />
                    <span>{question.alternativa1}</span>
                </span>
                <span className='QuestionsType'>
                    <input type="radio" name={`q${index+1}`} value="B" checked={`${index+1}-pergunta` === 'B'} onChange={() => handleAnswerChange(`q${index+1}`, 'B')} />
                    <span>{question.alternativa2}</span>
                </span>
                <span className='QuestionsType'>
                    <input type="radio" name={`q${index+1}`} value="C" checked={`${index+1}-pergunta` === 'C'} onChange={() => handleAnswerChange(`q${index+1}`, 'C')} />
                    <span>{question.alternativa3}</span>
                </span>
            </div>
                </div>
            ))}
            <button onClick={handleSubmit}>Verificar Respostas</button>
        </div>
    );
}
export default ReactQuestions;