

let respostas = []
let quiz = [
    {pergunta: 'Letra A?', resposta: 'A'},
    {pergunta: 'Letra B?', resposta: 'B'},
    {pergunta: 'Letra C?', resposta: 'C'},
    {pergunta: 'Letra D?', resposta: 'D'},
    {pergunta: 'Letra E?', resposta: 'E'}
]

function start(){
    let questions = document.getElementById('questions')
    quiz.forEach(function(perguntas){
        let p = document.createElement('p')
        p.innerText = perguntas.pergunta
        let pRespostas = document.createElement('input')
        pRespostas.type = 'text'
        pRespostas.id = `${perguntas.resposta}`
        pRespostas.placeholder = 'Qual a resposta? A, B, C, D, E'
        questions.append(p, pRespostas)

    })
}

function send(){
    let aux = 0
    let certa = 0
    const respo = document.getElementById('res')
    let nota = document.createElement('p')
    quiz.forEach(function(resultado){
        let res = document.getElementById(`${resultado.resposta}`).value
        respostas.push (res)
        switch(respostas[aux]){
            case resultado.resposta:
                console.log(`Resposta numero ${1+aux} Correta`)
                certa += 1
                break
            default:
                console.log(`Resposta numero ${1+aux} Errada`)
        }
        aux++
    })
    certa *= 2
    nota = `Sua nota foi: ${certa},0`
    respo.append(nota)
}