
var estado = 0
var i = 0

var estados = {
    "estados":[{
        "estado":{
            "opcoes":[
                "Posso ir ao parque perto de casa, gosto de ficar lá",
                "Posso ir ver minha Avó ingrid, ela tem o melhor bolo de cenoura do mundo",
                "Posso ir ver minha melhor amiga Amanda, eu a conheço desde sempre"
            ],
            "estadosFuturos":[1,2,3],
            "cenarioURL":"imagens/rua.jpg",
            "personagensURL":["imagens/khalisto.png", "imagens/khalisto.png"],
            "pesonagemDireitaA":1000
        }
        
    }]
}
var falas = {
    "dialogos":[{
        "falas":[
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
        ],
        "numeroDeFalas":6
    }]
}



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
personagemDireita.style.opacity = 0
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
if(i=estados["estados"][estado]["estado"]["pesonagemDireitaA"]){
    personagemDireita.style.opacity = 1
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