"use strict";
// Organización de datos
Object.defineProperty(exports, "__esModule", { value: true });
//Datos iniciales: arreglo de reservaciones
const reservaciones = [
    { id: 1, cliente: "Ana Martínez", personas: 2, zona: "interior" },
    { id: 2, cliente: "Carlos López", personas: 6, zona: "terraza" },
    { id: 3, cliente: "María Hernández", personas: 5, zona: "interior" },
    { id: 4, cliente: "Luis Ramírez", personas: 3, zona: "terraza" },
];
// =====Función que atiende las reservaciones=====
// - Recibe el arreglo como parámetro (tipado).
// - Retorno explícito: la reservación atendida, o undefined si la lista está vacía.
function atenderReservacion(lista) {
    const atendida = lista.shift(); // retira la PRIMERA y guarda el resultado
    if (atendida) {
        console.log(`Atendido: ${atendida.cliente} (${atendida.personas} personas)`);
    }
    else {
        console.log("No hay reservaciones pendientes por atender.");
    }
    return atendida;
}
console.log("=== Datos iniciales ===");
console.log(reservaciones);
// ---------- REGISTRA NUEVAS RESERVACIONES ----------
console.log("\n=== 1. Registrar nuevas reservaciones ===");
// Reservación normal
reservaciones.push({ id: 5, cliente: "Sofía Castillo", personas: 4, zona: "interior" });
// Reservación prioritaria. Se agrega al principio
reservaciones.unshift({ id: 6, cliente: "Elena Flores (prioritaria)", personas: 2, zona: "terraza" });
console.log("Lista antes de atender (la prioritaria debe ir primero):");
console.log(reservaciones);
// ---------- ATIENDE UNA RESERVACIÓN -----------
console.log("\n=== 2. Atender una reservación ===");
// 1.ª llamada: lista con datos
const atendida = atenderReservacion(reservaciones);
console.log("Resultado guardado:", atendida);
// 2.ª llamada: situación distinta, lista vacía
const listaVacia = [];
atenderReservacion(listaVacia);
// ---------- 4. BUSCA Y CONSULTA ----------
console.log("\n=== 3. Buscar y consultar ===");
// Búsqueda por id: caso que SÍ existe
const idExistente = 2;
const encontrada = reservaciones.find((r) => r.id === idExistente);
if (encontrada) {
    console.log("Reservación encontrada:", encontrada);
}
else {
    console.log(`No existe una reservación con id ${idExistente}.`);
}
// Búsqueda por id: caso que NO existe
const idInexistente = 99;
const noEncontrada = reservaciones.find((r) => r.id === idInexistente);
if (noEncontrada) {
    console.log("Reservación encontrada:", noEncontrada);
}
else {
    console.log(`No existe una reservación con id ${idInexistente}.`);
}
// Filtro con DOS condiciones (ambas deben cumplirse con &&)
const cantidadAntes = reservaciones.length;
const terrazaGrandes = reservaciones.filter((r) => r.zona === "terraza" && r.personas >= 5);
const cantidadDespues = reservaciones.length;
console.log("\nTerraza con 5 o más personas:");
if (terrazaGrandes.length > 0) {
    console.log(terrazaGrandes);
}
else {
    console.log("No hay reservaciones de terraza con 5 o más personas.");
}
// ---------- 6. COMPRUEBA EL ESTADO FINAL ----------
console.log("\n=== 4. Estado final ===");
console.log("Reservaciones pendientes:", reservaciones);
console.log("Cantidad pendiente:", reservaciones.length);
console.log("Coincidencias del filtro:", terrazaGrandes.length);
console.log(`Antes de filtrar: ${cantidadAntes} | Después de filtrar: ${cantidadDespues}`);
console.log("¿El filtro conservó todos los registros?", cantidadAntes === cantidadDespues);
// 4 iniciales + 1 push + 1 unshift - 1 atendida (shift) = 5
const cantidadEsperada = 4 + 1 + 1 - 1;
console.log("¿El estado final coincide con las operaciones?", reservaciones.length === cantidadEsperada);
//# sourceMappingURL=reservaciones.js.map