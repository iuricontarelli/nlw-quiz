const perguntas = [
  {
    pergunta: "Qual é o maior planeta do sistema solar?",
    respostas: [
      "Júpiter",
      "Saturno",
      "Netuno"
    ],
    correta: 0 // Júpiter
  },
  {
    pergunta: "Quem escreveu 'Dom Quixote'?",
    respostas: [
      "Miguel de Cervantes",
      "William Shakespeare",
      "Charles Dickens"
    ],
    correta: 0 // Miguel de Cervantes
  },
  {
    pergunta: "Qual é o animal terrestre mais rápido?",
    respostas: [
      "Guepardo",
      "Leopardo",
      "Lobo Cinzento"
    ],
    correta: 0 // Guepardo
  },
  {
    pergunta: "Qual é o maior oceano do mundo?",
    respostas: [
      "Pacífico",
      "Atlântico",
      "Índico"
    ],
    correta: 0 // Pacífico
  },
  {
    pergunta: "Quem pintou a 'Mona Lisa'?",
    respostas: [
      "Leonardo da Vinci",
      "Pablo Picasso",
      "Vincent van Gogh"
    ],
    correta: 0 // Leonardo da Vinci
  },
  {
    pergunta: "Quantos elementos químicos existem naturalmente?",
    respostas: [
      "118",
      "92",
      "100"
    ],
    correta: 1 // 92
  },
  {
    pergunta: "Qual é a capital do Japão?",
    respostas: [
      "Tóquio",
      "Pequim",
      "Seul"
    ],
    correta: 0 // Tóquio
  },
  {
    pergunta: "Quem foi o primeiro homem a pisar na lua?",
    respostas: [
      "Neil Armstrong",
      "Buzz Aldrin",
      "Yuri Gagarin"
    ],
    correta: 0 // Neil Armstrong
  },
  {
    pergunta: "Qual é a montanha mais alta do mundo?",
    respostas: [
      "Monte Everest",
      "Monte Kilimanjaro",
      "Monte Fuji"
    ],
    correta: 0 // Monte Everest
  },
  {
    pergunta: "Em que país está localizada a Grande Muralha?",
    respostas: [
      "China",
      "Índia",
      "Rússia"
    ],
    correta: 0 // China
  }
];


const quiz = document.querySelector('#quiz')
const template = document.querySelector('template')

const corretas = new Set()
const totalDePerguntas = perguntas.length
const mostrarTotal = document.querySelector('#acertos span')
mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas

for(const item of perguntas){
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta

    for(let resposta of item.respostas){
        const dt = quizItem.querySelector('dl dt').cloneNode(true)

        dt.querySelector('span').textContent = resposta
        dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
        dt.querySelector('input').value = item.respostas.indexOf(resposta)

        dt.querySelector('input').onchange = (event) => {
            const estaCorreta = event.target.value == item.correta

            corretas.delete(item)
            if (estaCorreta) {
                corretas.add(item)
            }

            mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
        }

        quizItem.querySelector('dl').appendChild(dt)
    }

    quizItem.querySelector('dl dt').remove()

    //coloca a pergunta na tela
    quiz.appendChild(quizItem)
}