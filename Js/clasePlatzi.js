//Creación de string

const primeraOpcion = 'Texto primer';
const segundaOpcion = "texto segunda";
const terceraOpcion =`tercer texto`;

// 1. Contatenación: Opción +
const direccion = 'Calle falsa 123';
const ciudad = 'Ciudad Autónom';
const dirCompleta = 'Mi dirección completa es ' + direccion + ciudad;
console.log(dirCompleta);

const dirCompletaConEspacio = 'Mi direccion completa es ' + direccion + ' ' + ciudad
console.log(dirCompletaConEspacio);

// 2. Concatenación: Template Literals
const nombre = 'David';
const pais = 'Colombia';
const presentacion = `Hola, soy ${nombre} de ${pais}`
console.log(presentacion)

// 3. Concatenación: join()
const primeraParte = 'me encanta';
const segundaParte = 'la gente de';
const terceraParte = 'Colombia';
const pensamiento = [primeraParte, segundaParte, terceraParte]
console.log(pensamiento.join(' '))

// 4. Concatenación: concat()
const hobbie1 = 'leer'
const hobbie2 = 'caminar por el bosque'
const hobbie3 = 'jugar video juegos'
const hobbies = 'Mis hobbies son: '.concat(hobbie1,', ', hobbie2,', ', hobbie3,'.')
console.log(hobbies)

// Caracteres de escape
//const whatDoIdo = 'I'm Software Enginner'

// 1. Escape alternativo 
const escapeAlternativo = "I'm Software Enginner"

// 2. Barra invertida
const barraInvertida = 'I\'m Software Enginner'

// 3. Barra invertida
const barraComillaInvertida = `I'm Software Enginner`

// Escritura de Strings Largos
/* 
Las rosas son rojas, 
las Violetas son azules
caracter inesperado, 
en la línea 86.
*/

const poema = 'Las rosas son rojas, \n'+
'las violetas son azules,\n'+
'pero no me importa\n'+
'el color que tienen.\n'+
'Caracter inesperado,\n'+
'en la línea 86.';

console.log(poema);

const poema2 = 'Las rosas son rojas, \n\
las violetas son azules,\n\
pero no me importa\n\
el color que tienen.\n\
Caracter inesperado,\n\
en la línea 86.';
console.log(poema2)



const poema3 = `Las rosas son rojas,
las violetas son azules,
pero no me importa
el color que tienen.
Caracter inesperado,
en la línea 86.`;
console.log(poema3)

//String primitivos 
const stringPrimitivo = 'Soy un string primitivo'
console.log(typeof stringPrimitivo)

const stringPrimitivoTambien = String('Soy un string primitivo')
console.log(typeof stringPrimitivoTambien)

//String objeto 
const stringObjeto = new String("Soy un string objeto")
console.log(typeof stringObjeto)

// Acceder a caracteres 

const saludo = ' Hola. ¿Cómo estás? '
console.log(saludo[0]) // H
console.log(saludo[1]) // o
console.log(saludo.charAt(2))  //muestra el carácter.
console.log(saludo.indexOf('á')) // muestra el índice. 
console.log(saludo.indexOf('Cómo')) //cuenta el indice dónde empieza la palabra. 
console.log(saludo.indexOf('como')) // buscar algo queno exite, sale -1
console.log(saludo.lastIndexOf('o')) //última letra que hay
console.log(saludo.slice(3, 9)) //extrae los carácteres en el rango
console.log(saludo.split(' ')) //divide por espacio, crea un array
console.log(saludo.length) // saber la lontitud del string
console.log(saludo.toLocaleUpperCase()) //para convertir a mayusculas
console.log(saludo.toLowerCase()) // para convertir a minusculas
console.log(saludo.split('.')) //divide por el punto, crea un array

const saludoSinEspacios = saludo.trim() //quita los espacios al inicio y final del texto
console.log(saludoSinEspacios); 

const nuevoSaludo = saludo.replace('Cómo', 'eramos') // sirve para buscar una palabra en el código y cambiarla
console.log(nuevoSaludo)

// clase Tipo de dato primitivo: number
const numPrimitivo = 45
console.log(typeof numPrimitivo)

const numObjeto = new Number(87)
console.log(numObjeto + " Es un número entero? " + Number.isInteger(numObjeto));

// Propiedades y métodos propios de los tipos de datos en JavaScript

// Booleanos
const isActive = true // para decir que algo es verdad
const hasPermisson = false // una forma de escribir

//Conversión implícita

const result = 5 > 3
console.log(result)

const names = 'Platzi'
console.log(!!names) // nos dice si existe, es explicita

//Conversión explícita

const value = 1
const explitBoolean = Boolean(value)
console.log(explitBoolean)

// Null
const nullValue = null
console.log(nullValue === null) // nos dice si es null o no
console.log(nullValue)
console.log(typeof nullValue)

// undefined

let name
console.log(name)


//Symbol, sirve para escribir valores únicos
const uniqueId = Symbol('id')
console.log(uniqueId)

const ID = Symbol('id')
let user = {}
user[ID] = '1234'
console.log(user)

//BigInt para número muy grandes o calculos complejos matematicos 

const bigNumber = 1202455465451634546161456456151446n
console.log(bigNumber)

const numberOfParticulesTheUniverse = 10000000000000000000n

// Explicita Type Casting 

const string1 = '42'
const integer = parseInt(string1)
console.log(integer)
console.log(typeof integer)

const stringDecimal = '3.14'
const float = parseFloat(stringDecimal)
console.log(float)
console.log(typeof float)

const binary = '1010'
const decimal = parseInt(binary, 2)
console.log(decimal)
console.log(typeof decimal)

// Implicit Type Casting 

const sum = '5' + 3 // convierte el número a string, y concatena
console.log(sum)

const sumWithBoolean = '3' + true //convierte el true a string y concatena
console.log(sumWithBoolean)


const sumwithNumber = 2 + true  // aquí realiza una suma
console.log(sumwithNumber)

const stringVAlue = '10'
const numberValue = 10
const booleanValue = true 

console.log(stringVAlue + stringVAlue)
console.log(stringVAlue + numberValue)
console.log(stringVAlue + booleanValue)

