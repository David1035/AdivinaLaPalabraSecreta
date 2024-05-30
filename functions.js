const calificaciones = {
    Alice: 85,
    Bob: 92,
    Charlie: 87,
    David: 90
};

let sumaCalificaciones = 0;
let numeroEstudiantes = 0;
let calificacionMaxima = 0;
let mejorEstudiante = "";

// Iterar sobre el objeto calificaciones usando for...in
for (let estudiante in calificaciones) {
    sumaCalificaciones += calificaciones[estudiante];
    numeroEstudiantes += 1;
    if (calificaciones[estudiante] > calificacionMaxima) {
        calificacionMaxima = calificaciones[estudiante];
        mejorEstudiante = estudiante;
    }
}

// Calcular la calificación promedio
let calificacionPromedio = sumaCalificaciones / numeroEstudiantes;

// Imprimir el estudiante con la calificación más alta y la calificación promedio
console.log(`El mejor estudiante es ${mejorEstudiante} y tiene una calificación de ${calificacionMaxima}, siendo la calificación más alta. La nota promedio de los estudiantes es ${calificacionPromedio}.`);
