// Organización de datos

interface Reservacion {
  id: number;       // identificador
  cliente: string;  // nombre del cliente
  personas: number; // cantidad de personas
  zona: string;     // "interior" o "terraza"
}

// Arreglo tipado: solo acepta objetos con la forma de Reservacion.
// 4 reservaciones: ids distintos, 2 interior y 2 terraza,
// con 5+ personas en los ids 2 (terraza) y 3 (interior).
const reservaciones: Reservacion[] = [
  { id: 1, cliente: "Ana Martínez", personas: 2, zona: "interior" },
  { id: 2, cliente: "Carlos López", personas: 6, zona: "terraza" },
  { id: 3, cliente: "María Hernández", personas: 5, zona: "interior" },
  { id: 4, cliente: "Luis Ramírez", personas: 3, zona: "terraza" },
];

// ---------- 5. FUNCIÓN TIPADA ----------
// - Nombre que describe su responsabilidad: atender una reservación.
// - Recibe el arreglo como parámetro (tipado).
// - Retorno explícito: la reservación atendida, o undefined si la lista está vacía.
function atenderReservacion(lista: Reservacion[]): Reservacion | undefined {
  const atendida = lista.shift(); // retira la PRIMERA y guarda el resultado

  if (atendida) {
    console.log(`Atendido: ${atendida.cliente} (${atendida.personas} personas)`);
  } else {
    console.log("No hay reservaciones pendientes por atender.");
  }

  return atendida;
}

// ---------- DATOS INICIALES ----------
console.log("=== 1. Datos iniciales ===");
console.log(reservaciones);

// ---------- 2. REGISTRA NUEVAS RESERVACIONES ----------
console.log("\n=== 2. Registrar nuevas reservaciones ===");

// Normal: push agrega AL FINAL
reservaciones.push({ id: 5, cliente: "Sofía Castillo", personas: 4, zona: "interior" });

// Prioritaria: unshift agrega AL INICIO
reservaciones.unshift({ id: 6, cliente: "Elena Flores (prioritaria)", personas: 2, zona: "terraza" });

console.log("Lista antes de atender (la prioritaria debe ir primero):");
console.log(reservaciones);

// ---------- 3. ATIENDE UNA RESERVACIÓN (usando la función) ----------
console.log("\n=== 3. Atender una reservación ===");

// 1.ª llamada: lista con datos
const atendida = atenderReservacion(reservaciones);
console.log("Resultado guardado:", atendida);

// 2.ª llamada: situación distinta, lista vacía
const listaVacia: Reservacion[] = [];
atenderReservacion(listaVacia);

// ---------- 4. BUSCA Y CONSULTA ----------
console.log("\n=== 4. Buscar y consultar ===");

// Búsqueda por id: caso que SÍ existe
const idExistente = 2;
const encontrada = reservaciones.find((r) => r.id === idExistente);
if (encontrada) {
  console.log("Reservación encontrada:", encontrada);
} else {
  console.log(`No existe una reservación con id ${idExistente}.`);
}

// Búsqueda por id: caso que NO existe
const idInexistente = 99;
const noEncontrada = reservaciones.find((r) => r.id === idInexistente);
if (noEncontrada) {
  console.log("Reservación encontrada:", noEncontrada);
} else {
  console.log(`No existe una reservación con id ${idInexistente}.`);
}

// Filtro con DOS condiciones (ambas deben cumplirse con &&)
const cantidadAntes = reservaciones.length;
const terrazaGrandes = reservaciones.filter(
  (r) => r.zona === "terraza" && r.personas >= 5
);
const cantidadDespues = reservaciones.length;

console.log("\nTerraza con 5 o más personas:");
if (terrazaGrandes.length > 0) {
  console.log(terrazaGrandes);
} else {
  console.log("No hay reservaciones de terraza con 5 o más personas.");
}

// ---------- 6. COMPRUEBA EL ESTADO FINAL ----------
console.log("\n=== 6. Estado final ===");
console.log("Reservaciones pendientes:", reservaciones);
console.log("Cantidad pendiente:", reservaciones.length);
console.log("Coincidencias del filtro:", terrazaGrandes.length);
console.log(`Antes de filtrar: ${cantidadAntes} | Después de filtrar: ${cantidadDespues}`);
console.log("¿El filtro conservó todos los registros?", cantidadAntes === cantidadDespues);

// 4 iniciales + 1 push + 1 unshift - 1 atendida (shift) = 5
const cantidadEsperada = 4 + 1 + 1 - 1;
console.log("¿El estado final coincide con las operaciones?", reservaciones.length === cantidadEsperada);