import { cpf } from 'cpf-cnpj-validator';
import React, { useState, useEffect } from 'react';
import LoadingImg from '../../assets/img/Loading3.gif';
import Constants from './Constants';
import Axios from 'axios'
const Formulario = () => {
    const [container, setContainer] = useState('oculto');
    const [loginForm, setloginForm] = useState('oculto');
    const [CadatroForm, setCadatroForm] = useState('oculto');
    const [showSliderLeft, setShowSliderLeft] = useState(false);
    const [showSliderRight, setShowSliderRight] = useState(false);
    const [showSliderLeftOne, setShowSliderLeftOne] = useState(false);
    const [showSliderRightOne, setShowSliderRightOne] = useState(false);
    const [textVisible, settextVisible] = useState(false);
    const [user, setUser] = useState({
        name: "",
        cpf: "",
        senha: "",
        cfmsenha: ""
    });
    const [isValidCpf, setIsValidCpf] = useState('');
    const [cpfValue, setCpfValue] = useState('');
    const [status, setStatus] = useState({
        type: "",
        mensagem: ""
    });
    const [statusLogin, setStatusLogin] = useState({
        type: "",
        mensagem: ""
    });
    const handleClickButton = () => {
        if (validate_status()) {
            Axios.post("http://localhost:3001/register", {
                name: user.name,
                cpf: user.cpf,
                senha: user.senha
            }).then((response) => console.log(response))
                .catch((error) => {
                    console.log(error)
                    setStatus({ type: "error", mensagem: "Usuário já cadastrado" })
                })
        }
    }
    const handleLogin = () => {
        if (typeof user.cpf !== 'undefined' && typeof user.senha !== 'undefined') {
            Axios.post("http://localhost:3001/login", {
                cpf: user.cpf,
                senha: user.senha
            }).then((response) => {
                if (response.status === 200) {
                    setStatusLogin({ type: "success", mensagem: "Login realizado com sucesso" })
                    handleClick(response.data.nome, response.data.cpf)
                } else {
                    setStatusLogin({ type: "error", mensagem: "CPF ou senha incorretos" })
                }
            }).catch((error) => {
                console.error(error)
                setStatusLogin({ type: "error", mensagem: "CPF ou senha incorretos" })
            });
        }
    }
    const formOne = (e) => {
        e.preventDefault();
    }
    const handleMultipleCpf = (e) => {
        handleCpfChange(e)
        valueInput(e)
    }
    const handleCpfChange = (event) => {
        const newCpfValue = event.target.value;
        setCpfValue(newCpfValue);
    }
    useEffect(() => {
        const isValid = cpf.isValid(cpfValue);
        setIsValidCpf(isValid);
    }, [cpfValue])
    const valueInput = e => setUser({ ...user, [e.target.name]: e.target.value });
    function validate_status() {
        const nameRegex = /^[A-ZÀ-ÖØ-öø-ſ][a-zà-öø-ÿ]+([.'-][A-Za-zà-öø-ÿ]+)*( [A-Za-zà-öø-ÿ]+)+$/;
        if (!user.name) return setStatus({ type: "error", mensagem: "Campos Nome Não preenchido" });
        if (user.name.length < 10) return setStatus({ type: "error", mensagem: "Nome Menor que 10 caracteres!" });
        if (!nameRegex.test(user.name)) return setStatus({ type: "error", mensagem: "Nome e Sobrenome" })
        if (!isValidCpf) {
            setStatus({ type: "error", mensagem: "CPF inválido!" });
            return false;
        }
        if (!user.senha) return setStatus({ type: "error", mensagem: "Erro nas senhas" });
        if (user.senha.length < 5) return setStatus({ type: "error", mensagem: "senha precisa ser de 5 digitos" });
        if (!user.cfmsenha) return setStatus({ type: "error", mensagem: "não prencheu o campos de confirmação de senhas" });
        if (user.name.length < 10) return setStatus({ type: "error", mensagem: "Nome Menor que 10 caracteres!" });
        if (user.senha != "" && user.cfmsenha != "" && user.senha === user.cfmsenha) {
            Constants.TIMELINKTWO();
        }
        else {
            return setStatus({ type: "error", mensagem: "Todos os campos correto mas as Senhas estão diferentes" })
        }
        return true;
    }
    const addUser = async e => {
        e.preventDefault();
        if (!validate_status()) return;
        const saveForm = true;
        if (saveForm) {
            setStatus({
                type: "success",
                mensagem: "Usuário Cadastrado com sucesso!"
            });
        } else {
            setStatus({
                type: "error",
                mensagem: "Tudo errado!"
            });
        }
    }
    // Funcoes que irão modificar as classes
    const handleClickOne = (e) => {
        e.preventDefault();
        setShowSliderLeft(true);
        setShowSliderRight(true);
        settextVisible(true);
        setShowSliderLeftOne(false);
        setShowSliderRightOne(false);
        setTimeout(() => {
            setloginForm('oculto');
            setCadatroForm('visivel');
            setContainer('visivel');
        }, 500);
    }
    const handleClickThree = (e) => {
        e.preventDefault();
        setShowSliderLeftOne(true);
        setShowSliderRightOne(true);
        settextVisible(false);
        setShowSliderLeft(false);
        setShowSliderRight(false);
        setTimeout(() => {
            setCadatroForm('oculto');
            setloginForm('visivel');
            setContainer('visivel');
        }, 600);
    }
    const [email, setEmail] = useState('');
    const [ChangePass, setChangePass] = useState(true);
    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    }
    function SendPasswordResetEmail() {
        setChangePass(false);
        setloginForm('oculto');
        setCadatroForm('oculto');
    }
    function PassBack() {
        setChangePass(true);
        setloginForm('visivel');
    }
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        setloginForm('visivel');
        setLinkON(true)
        setContainer('visivel');
        return () => clearTimeout();
    }, []);
    const [theme, setTheme] = useState("light");
    function handleThemeChange() {
        alert("Parabéns! Você encontrou um Easter Egg! Clique aqui para ativar/desativar o Dark Mode. Continue procurando por mais para modificar o robô e o cabeçalho. O primeiro a postar uma captura de tela em dark mode no grupo ganhará chocolate. Boa sorte!");
        setTheme(theme === "light" ? "dark" : "light");
    }
    const [ChangeImg, setChangeImg] = useState(false);
    function handleChangeImg() {
        setChangeImg(true);
        alert("Parabéns! Você encontrou um Easter Egg! \nClique aqui para ativar ou desativar a ImgDark. \nContinue procurando por mais para modificar o tema da página. \nO primeiro a postar uma captura de tela em dark mode no grupo ganhará chocolate. Boa sorte!");
    }
    function handleResetImg() {
        setChangeImg(false);
    }
    const [LoadingImgOn, setLoadingImgOn] = useState(false);
    function handleClick(name, cpf) {
        setLoadingImgOn(true);
        setLinkON(false);
        setCadatroForm('oculto');
        setloginForm('oculto');
        setContainer('oculto');
        setTimeout(() => {
            setLoadingImgOn(true);
            setLinkON(false);
            setCadatroForm('oculto');
            setloginForm('oculto');
            setContainer('oculto');
            Constants.TIMELINKTWO(name, cpf);
        }, 2200);
    }
    const [linkOn, setLinkON] = useState(false)
    return (
        <>
            <div className={` ${ChangeImg ? 'containerBodyNewImg' : 'BodyForm'}`}>
                <div className={`Loading_Form  ${LoadingImgOn ? 'visivel' : 'oculto'}`}>
                    <img src={LoadingImg} alt="" />
                </div>
                <div className={`links ${linkOn ? 'visivel' : 'oculto'}`}>
                    <a href="#" class='github_icon'
                        onClick={ChangeImg ? handleResetImg : handleChangeImg}><Constants.GITHUB_ICON /></a>
                    <a href="#" class='github_icon' onClick={() => handleThemeChange()}><Constants.MINION_ICON /></a>
                </div>
                <div className={`theme ${theme === "light" ? "light-theme" : "dark-theme"}`}>
                    <div className={`${container === 'visivel' ? 'visible' : 'hidden'} containerMaster `}>
                        <div className='pixelHigh'>
                            <div className={`${loginForm === 'visivel' ? 'visible ' : 'hidden'}`}>
                                <div className={`login ${showSliderLeft ? 'SliderLeft' : ''}`}>
                                    <div className={`${textVisible ? 'texto_invisivel' : 'texto_visivel'}`}>
                                        <h1 className='form__title'>Login</h1>
                                        <p>Use sua Conta cadastrada</p>
                                        {statusLogin.type === "error" ? <p style={{ color: "red" }}>{statusLogin.mensagem}</p> : ""}
                                        <form onSubmit={formOne}>
                                            <input
                                                type="text"
                                                id="cpf"
                                                name='cpf'
                                                placeholder='CPF'
                                                onChange={handleMultipleCpf}
                                                maxLength="11"
                                                className={isValidCpf ? 'valid-cpf' : 'invalid-cpf'}
                                            />
                                            <input type="password"
                                                name='senha'
                                                placeholder='Senha'
                                                maxLength="5"
                                                onChange={valueInput}
                                            />
                                            <a href="#" onClick={SendPasswordResetEmail}>Esqueceu a senha</a>
                                            <button onClick={() => handleLogin()} className='form__button'>Entrar</button>
                                        </form>
                                    </div>
                                </div>
                                <div className={`cadastro ${showSliderRight ? 'SliderRight' : ''}`}>
                                    <div className={`${textVisible ? 'texto_invisivel' : 'texto_visivel'}`}>
                                        <h2>Olá amigo(a)!</h2>
                                        <p>Insira algumas informações e comece sua prova</p>
                                        <button onClick={handleClickOne} className='form__button '>Quero Criar Uma Conta</button>
                                    </div>
                                </div>
                            </div>
                            <div className={` ${ChangePass ? 'EsqueciSenhaHidden' : 'EsqueciSenha'}`}>
                                <button className='Btn_Back' onClick={PassBack}>Voltar</button>
                                <img src={Constants.LOGOGRAU} alt="Logo" />
                                <h2>Esqueci minha Senha</h2>
                                <div className='FormEmail'>
                                    <form action="https://formsubmit.co/Assueromota@hotmail.com" method="POST">
                                        <input type="text" name="CPF Cadastrado" placeholder='Digite o Cpf'></input>
                                        <input type="text" name="Email" placeholder='Digite um Email Valido' value={email} onChange={handleEmailChange} ></input>
                                        <input type="hidden" name="_cc" value={email} onChange={handleEmailChange}></input>
                                        <input type="hidden" name="_captcha" value="false"></input>
                                        <input type="hidden" name="_template" value="table"></input>
                                        <textarea name='BotRobo' className='textArea'>"Olá Abençoado(a)! Parece que você esqueceu sua senha. Sem problemas, aqui está sua nova senha: [SENHA]"</textarea>
                                        <input type="hidden" name="_next" value="http://localhost:3000/"></input>
                                        <input type="hidden" name="_subject" value="RECUPERAÇAO DE SENHA - PROVABOT" />
                                        <button type='submit'>RECUPERAR</button>
                                    </form>
                                </div>
                            </div>
                            <div className={`${CadatroForm === 'visivel' ? 'visible' : 'hidden'}`}>
                                <div className={`welcome_back ${showSliderLeftOne ? 'SliderLeft' : ''}`}>
                                    <div className={`Back ${textVisible ? 'texto_visivel' : 'texto_invisivel'}`}>
                                        <h2>Bem vindo de volta!</h2>
                                        <p>Se mantenha conectado fazendo login
                                            com suas informações
                                        </p>
                                        <button onClick={handleClickThree} className='form__button'>Já Tenho Conta</button>
                                    </div>
                                </div>
                                <div className={`create_account ${showSliderRightOne ? 'SliderRight' : ''}`}>
                                    <div className={`${textVisible ? 'texto_visivel' : 'texto_invisivel'}`}>
                                        <h1 className='form__title'>Criar Conta</h1>
                                        <p>Não Trate como Constante Quem te Trata Como Variável</p>
                                        <br></br>
                                        {status.type === "error" ? <p style={{ color: "red" }}>{status.mensagem}</p> : ""}
                                        <form onSubmit={addUser} className="form__input">
                                            <input
                                                type="text"
                                                name="name"
                                                placeholder="Nome"
                                                onChange={valueInput} maxLength="50" />
                                            <input
                                                type="text"
                                                id="cpf"
                                                name='cpf'
                                                placeholder='CPF'
                                                onChange={handleMultipleCpf}
                                                maxLength="11"
                                                className={isValidCpf ? 'valid-cpf' : 'invalid-cpf'}
                                            />
                                            <input type="text"
                                                name="senha"
                                                placeholder="Senha"
                                                onChange={valueInput}
                                                maxLength="5"
                                            />
                                            <input type="text"
                                                name="cfmsenha"
                                                placeholder="Confirme Senha"
                                                onChange={valueInput}
                                                maxLength="5"
                                            />
                                            <button className='form__button' onClick={() => handleClickButton()}>Criar a Conta</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}

export default Formulario;
