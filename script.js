const perguntas = [
    {
      pergunta: "Qual é o nome do mapa principal de League of Legends?",
      respostas: [
        "Summoner's Rift",
        "Howling Abyss",
        "Twisted Treeline"
      ],
      correta: 0 // Summoner's Rift
    },
    {
      pergunta: "Qual é o nome do campeão que é conhecido como o Rei Destruído?",
      respostas: [
        "Darius",
        "Garen",
        "Mordekaiser"
      ],
      correta: 2 // Mordekaiser
    },
    {
      pergunta: "Quantos jogadores compõem uma equipe padrão de League of Legends?",
      respostas: [
        "3",
        "4",
        "5"
      ],
      correta: 2 // 5
    },
    {
      pergunta: "Qual é o nome do criador de League of Legends?",
      respostas: [
        "Jeff Kaplan",
        "Brandon Beck",
        "Marc Merrill"
      ],
      correta: 2 // Marc Merrill
    },
    {
      pergunta: "Qual é o recurso principal usado para comprar itens durante uma partida?",
      respostas: [
        "Ouro",
        "Cristais",
        "Diamantes"
      ],
      correta: 0 // Ouro
    },
    {
      pergunta: "Qual é o nome do objetivo neutro que concede bônus de poder ao time que o derrota?",
      respostas: [
        "Dragão",
        "Arauto do Rift",
        "Barão Nashor"
      ],
      correta: 2 // Barão Nashor
    },
    {
      pergunta: "Qual é o nome da habilidade final de Yasuo?",
      respostas: [
        "Vento Cortante",
        "Tornado",
        "Último Suspiro"
      ],
      correta: 2 // Último Suspiro
    },
    {
      pergunta: "Qual é o tipo de dano causado pelas habilidades de Lux?",
      respostas: [
        "Dano Físico",
        "Dano Mágico",
        "Dano Verdadeiro"
      ],
      correta: 1 // Dano Mágico
    },
    {
      pergunta: "Qual é o nome da rota onde geralmente são encontrados os campeões lutadores?",
      respostas: [
        "Rota do Meio",
        "Rota Superior",
        "Rota Inferior"
      ],
      correta: 1 // Rota Superior
    },
    {
      pergunta: "Qual é o nome do recurso usado para desbloquear novos campeões em League of Legends?",
      respostas: [
        "Pontos de Experiência",
        "Essências Azuis",
        "Pontos de Influência"
      ],
      correta: 1 // Essências Azuis
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