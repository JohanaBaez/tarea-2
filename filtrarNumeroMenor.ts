var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9]; 
var parametro = numeros.filter(element => element < 5);

console.log("Arreglo original: ", numeros);
console.log("Se filtraron numeros menores a: ", 5);
console.log("Arreglo despues del filtrado: ", parametro);