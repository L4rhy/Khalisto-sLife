var falas = {}
var estados = {}

    var leitor1 = new XMLHttpRequest();

    leitor1.open("get", "https://khalisto-json.herokuapp.com/falas/", false);
    leitor1.onload = function(){
        falas = JSON.parse(this.responseText)
        console.log(falas)
    }
    leitor1.send();

    var leitor2 = new XMLHttpRequest();

    leitor2.open("get", "https://khalisto-json.herokuapp.com/estados/", false);
    leitor2.onload = function(){
        estados = JSON.parse(this.responseText)
        console.log(estados)
    }
    leitor2.send();

var i = 0
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
botaoOpcao3.setAttribute("id", "opcao3")
lista.appendChild(botaoOpcao3)

console.log("CONSTRUIDO O FUNDO")

const caixaDeDialogo = document.querySelector("#caixaDeDialogo")
fundo.appendChild(caixaDeDialogo)
caixaDeDialogo.style.top = 0
const dialogo = document.querySelector("#dialogo")
caixaDeDialogo.appendChild(dialogo)
const texto = document.querySelector("#texto")
dialogo.appendChild(texto)

const botaoNext = document.createElement("button")
botaoNext.setAttribute("id", "botaoNext")
botaoNext.innerHTML = ">"
dialogo.appendChild(botaoNext)

console.log("CONSTRUIDO DIALOGO")
mudaFundo(estados, falas, i)
function mudaFundo(estados, falas, i){
imagemFundo.src = estados["estados"][estado]["estado"]["cenarioURL"]
fundo.style.backgroundImage = (imagemFundo)
personagemDireita.src = estados["estados"][estado]["estado"]["personagensURL"][0]
personagemEsquerda.src = estados["estados"][estado]["estado"]["personagensURL"][1]
apareceDireita(i)
botaoOpcao1.innerHTML = estados["estados"][estado]["estado"]["opcoes"][0]
botaoOpcao2.innerHTML = estados["estados"][estado]["estado"]["opcoes"][1]
botaoOpcao3.innerHTML = estados["estados"][estado]["estado"]["opcoes"][2]
i=0
mudaTexto(falas, i)
desaparece(falas, i)
console.log("muda fundo funciona")
}

function mudaTexto(falas, i){
desaparece(falas,i)
apareceDireita(i)
texto.innerHTML = `<b><i>${falas["dialogos"][estado]["falas"][i]["autor"]} - </i></b>${falas["dialogos"][estado]["falas"][i]["fala"]}`
console.log("muda texto funcina")
}

function desaparece(falas, i){
    if(falas["dialogos"][estado]["numeroDeFalas"] >= i){
        caixaDeDialogo.style.opacity = 1
        botaoNext.style.opacity = 1
        botaoOpcao1.style.opacity = 0
        botaoOpcao2.style.opacity = 0
        botaoOpcao3.style.opacity = 0
    }
    if(falas["dialogos"][estado]["numeroDeFalas"] < i){
        caixaDeDialogo.style.opacity = 0
        botaoNext.style.opacity = 0
        botaoOpcao1.style.opacity = 1
        botaoOpcao2.style.opacity = 1
        botaoOpcao3.style.opacity = 1
    }
console.log("DESAPARECE FUNCIONA")
}
function apareceDireita(i){
if(i==estados["estados"][estado]["estado"]["pesonagemDireitaA"]){
    personagemDireita.style.opacity = 1
    }else{
    personagemDireita.style.opacity = 0
    }
}

botaoNext.addEventListener("click", function(){
    i++
    mudaTexto(falas, i)
    desaparece(falas, i)
    console.log("BOTAO NEXT FUNCIONA")
})
botaoOpcao1.addEventListener("click", function(){
    estado = estados["estados"][estado]["estado"]["estadosFuturos"][0]
    mudaFundo(estados, falas, i)
    console.log("OPÇAO 1 FUNCIONA")
})
botaoOpcao2.addEventListener("click", function(){
    estado = estados["estados"][estado]["estado"]["estadosFuturos"][1]
    mudaFundo(estados, falas, i)
    console.log("OPÇAO 2 FUNCIONA")
})
botaoOpcao3.addEventListener("click", function(){
    estado = estados["estados"][estado]["estado"]["estadosFuturos"][2]
    mudaFundo(estados, falas, i)
    console.log("OPÇAO 3 FUNCIONA")
})