console.clear();
console.log("https://github.com/makeitrealcamp/ejercicios-javascript")


/*==========CONDICIONAL==================*/

// const contrasenaValida = (contrasenia) =>{
//     if (contrasenia === "2Fj(jjbFsuj" || contrasenia == "eoZiugBf&g9") {
//         return true;
//     } else {
//         return false;
//     };
// };

// console.log(contrasenaValida("2Fj(jjbFsuj")); // true
// console.log(contrasenaValida("eoZiugBf&g9")); // true
// console.log(contrasenaValida("hola")); // false
// console.log(contrasenaValida("")); // false


/* ================ CALCULAR IMPUESTOS ================*/

// const calcularImpuestos = (edad, ingresos) => {
//     if ((edad >= 18) && (ingresos >= 1000)) {
//         ingresos = (ingresos*0.4)
//         return ingresos
//     } else {
//         return 0
//     }
// }

// // código de prueba
// console.log(calcularImpuestos(18, 1000)) // 400
// console.log(calcularImpuestos(40, 10000)) // 4000
// console.log(calcularImpuestos(17, 5000)) // 0
// console.log(calcularImpuestos(30, 500)) // 0

/* ======================IMC indice de masa corporal============ */

// const bmi = (peso, altura) =>{
    
//     let imc = peso / Math.pow(altura,2)

//     if (imc < 18.5) {
//         return "Bajo de peso"
//     }else if(imc > 18.5 && imc < 24.9){
//         return "Normal"
//     }else if(imc > 25 && imc < 29.9){
//         return "Sobrepeso"
//     }else{
//         return "Obeso"
//     }

// }

// // código de prueba
// console.log(bmi(65, 1.8)) // "Normal"
// console.log(bmi(72, 1.6)) // "Sobrepeso"
// console.log(bmi(52, 1.75)) //  "Bajo de peso"
// console.log(bmi(135, 1.7)) // "Obeso"

/* ========== imprimir un arreglo =========== */

// const imprimirArreglo = (aray) =>{
//     for (const value of aray) {
//         console.log(value)
//     }
// }

// let boludo = [1, "Hola", 2, "Mundo"];

// // código de prueba
// console.log(imprimirArreglo(boludo))
// // 1
// // Hola
// // 2
// // Mundo

/* ================= NUMEROS DE LIKES =================== */

// const likes = (numero) => {
//     if (numero > 1000 && numero < 1000000) {
//         numero = Math.trunc(numero / 1000)
//         numero = numero + "K"
//         return numero
//     } else if(numero > 999999){
//         numero =  Math.trunc(numero / 1000000)
//         numero = numero + "M"
//         return numero
//     }else{
//         return numero
//     }
// }

// // código de prueba
// console.log(likes(983)) // "983"
// console.log(likes(1900)) // "1K"
// console.log(likes(54000)) // "54K"
// console.log(likes(120800)) // "120K"
// console.log(likes(25222444)) // "25M"

/* =====================FizzBuzz======================== */

// const fizzBuzz = (numero) =>{
//     if ( (numero % 3 == 0) && (numero % 5 == 0) ) {return "fizzbuzz"} 
//     else if (numero % 5 == 0){return "buzz"}
//     else if (numero % 3 == 0){ return "fizz"}
//     else{ return numero};
// };

// // código de prueba
// console.log(fizzBuzz(6)); // "fizz"
// console.log(fizzBuzz(20)); // "buzz"
// console.log(fizzBuzz(30)); // "fizzbuzz"
// console.log(fizzBuzz(8)); // 8

/* ======== CONTAR RANGO DE NUMEROS ============== */

// const contarRango = (uno,dos) => {
//     for (let i = 0; uno < dos; i++) {
//         uno++
//         if (uno === dos) {
//             return i
//         };
//     }
// }

// // código de prueba
// console.log(contarRango(1, 9)); // 7
// console.log(contarRango(1332, 8743)); // 7410
// console.log(contarRango(5, 6)); // 0

/* ============= Sumar rango de numeros ================= */

// const sumarRango = (uno, dos) => {

//     let suma = 0;
//     let tres = 0

//     for (let i = 0; uno < dos; i++) {
       

//         suma += uno 

//         uno++

//     }
//     tres = suma + uno

//     if (tres == dos) {
//         tres =  tres - dos
//         return tres
//     } else {
//         return tres   
//     }

// }

// // código de prueba
// console.log(sumarRango(0, 10)) // 55
// console.log(sumarRango(12, 14)) // 39
// console.log(sumarRango(5, 5)) // 0

/* =========== numero de ases (letra "a") ================ */

// const numeroDeAes = (string) => {
//     let contador = 0;
//     for (const valor of string) {
//         if (valor == "a"){
//             contador++
//         }
//     }
//     return contador
// }


// const numeroDeAes = (string) => {
//     let contador = 0;
//     for (let i = 0; i < string.length; i++) {
//         valor = string[i]
//         if (valor == "a") {
//             contador++
//         }
//     }
//     return contador
// }

// código de prueba
// console.log(numeroDeAes("abracadabra")) // 5
// console.log(numeroDeAes("etinol")) // 0
// console.log(numeroDeAes("")) // 0

/* ============== Numero de caracteres ============== */

// const numeroDeCaracteres = (string,caracter) => {
//     let contador = 0;
//     for (const valor of string) {
//         if ( valor === caracter) {
//             contador++
//         }
//     }
//     return contador
// }

// // código de prueba
// console.log(numeroDeCaracteres("Hola Mundo", "o")) // 2
// console.log(numeroDeCaracteres("MMMMM", "m")) // 0
// console.log(numeroDeCaracteres("eeee", "e")) // 4

/* =============== sumar arreglo =================== */

// const sumarArreglo = (arreglo) =>{

//     let unidad = 0;
//     for (const valor of arreglo) {
//         unidad += valor
//     }
//     return unidad
// }

// // código de prueba
// console.log(sumarArreglo([3, 1, 2])) // 6
// console.log(sumarArreglo([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])) // 55
// console.log(sumarArreglo([])) // 0

/* ============== multiplicar arreglos ========= */

// const multiplicarArreglo = (arreglo) =>{
//     let multi = 1;
//     for (const valor of arreglo) {
//         multi *= valor
//     }
//     return multi
// }

// // código de prueba
// console.log(multiplicarArreglo([4, 1, 2, 3])) // 24
// console.log(multiplicarArreglo([1, 2, 3, 4, 5, 6, 7, 8])) // 40320
// console.log(multiplicarArreglo([])) // 1

/* ============= remover ceros ============== */

// const removerCeros = (arreglo) =>{
//     let remover = [];
//     let i = 0;
//     for (const valor of arreglo) {
//         if(valor !== 0){
//             remover[i] = valor
//             i++
//         }
//     }
//     return remover
// }


// // código de prueba
// console.log(removerCeros([0, 1, 0, 2, 0, 3])) // [1, 2, 3]
// console.log(removerCeros([9, 3, 6, 4])) // [9, 3, 6, 4]
// console.log(removerCeros([0, 0, 0])) // []

/* ============== ADN =============== */

// const transcribir = (string) =>{
//     let transcribido = ""
//     for (const valor of string) {
//         switch (valor) {
//             case "G":
//                 transcribido = transcribido + "C"
//                 break;
//             case "C":
//                 transcribido = transcribido + "G"
//                 break;
//             case "T":
//                 transcribido = transcribido + "A"
//                 break;
//             case "A":
//                 transcribido = transcribido + "U"
//                 break;
//             default:
//                 transcribido = transcribido + ""
//                 break;
//         }
//     }
//     return transcribido
// }

// // código de prueba
// console.log(transcribir("ACGT")) // "UGCA"
// console.log(transcribir("ACGTGGTCTTAA")) // "UGCACCAGAAUU"

let transcribido = "";
let object = "ACGT";

const valores = {
    G:"C",
    C:"G",
    T:"A",
    A:"U"
}

for (const iterator of object) {
    transcribido = transcribido+valores[`${iterator}`]
}
console.log(transcribido)