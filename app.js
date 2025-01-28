console.log("hola mundo:")
const nombre= "Agustin"
//const es constante

let apellido= "Schlotthauer"
//let puede ser variable

console.log("nombre:", nombre)
console.log("apellido:", apellido)



const alumno= {
    nombre: "Agustin",
    apellido: "Schlotthauer",
    edad: "27"
}

alumno.domicilio= "Bolivia 1235"

console.log("alumno:", alumno)

//funcion: bloque de codigo reutiizable que puede recibir parametros y/o retornar un valor
function nombredelafuncion() {
    console.log("funcion clasica")
}
nombredelafuncion()
//funcion anonima es cuando no le pongo nombre a la funcion
const funcionanonima= function (){
    console.log ("funcion anonima")
}
funcionanonima()

const FuncionFlecha = (a,b)=>{
    return (a+b) //retorno explicito (le digo a la funcion que diga a+b)
}
const FuncionFlecha2 = (a,b)=> a+b //retorno implicito 

const resultado= FuncionFlecha(2,5)
console.log (resultado)

const nose= FuncionFlecha2 (2,5)
console.log (nose)


//scope: es el alcance de una variable o funcion dentro de un contexto dado
const nombredos= "daniel"
function saludar (){
    const nombredos = "leonardo"
    console.log ("hola. como estas?" , nombredos)
}
console.log(nombredos)
saludar()


//ternario es como un if simplificado
//condicion ? caso verdadero : caso falso 
// if (condicion) { caso verdadero} else {caso falso}
const años=15
console.log(`Hola como estas ${años>= 18 ? `sos mayor` : `sos menor`}`)


//clases sirven para distanciar objetos "es como un plano de una casa"
class Persona {
    constructor(nombre, apellido, edad, direccion){
        this.nombre= nombre;
        this.apellido= apellido;
        this.edad= edad;
        this.direccion= direccion; 
    }
}
const personal = new Persona ("Daniel", "Gutierrez", 20, "Bolivia 1235")// <- this
personal.nombre

//funciones constructoras, lo mismo que las clases 
function Personas(nombre, apellido, edad, direccion) {
 this.nombre=nombre
 this.apellido=apellido
 this.edad=edad
 this.direccion=direccion
}