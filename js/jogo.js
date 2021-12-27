/*var estados = {
    "estados":[
        "estado 0":{
            "opcoes":[
                "Posso ir ao parque perto de casa, gosto de ficar lá",
                "Posso ir ver minha Avó ingrid, ela tem o melhor bolo de cenoura do mundo",
                "Posso ir ver minha melhor amiga Amanda, eu a conheço desde sempre"
            ],
            "estadosFuturos":[1,2,3],
            "cenario":0,
            "personagens":[0,0]
        }
    ]
}
var falas = {
    "falas":[
        "falas 0":[
            {
            "autor":"khalisto",
            "fala":"Hoje foi um dia difícil, briguei com minha mãe e sai de casa"
            },{
            "autor":"khalisto",
            "fala":"Nós brigamos quase todo dia porque ela quer me levar a igreja"
            },{
            "autor":"khalisto",
            "fala":"Ela não entende que eu enquanto uma pessoa trans não me sinto bem lá"
            },{
            "autor":"khalisto",
            "fala":"Ela não entende que não me sinto acolhida pela religião dela"
            },{
            "autor":"khalisto",
            "fala":"Mas se não fosse isso seria outra coisa"
            },{
            "autor":"khalisto",
            "fala":"Ela está descontando em mim os próprios traumas"
            },{
            "autor":"khalisto",
            "fala":"Preciso decidir aonde ir pelas próximas horas "
            }
        ]
    ]
}*/
var cenarios = {
    "cenarios":[
        {
        "comentario":"cenario 0",
        "url":"imagens/rua.jpg"
        },{
        "comentario":"cenario 1",
        "url":"imagens/casaAvo.png"
        },{
        "comentario":"cenario 2",
        "url":"imagens/casaMae.png"
        },{
        "comentario":"cenario 3",
        "url":"imagens/casaAmanda.png"
        }
    ]
}
var personagensURL = {
    "personagens":[
        {
        "comentario": "khalisto 0",
        "url":"imagens/khalisto.png"
        },
        {
        "comentario": "Amanda 1",
        "url":"imagens/amanda.png"
        },
        {
        "comentario": "Maria 2",
        "url":" "
        },
        {
        "comentario": "Ingrig 3",
        "url":" "
        }
    ]
}

var estado = 0

const container = document.querySelector("#container")
const fundo = document.querySelector("#fundo")
container.appendChild(fundo)
const imagemFundo = document.querySelector("#imagemFundo")
imagemFundo.src = "imagens/rua.jpg"
fundo.style.backgroundImage = (imagemFundo)
const personagens = document.querySelector("#personagens")
fundo.appendChild(personagens)
const personagemEsquerda = document.querySelector("#personagemEsquerda")
personagemEsquerda.src = "imagens/khalisto.png"
personagens.appendChild(personagemEsquerda)
const personagemDireita = document.querySelector("#personagemDireita")
personagemDireita.src = "imagens/amanda.png"
personagemDireita.style.opacity = 0
personagens.appendChild(personagemDireita)
const lista = document.querySelector("#opcoes")
fundo.appendChild(lista)

const botaoOpcao1 = document.createElement("button")
botaoOpcao1.setAttribute("id", "opcao1")
lista.appendChild(botaoOpcao1)
const botaoOpcao2 = document.createElement("button")
botaoOpcao2.setAttribute("id", "opcao2")
lista.appendChild(botaoOpcao2)
const botaoOpcao3 = document.createElement("button")
botaoOpcao2.setAttribute("id", "opcao3")
lista.appendChild(botaoOpcao3)

console.log("CONSTRUIDO O FUNDO")

const caixaDeDialogo = document.querySelector("#caixaDeDialogo")
fundo.appendChild(caixaDeDialogo)
const dialogo = document.querySelector("#dialogo")
caixaDeDialogo.appendChild(dialogo)
const texto = document.querySelector("#texto")
dialogo.appendChild(texto)

const botaoNext = document.createElement("button")
botaoNext.setAttribute("id", "botaoNext")
botaoNext.innerHTML = ">"
dialogo.appendChild(botaoNext)

console.log("CONSTRUIDO DIALOGO")