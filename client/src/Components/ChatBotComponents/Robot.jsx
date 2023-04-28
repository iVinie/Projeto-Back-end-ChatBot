import React, { useEffect, useRef, useState } from 'react';
import roboJpg from '../../assets/img/robô.jpg';
import roboGif from '../../assets/img/robô.gif';
import { FaJenkins, FaReact, FaStackOverflow, FaNodeJs } from "react-icons/fa";
import audioFile from '../../assets/audio/audio.mp3'
import audioFilelanguages from '../../assets/audio/audioLinguagensUtilizadas.mp3'
import { typeWriter } from '../../assets/js/typeWriter';
import '../../assets/css/ChatBot.css'
import '../../assets/css/responsive.css'
import ReactQuestions from '../Questionario_Perguntas/ReactQuestions.jsx';
import Axios from 'axios'
import { useParams } from 'react-router-dom'
function Robot() {
  let { cpf } = useParams()
  let { name } = useParams()
  const [texto, setTexto] = useState('Ola! Seja bem vindo a prova de back-end');
  const MaquinaDeEscrever = useRef(null);
  useEffect(() => {
    Axios.post("http://localhost:3001/autenticacao", {
      name: name,
      cpf: cpf
    }).then((res) => {
      if(res.status === 200){
        console.log('Sucesso')
      }else{
        window.location.href = `http://localhost:3000`;
      }
    })
      .catch((res) => {
        window.location.href = `http://localhost:3000`;
      })
  })
  useEffect(() => {
    typeWriter(MaquinaDeEscrever.current, texto);
  }, [texto]);
  const creatorAudio = new Audio(audioFile);
  const creator = () => {
    setChatMessage('chatMessageV');
    setChatHidden('chatMessageHidden');
    creatorAudio.play();
    setTexto('ProvaBot: Assuero Mota Rei da persia(irã) e \nVinicius Junior Jogador do real-madrid ambos so programam pra distrair...');
    setBotaoClicado(true);
    setImgRb('roboGif');
    setTimeout(() => {
      setImgRb('roboJpg');
    }, 6500)
    setTimeout(() => {
      setBotaoClicado(false);
    }, 7200)
  }
  const frases = [
    'ProvaBOT: Tudo pode dar errado se você tentar então pra que tentar.',
    'ProvaBOT: é so uma fase ruim logo vai piorar.',
  ];
  const msg = () => {
    setChatMessage('chatMessageV');
    setChatHidden('chatMessageHidden');
    const indice = Math.floor(Math.random() * frases.length);
    setTexto(frases[indice]);
    setBotaoClicado(true);
    setImgRb('roboGif');
    setTimeout(() => {
      setImgRb('roboJpg');
    }, 4500)
    setTimeout(() => {
      setBotaoClicado(false);
    }, 5000)
  };
  const LinguagensAudio = new Audio(audioFilelanguages)
  const project = () => {
    setChatMessage('chatMessageV');
    setChatHidden('chatMessageHidden');
    LinguagensAudio.play();
    setTexto('ProvaBot: As linguagens utilizadas nesse projeto foram: Biblioteca React, TailWind, MySQL, JavaScript, Css e Node.JS');
    setBotaoClicado(true);
    setImgRb('roboGif');
    setTimeout(() => {
      setImgRb('roboJpg');
    }, 7100)
    setTimeout(() => {
      setBotaoClicado(false);
    }, 7500)
  }
  const [questionnaire, setQuestionnaire] = useState(null);
  const [chatMessage, setChatMessage] = useState('chatMessageV');
  const [chatHidden, setChatHidden] = useState('chatMessageHidden');
  const prova = () => {
    Axios.post("http://localhost:3001/verifique", {
      cpf_user: cpf
    }).then(() => {
      setQuestionnaire(<ReactQuestions />);
      setChatMessage('chatMessageHidden');
      setChatHidden('chatMessageV')
    })
      .catch(() => {
        alert("VOCÊ JÁ FEZ A PROVA, SEU SAFADO")
      })
  }
  const [botaoClicado, setBotaoClicado] = useState(false);
  const [imgRb, setImgRb] = useState('roboJpg');
  const [theme, setTheme] = useState("light");
  function handleThemeChange() {
    alert("Parabéns! Você encontrou um Easter Egg. \nEnvie uma foto no grupo dessa página no tema dark-mod e, se você for o primeiro, ganhará um chocolate!");
    setTheme(theme === "light" ? "dark" : "light");
  }
  return (
    <>
      <div className={`bodyChat ${theme === "light" ? "light-theme" : "dark-theme"}`}>
        <div className={`ContainerM`}>
          <div className='aside'>
            <p className="name">{name}</p>
            <img src={imgRb === 'roboJpg' ? roboJpg : roboGif} alt="Robô" onClick={() => handleThemeChange()} />
            <div class='btn_chat'>
              <button disabled={botaoClicado}
                onClick={creator}
                class='BtnFirts'>
                <FaJenkins className='icons' />
                Criadores!
              </button>
            </div>
            <div class='btn_chat'>
              <button disabled={botaoClicado}
                onClick={msg}>
                <FaReact className='icons' />
                Mensagem Positiva
              </button>
            </div>
            <div class='btn_chat'>
              <button disabled={botaoClicado}
                onClick={project}>
                <FaStackOverflow className='icons' />
                Linguagens Utilizadas
              </button>
            </div>
            <div class='btn_chat'>
              <button onClick={prova}>
                <FaNodeJs className='icons' />
                Iniciar Prova!
              </button>
            </div>
          </div>
          <div class='chatContainer'>
            <div class='space'>
              <div ref={MaquinaDeEscrever} className={chatMessage}>{texto}</div>
              <div className={chatHidden}>{questionnaire}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Robot;   
