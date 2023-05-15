import React, { useState, useEffect, Fragment } from 'react';
import '../../assets/css/ReactQuestions.css'
import Axios from 'axios'
import { useParams } from 'react-router-dom';
function ReactQuestions() {
    let {cpf} = useParams()
    let {provaName} = useParams()
    let{name} = useParams()
    let{isAdmin} = useParams()
    const [questions, setQuestions] = useState([]);
    const [answers, setAnswers] = useState({
        q1: '',
        q2: '',
        q3: '',
        q4: '',
        q5: '',
        q6: '',
        q7: '',
        q8: '',
        q9: '',
        q10: ''
    });
    useEffect(() => {
        setTimeout(() =>{
            handleSubmit()
        }, 450000)
    }, []);
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
        answerUser.push(answers.q1, answers.q2, answers.q3, answers.q4, answers.q5, answers.q6, answers.q7, answers.q8, answers.q9, answers.q10)
        let correctCount = 0;
        for (let i = 0; i < answerDB.length; i++) {
            if (answerDB[i] === answerUser[i]) {
                correctCount++
            }
        }
        Axios.post("http://localhost:3001/save", {
            name: name,
            valor: correctCount,
            user_cpf: cpf,
            disciplina_nome: provaName
        }).then((response) => {
            if (correctCount === 10) {
                alert(`Parabéns! Você acertou todas as respostas! Sua note é : ${correctCount}`);
            } else if (correctCount > 0) {
                alert(`Você acertou ${correctCount} respostas de 10. Sua note é : ${correctCount}`);
            } else {
                alert('Que pena, você não acertou nenhuma resposta.');
            }
        })
            .catch((error) => {
                alert("VOCÊ JÁ FEZ A PROVA, SEU SAFADO")
            })
    }
    const handleSubmit = (event) => {
        checkAnswers();
        setTimeout(()=>{
            alert('Finalizando prova...')
        },2000)
        setTimeout(()=>{
            window.location.href = `http://localhost:3000/chat/${cpf}/${name}/back-end/${isAdmin}`;
        }, 5000)
    };
    return (
        <div className='Questions typewriter radio-container' id='text'>
            {questions.map((question, index) => (
                <Fragment >
                    <p>{`${(index + 1)}- ${question.pergunta}`}</p>
                    <div className='labelRadio'>
                        <span className='QuestionsType'>
                            <input type="radio" name={`q${index + 1}`} value="a" onChange={() => handleAnswerChange(`q${index + 1}`, 'a')} />
                            <span>{question.alternativa1}</span>
                        </span>
                        <span className='QuestionsType'>
                            <input type="radio" name={`q${index + 1}`} value="b" onChange={() => handleAnswerChange(`q${index + 1}`, 'b')} />
                            <span>{question.alternativa2}</span>
                        </span>
                        <span className='QuestionsType'>
                            <input type="radio" name={`q${index + 1}`} value="c" onChange={() => handleAnswerChange(`q${index + 1}`, 'c')} />
                            <span>{question.alternativa3}</span>
                        </span>
                        <span className='QuestionsType'>
                            <input type="radio" name={`q${index + 1}`} value="d" onChange={() => handleAnswerChange(`q${index + 1}`, 'd')} />
                            <span>{question.alternativa4}</span>
                        </span>
                        <span className='QuestionsType'>
                            <input type="radio" name={`q${index + 1}`} value="e" onChange={() => handleAnswerChange(`q${index + 1}`, 'e')} />
                            <span>{question.alternativa5}</span>
                        </span>
                    </div>
                </Fragment>
            ))}
            <button className='btn_verifique' onClick={handleSubmit}>Verificar Respostas</button>
        </div>
    );
}
export default ReactQuestions;