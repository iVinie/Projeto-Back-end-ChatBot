
import { cpf } from 'cpf-cnpj-validator';
import React, { useState, useEffect } from 'react';
import LoadingImg from '../../assets/img/Loading3.gif';
import Constants from './Constants';


const Formulario = () => {
    // Variaveis que Irão modificar as classes no Front-end
    const [container, setContainer] = useState('oculto');
    const [loginForm, setloginForm] = useState('oculto');
    const [CadatroForm, setCadatroForm] = useState('oculto');
    const [showSliderLeft, setShowSliderLeft] = useState(false);
    const [showSliderRight, setShowSliderRight] = useState(false);
    const [showSliderLeftOne, setShowSliderLeftOne] = useState(false);
    const [showSliderRightOne, setShowSliderRightOne] = useState(false);
    const [textVisible, settextVisible] = useState(false);
    // Função para Inicializar Formulario vazio
    const [user, setUser] = useState({
        nome: "",
        cpf: "",
        senha: "",
        cfmsenha: ""
    });
    const formOne = (e) => {
        e.preventDefault();
    }
    // Checagem de CPF verdeiro ou não
    const [cpfValue, setCpfValue] = useState('');
    const [isValidCpf, setIsValidCpf] = useState('');
    const handleCpfChange = (event) => {
        const newCpfValue = event.target.value;
        setCpfValue(newCpfValue);
    }
    useEffect(() => {
        const isValid = cpf.isValid(cpfValue);
        setIsValidCpf(isValid);
    }, [cpfValue])
    // Funçao para Checar Status do Campo preenchido se foi correto ou não e assim fazer a validação
    const [status, setStatus] = useState({
        type: "",
        mensagem: ""
    });
    // Variável que irá receber os inputs 
    const valueInput = e => setUser({ ...user, [e.target.name]: e.target.value });
    // Funcão para validar e acrescentar a mensagem que será exibida no front-end
    function validate_status() {
        // isso vai verificar o campos isoladamente e o return true é o mesmo que por exemplo else { user.name="true"}
        if (!user.name) return setStatus({ type: "error", mensagem: "Campos Nome Não preenchido" });
        if (user.name.length < 10) return setStatus({ type: "error", mensagem: "Nome Menor que 10 caracteres!" });
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
    // Efeito para alteraçao de Classes
    // Variável que irá se comunicar com o back-end e também confirmar se irá passar do Front para o Back-end
    // Se a const saveForm for verdadeira ela primeiro passa para o 'Status' como Aprovado e assim esta autorizada a passar.
    const addUser = async e => {
        // PreventDefault ele não permite a pagina relogar futuramente será retirado para logar no banco
        e.preventDefault();
        //Agora através da funçao validate_status eu vou evitar do formulario enviar ou ñ enviar com o return;
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

    // CAMPOS ESQUECI A SENHA CONSTANTES E FUNÇÕES
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
    // LOADING CARRENGANDO...
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        setloginForm('visivel');
        setLinkON(true)
        setContainer('visivel');
        return () => clearTimeout();
    }, []);
    //EasterEgg 
    // Mudança de Tema DARK, LIGHT mode troca das Variaveis no CSS.
    const [theme, setTheme] = useState("light");
    function handleThemeChange() {
        alert("Parabéns! Você encontrou um Easter Egg! Clique aqui para ativar/desativar o Dark Mode. Continue procurando por mais para modificar o robô e o cabeçalho. O primeiro a postar uma captura de tela em dark mode no grupo ganhará chocolate. Boa sorte!");
        setTheme(theme === "light" ? "dark" : "light");
    }
    // Mudança de imagem BOA PARA A DARK mostra do Segundo EasterEGG
    const [ChangeImg, setChangeImg] = useState(false);
    function handleChangeImg() {
        setChangeImg(true);
        alert("Parabéns! Você encontrou um Easter Egg! \nClique aqui para ativar ou desativar a ImgDark. \nContinue procurando por mais para modificar o tema da página. \nO primeiro a postar uma captura de tela em dark mode no grupo ganhará chocolate. Boa sorte!");
    }
    function handleResetImg() {
        setChangeImg(false);
    }
    // Imagem quando carregar o Login
    const [LoadingImgOn, setLoadingImgOn] = useState(false);
    // Se o Cadastro Foi Completado basta seguir para 2 pagina
    function handleClick() {
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
            Constants.TIMELINKTWO();
        }, 2200);
    }
    // Para os links ficarem oculto consertando bugs
    const [linkOn, setLinkON] = useState(false)
    return (
        <>
            <div className={` ${ChangeImg ? 'containerBodyNewImg' : 'BodyForm'}`}>
                {/*Imagem quando carregar o Login */}
                <div className={`Loading_Form  ${LoadingImgOn ? 'visivel' : 'oculto'}`}>
                    <img src={LoadingImg} alt="" />
                </div>
                <div className={`links ${linkOn ? 'visivel' : 'oculto'}`}>
                    {/* EasterEgg */}
                    <a href="#" class='github_icon'
                        onClick={ChangeImg ? handleResetImg : handleChangeImg}><Constants.GITHUB_ICON /></a>
                    {/* BOTAO DARK MOD */}
                    <a href="#" class='github_icon' onClick={() => handleThemeChange()}><Constants.MINION_ICON /></a>
                </div>
                {/* Formulario de Login */}
                <div className={`theme ${theme === "light" ? "light-theme" : "dark-theme"}`}>
                    <div className={`${container === 'visivel' ? 'visible' : 'hidden'} containerMaster `}>
                        <div className='pixelHigh'>
                            <div className={`${loginForm === 'visivel' ? 'visible ' : 'hidden'}`}>
                                <div className={`login ${showSliderLeft ? 'SliderLeft' : ''}`}>
                                    {/* PARTE LOGIN */}
                                    <div className={`${textVisible ? 'texto_invisivel' : 'texto_visivel'}`}>
                                        <h1 className='form__title'>Login</h1>
                                        <p>Use sua Conta cadastrada</p>
                                        <form onSubmit={formOne}>
                                            <input
                                                type="text"
                                                id="cpf"
                                                placeholder='CPF'
                                                onChange={handleCpfChange}
                                                maxLength="11"
                                                className={isValidCpf ? 'valid-cpf' : 'invalid-cpf'}
                                                required
                                            />
                                            <input type="password"
                                                name='password'
                                                placeholder='Senha'
                                                maxLength="5"
                                                required
                                            />
                                            <a href="#" onClick={SendPasswordResetEmail}>Esqueceu a senha</a>
                                            <button onClick={handleClick} className='form__button'>Entrar</button>
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

                            {/* PARTE ESQUECI MINHA SENHA */}
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
                            {/* PARTE DO CADASTRO */}
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
                                        {/* Nesse campos vou apresentar as mensagens de aprovação do formulario, lembrando que ele esta iniciando vazio como declaro na linha 18 */}
                                        {status.type === "error" ? <p style={{ color: "red" }}>{status.mensagem}</p> : ""}
                                        <form onSubmit={addUser} className="form__input">
                                            <input type="text" name="name" placeholder="Nome" onChange={valueInput} maxLength="10" />
                                            <input
                                                type="text"
                                                id="cpf"
                                                placeholder='CPF'
                                                onChange={handleCpfChange}
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
                                            <button className='form__button'>Criar a Conta</button>
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