// Efeito de maquina de escrever 

function typeWriter(elemento) {
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoArray.forEach((letra, i) => {
        setTimeout(() => elemento.innerHTML += letra, 40 * i);
    }, 2000);}

    export { typeWriter};
