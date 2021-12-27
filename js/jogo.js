const container = document.querySelector("#container")
const fundo = document.querySelector("#fundo")
container.appendChild(fundo)
const imagemFundo = document.querySelector("#imagemFundo")
imagemFundo.src = "img/rua.jpg"
fundo.style.backgroundImage = (imagemFundo)
const personagens = document.querySelector("#personagens")
fundo.appendChild(personagens)
const personagemEsquerda = document.querySelector("#personagemEsquerda")
personagemEsquerda.src = "img/khalisto.png"
personagens.appendChild(personagemEsquerda)
const personagemDireita = document.querySelector("#personagemDireita")
personagemDireita.src = "img/khalisto.png"
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
botaoOpcao3.setAttribute("id", "opcao3")

console.log("CONSTRUIDO O FUNDO")

const caixaDeDialogo = document.querySelector("#caixaDeDialogo")
fundo.appendChild(caixaDeDialogo)
caixaDeDialogo.style.top = cenarioFalas['cenario'][0]['falas'][0]['posicao-balao'][0]
caixaDeDialogo.style.top = cenarioFalas['cenario'][0]['falas'][0]['posicao-balao'][1]
const dialogo = document.querySelector("#dialogo")
caixaDeDialogo.appendChild(dialogo)
const texto = document.querySelector("#texto")
dialogo.appendChild(texto)

const botaoNext = document.createElement("button")
botaoNext.setAttribute("id", "botaoNext")
botaoNext.innerHTML = ">"
dialogo.appendChild(botaoNext)

console.log("CONSTRUIDO DIALOGO")