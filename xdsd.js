// Arreglos
let arreglo1 = [1, 2, 3, 4, 5];
let arreglo2 = [10, 20, 30, 40, 50];
let arreglo3 = [100, 200, 300, 400, 500];
let arreglo4 = [2, 4, 6, 8, 10];

// Métodos para arreglo1
let reduce1 = arreglo1.reduce((acum, curr) => acum + curr, 0); // Suma de los elementos
let filter1 = arreglo1.filter(x => x > 3); // Elementos mayores a 3
let map1 = arreglo1.map(x => x * 2); // Multiplicar por 2
arreglo1.forEach(x => console.log(x)); // Imprimir cada elemento

// Métodos para arreglo2
let reduce2 = arreglo2.reduce((acum, curr) => acum + curr, 0); // Suma de los elementos
let filter2 = arreglo2.filter(x => x > 30); // Elementos mayores a 30
let map2 = arreglo2.map(x => x - 5); // Restar 5
arreglo2.forEach(x => console.log(x)); // Imprimir cada elemento

// Métodos para arreglo3
let reduce3 = arreglo3.reduce((acum, curr) => acum + curr, 0); // Suma de los elementos
let filter3 = arreglo3.filter(x => x < 400); // Elementos menores a 400
let map3 = arreglo3.map(x => x / 10); // Dividir por 10
arreglo3.forEach(x => console.log(x)); // Imprimir cada elemento

// Métodos para arreglo4
let reduce4 = arreglo4.reduce((acum, curr) => acum + curr, 0); // Suma de los elementos
let filter4 = arreglo4.filter(x => x % 2 === 0); // Elementos pares
let map4 = arreglo4.map(x => x ** 2); // Elevar al cuadrado
arreglo4.forEach(x => console.log(x)); // Imprimir cada elemento

// Funciones flecha
let sinParametros = () => "Función sin parámetros";
let unParametro = x => `Función con un parámetro: ${x}`;
let dosParametros = (x, y) => `Suma de ${x} y ${y} es ${x + y}`;
let tresParametros = (x, y, z) => `Promedio de ${x}, ${y}, ${z} es ${(x + y + z) / 3}`;
let multiplicarPorTres = x => x * 3;

// Pruebas de las funciones
console.log(sinParametros()); // Función sin parámetros
console.log(unParametro(5)); // Función con un parámetro: 5
console.log(dosParametros(4, 7)); // Suma de 4 y 7 es 11
console.log(tresParametros(3, 6, 9)); // Promedio de 3, 6, 9 es 6
console.log(multiplicarPorTres(5)); // 15
