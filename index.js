//let numeros={}
//for (let i=1; i<=10; i++){
    //const numeroRandom = Math.round(Math.random() * 10 + 1)
  //  numeros[numeroRandom]= numeros[numeroRandom]+1 || 1
//}

//console.log(numeros)
//console.log("Fin del proceso.")



//const crypto = require("crypto")
//const saludo= ()=> {
//    console.log("hola como estas")

//}

//module.export ={

//}





import moment from 'moment'
const today= moment()
const cumple= moment([2000,5,6])
console.log (cumple.isValid())

const diff=today.diff(cumple, 'years')
console.log({diff})