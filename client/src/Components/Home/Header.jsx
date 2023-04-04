import React, { useState, useEffect } from 'react';
// import LogoGrau from '../../assets/img/grau-logo.png';
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import '../../assets/css/App.css';
import '../../assets/css/Header.css';
import '../../assets/css/responsive.css'
import LogoGrau from '../../assets/img/grau-logo.png';
import 'animate.css';
import { FaUserGraduate } from "react-icons/fa";
function Header() {
  const [theme, setTheme] = useState("light");
  function handleThemeChange() {
    alert('Legal Achou o Dark-Mod do cabeçalho \n ache o resto para combinar!')
    setTheme(theme === "light" ? "dark" : "light");
  }
  const [LogoInitialLoading, setLogoInitialLoading] = useState('LogoInitial');
  const [LinkChatLoading, setLinkChatLoading] = useState('LinkChat');
  const [LoginUserLoading, setLoginUserLoading] = useState('LoginUser');

  function handleHiddenForVisible(){
    alert('Bem-vindo à nossa aplicação web! Existe 4 easter eggs escondidos.\n\nProcure bem e, se você encontrar todos, poste uma foto da página do ChatBot-DarkMod ou Login-DarkMod no grupo para ganhar chocolate!\n\nBoa sorte!');
    setLinkChatLoading('LinkChatVisible')
    setLoginUserLoading('LoginUserVisible')
    setLogoInitialLoading('LogoInitialVisible');
  }
  
  //   DEPOIS AO CLICAR NELA 
  //  ELA SE INDIREITA PARA ESQUERDA E A
  //  PARECER AS PALAVRAS PODENDO SER ALTERADO PARA OS TEMAS

  return (
    <>
      <body className={`BodyLinks theme ${theme === "light" ? "light-theme" : "dark-theme"}`}>
          <div className='title'>
            <div className="HeaderLinks">
              <div className={LogoInitialLoading}>
                <img src={LogoGrau} onClick={()=>{handleHiddenForVisible()}}/>
              </div>
              <div className={LinkChatLoading}>
                <Link to="/chat" className="Link">ChatBot</Link>
                <Link to="/form" className="Link">Login</Link>
              </div>
            </div>
            <div className={LoginUserLoading}>
              <FaUserGraduate className="icon" />
              <span className="BtnUser" href="#" onClick={() => handleThemeChange()}>Cadastrado</span>
            </div>
        </div >
      </body>
    </>
  );
}

export default Header;
