const misNumeros:number[] = [1, 2, 3, 4, 5, 6, 7]
const milimite:number= 4;
let almacen:number [] = []
let misuma=0
for (let i = 0; i <misNumeros.length; i++){
    let numerosasumar = misNumeros[i]
    if(numerosasumar > milimite){
        almacen.push(numerosasumar)
    }
}
console.log(almacen)
for(let i = 0; i <almacen.length; i++){
    misuma += almacen[i]
}
console.log("La suma del arreglo es:" + misuma);
