let textContactenado = ''; 

let nombres = ["Alice", "Bob", "Charlie", "David"];

for(let i = 0; i < nombres.length; i++) {
    textContactenado += nombres[i]
    if(i < nombres.length - 1) {
        textContactenado += ', '
    }
}

console.log(textContactenado)