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
        {/*  <h2>Pergunta 2:</h2>
            <p>O que é um componente no React?</p>
            <div className='labelRadio'>
                <span className='QuestionsType'>
                    <input type="radio" name="q2" value="A" checked={answers.q2 === 'A'} onChange={() => handleAnswerChange('q2', 'A')} />
                    <span>A. Uma função que retorna JSX</span>
                </span>
                <span className='QuestionsType'>
                    <input type="radio" name="q2" value="B" checked={answers.q2 === 'B'} onChange={() => handleAnswerChange('q2', 'B')} />
                    <span>B. Uma classe que implementa a interface Component</span>
                </span>
                <span className='QuestionsType'>
                    <input type="radio" name="q2" value="C" checked={answers.q2 === 'C'} onChange={() => handleAnswerChange('q2', 'C')} />
                    <span>C. Um objeto que representa um elemento da DOM</span>
                </span>
            </div>
            <h2>Pergunta 3:</h2>
            <p>Qual é a diferença entre state e props?</p>
            <div className='labelRadio'>
                <span className='QuestionsType'>
                    <input type="radio" name="q3" value="A" checked={answers.q3 === 'A'} onChange={() => handleAnswerChange('q3', 'A')} />
                    <span>A. State é imutável e props é mutável</span>
                </span>
                <span className='QuestionsType'>
                    <input type="radio" name="q3" value="B" checked={answers.q3 === 'B'} onChange={() => handleAnswerChange('q3', 'B')} />
                    <span>B. State é usado para passar dados entre componentes e props é usado para gerenciar o estado interno do componente</span>
                </span>
                <span className='QuestionsType'>
                    <input type="radio" name="q3" value="C" checked={answers.q3 === 'C'} onChange={() => handleAnswerChange('q3', 'C')} />
                    <span>C. State é usado para gerenciar o estado interno do componente e props é usado para passar dados entre componentes</span>
                </span>
            </div>
            <h2>Pergunta 4:</h2>
            <p>O que é JSX?</p>
            <div className='labelRadio'>
                <span className='QuestionsType'>
                    <input type="radio" name="q4" value="A" checked={answers.q4 === 'A'} onChange={() => handleAnswerChange('q4', 'A')} />
                    <span>A. Uma sintaxe para descrever objetos em JavaScript</span>
                </span>
                <span className='QuestionsType'>
                    <input type="radio" name="q4" value="B" checked={answers.q4 === 'B'} onChange={() => handleAnswerChange('q4', 'B')} />
                    <span>B. Uma sintaxe para descrever elementos da DOM em JavaScript</span>
                </span>
                <span className='QuestionsType'>
                    <input type="radio" name="q4" value="C" checked={answers.q4 === 'C'} onChange={() => handleAnswerChange('q4', 'C')} />
                    <span>C. Um método para renderizar componentes em React</span>
                </span>
            </div>
            <h2>Pergunta 5:</h2>
            <p>O que é um hook em React?</p>
            <div className='labelRadio'>
                <span className='QuestionsType'>
                    <input type="radio" name="q5" value="A" checked={answers.q5 === 'A'} onChange={() => handleAnswerChange('q5', 'A')} />
                    <span>A. Uma função que permite utilizar o estado e outros recursos do React em componentes funcionais</span>
                </span>
                <span className='QuestionsType'>
                    <input type="radio" name="q5" value="B" checked={answers.q5 === 'B'} onChange={() => handleAnswerChange('q5', 'B')} />
                    <span>B. Uma classe que implementa a interface Component em componentes de classe</span>
                </span>
                <span className='QuestionsType'>
                    <input type="radio" name="q5" value="C" checked={answers.q5 === 'C'} onChange={() => handleAnswerChange('q5', 'C')} />
                    <span>C. Uma sintaxe para renderizar componentes em JavaScript puro</span>
                </span>
            </div> */}
            <button onClick={handleSubmit}>Verificar Respostas</button>
        </div>
    );
}
export default ReactQuestions;