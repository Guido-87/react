let equipo1 = [];
let equipo2 = [];

const arqueros = [
    {nombre: "Edu", posicion: "ARQ", estado: 4},
    {nombre: "Seba", posicion: "ARQ", estado: 3},
];

const jugadores = [
    {nombre: "Guido", posicion: "DEL", estado: 4},
    {nombre: "Santi", posicion: "DEL", estado: 4},
    {nombre: "Leo", posicion: "DEF", estado: 3},
    {nombre: "Carli", posicion: "DEL", estado: 4},
    {nombre: "Chara", posicion: "DEF", estado: 4},
    {nombre: "Eli", posicion: "DEL", estado: 4},
    {nombre: "Esteban", posicion: "DEF", estado: 4},
    {nombre: "Pablo", posicion: "DEF", estado: 3},
];

if (equipo1.length === 0) {
    const index = Math.floor(Math.random() * arqueros.length);
    equipo1.push(arqueros[index]);
    arqueros.splice(index, 1);
}
equipo2.push(arqueros[0]);

let defensores = 0;
let delanteros = 0;
for (let i=0 ; i < 4 ; i++) {
    const index = Math.floor(Math.random() * jugadores.length);
    if (jugadores[index].posicion === "DEF" && defensores <= 2) {
        defensores++;
    }
    if (jugadores[index].posicion === "DEL" && delanteros <= 2) {
        delanteros++;
    }
    equipo1.push(jugadores[index]);
    jugadores.splice(index, 1);
}
equipo2.push(...jugadores);

console.table(equipo1);
console.table(equipo2);