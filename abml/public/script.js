const equipo1 = [];
const equipo2 = [];

const arqueros = [
  { nombre: "Edu", posicion: "ARQ", estado: 4 },
  { nombre: "Seba", posicion: "ARQ", estado: 3 },
];

const jugadores = [
  { nombre: "Guido", posicion: "DEL", estado: 4 },
  { nombre: "Fede", posicion: "DEL", estado: 2 },
  { nombre: "Leo", posicion: "DEF", estado: 4 },
  { nombre: "Joaquín", posicion: "DEL", estado: 3 },
  { nombre: "Agus", posicion: "DEF", estado: 2 },
  { nombre: "Chapa", posicion: "DEL", estado: 1 },
  { nombre: "Ale", posicion: "DEF", estado: 4 },
  { nombre: "Pablo", posicion: "DEF", estado: 3 },
];

equipo1.push(arqueros[0]);
equipo2.push(arqueros[1]);

const defensores = jugadores.filter(jugador => jugador.posicion === "DEF").sort(() => Math.random() - 0.5);
const delanteros = jugadores.filter(jugador => jugador.posicion === "DEL").sort(() => Math.random() - 0.5);

equipo1.push(defensores[0], defensores[1], delanteros[0], delanteros[1]);
equipo2.push(defensores[2], defensores[3], delanteros[2], delanteros[3]);

console.table(equipo1);
console.table(equipo2);