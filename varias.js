const arrayDeCadenas = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];

function verificarCadenaEnArray(i){
    if(arrayDeCadenas.some(j => j === i) === true){
        console.log(arrayDeCadenas.indexOf(i) + ', ' + arrayDeCadenas.lastIndexOf(i)) 
    } else {
        console.log(arrayDeCadenas.indexOf(i))
    }
}

verificarCadenaEnArray('apple') // 0, 5