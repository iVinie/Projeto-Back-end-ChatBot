import React, { useState, useEffect } from "react";

const questions = [
  {
    id: 1,
    question: "Qual é a capital da França?",
    options: ["Londres", "Paris", "Berlim"],
    answer: "Paris",
  },
  {
    id: 2,
    question: "Quem escreveu Dom Quixote?",
    options: ["Miguel de Cervantes", "William Shakespeare", "Jorge Luis Borges"],
    answer: "Miguel de Cervantes",
  },
  {
    id: 3,
    question: "Qual é o maior planeta do Sistema Solar?",
    options: ["Terra", "Júpiter", "Vênus"],
    answer: "Júpiter",
  },
  {
    id: 4,
    question: "Quem pintou a Mona Lisa?",
    options: ["Leonardo da Vinci", "Vincent van Gogh", "Pablo Picasso"],
    answer: "Leonardo da Vinci",
  },
  {
    id: 5,
    question: "Qual é o nome da mais alta montanha do mundo?",
    options: ["Monte Everest", "Monte Kilimanjaro", "Monte Aconcágua"],
    answer: "Monte Everest",
  },
];

function Estudo() {
  const [question, setQuestion] = useState({});
  const [answered, setAnswered] = useState(false);
  const [result, setResult] = useState("");

  const getRandomQuestion = () => {
    const randomIndex = Math.floor(Math.random() * questions.length);
    return questions[randomIndex];
  };

  const handleOptionClick = (selectedOption) => {
    if (selectedOption === question.answer) {
      setResult("Você acertou!");
    } else {
      setResult("Você errou!");
    }
    setAnswered(true);
  };

  useEffect(() => {
    const randomQuestion = getRandomQuestion();
    setQuestion(randomQuestion);
    setAnswered(false);
    setResult("");
  }, []);

  return (
    <div className="EstudoTeste">
      <h1>{question.question}</h1>
      <ul>
        {question.options.map((option, index) => (
          <li key={index} onClick={() => handleOptionClick(option)}>
            {option}
          </li>
        ))}
      </ul>
      {answered && <p>{result}</p>}
    </div>
  );
}

export default Estudo;
