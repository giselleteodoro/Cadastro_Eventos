let datadoEvento = new Date('2021-12-31 12:00:00')
let dataAtual = new Date ()


if(datadoEvento > dataAtual){
    console.log("Permitir o Cadastro")
} else {
    console.log("Não Permitir o Cadastro")
}

const idadeMinima = 18
let idadeAtual = 30 
if(idadeAtual > idadeMinima){
    console.log("idade compatível, permitir o cadastro")
}else{
    console.log("idade incompatível, não permitir cadastro")
}

let eventoParticipante = ['Luis', 'Maria', 'José']
console.log(eventoParticipante)

const numeroMaximoParticipante = 100
if(eventoParticipante.length <= numeroMaximoParticipante){
    console.log("cadastro permitido, numero de participante menor que 100")
}else{
    console.log("cadastro não pertimido, numero de participantes maior que 100")
}
