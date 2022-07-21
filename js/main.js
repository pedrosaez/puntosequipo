

var nombreEquipo = prompt("Informe el nombre del equipo");
var victorias = parseInt(prompt("Informe las victorias de su equipo"));
var empates = parseInt(prompt("Informe los empates de su equipo"));

var puntosTotal = (victorias * 3 + empates);

alert("El total de puntos de " + nombreEquipo + " es: " + puntosTotal);

if (puntosTotal > 28) {
alert("El equipo está mejor que el año pasado");
}

if (puntosTotal < 28) {
alert("El equipo está peor que el año pasado");
}

if (puntosTotal == 28) {
alert("El equipo está igual que el año pasado");
}