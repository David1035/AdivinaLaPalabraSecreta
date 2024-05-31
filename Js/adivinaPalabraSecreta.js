/*
El usuario tiene 3 intentos para adivinar la palabra oculta

Requerimientos:

-- El juego debe tener una palabra oculta.
-- El juego puede dar 1 pista de la palabra
-- El usuario debe ingresar una suposición
-- El juego debe verificar si la suposicion del usuario es correcta. 
-- El juego debe tener un nu´mero limitado de intentos
-- El juego debe trminar cuando el usuario escoga la palabra o se quede sin intentos. 
*/

let contador = 0;
let palabraOculta = 'PHP';

function checkWord() {
    let usuarioPalabra = document.getElementById('inputUser').value;
    contador++;

    if (usuarioPalabra === palabraOculta) {
        document.getElementById('result').innerText = '¡Adivinaste!';
        disableInput();
    } else if (contador >= 3) {
        document.getElementById('result').innerText = 'Lo siento, no adivinaste.';
        disableInput();
    } else {
        document.getElementById('result').innerText = `Intento ${contador} de 3. Inténtalo de nuevo.`;
    }
}

function disableInput() {
    document.getElementById('inputUser').disabled = true;
    document.getElementById('button').disabled = true;
}

function resetGame() {
    contador = 0;
    document.getElementById('inputUser').value = '';
    document.getElementById('inputUser').disabled = false;
    document.getElementById('button').disabled = false;
    document.getElementById('result').innerText = '';
}
