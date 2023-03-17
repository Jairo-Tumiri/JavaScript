console.clear()
/* 
1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.
*/

// const contador = (dab) =>{
//     let i = 0
//     for (const valor of dab) {
//         i++
//     }
//     return i
// }

// const contador = (dab = "") => (!dab)
// ?console.warn("la cadena esta vacia")
// :console.log(`la cantidad de caracteres es ${dab.length}`);

// contador("HOLA MUNDO")
/* ==================================================================================================== */








/*
2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".*/


// const recortar = (string, numero) => {
//     let dou = "";
//     for (const valor of string) {
//         if (dou.length < numero) {
//             dou = dou + valor
//         }
//     }
//     return dou
// }

// const recortar = (string, numero) => {
//     let dou = string.split("");
//     let dav = "";
//     for (le t i = 0; i < numero; i++) {
//         dav = dav + dou[i]
//     }
//     return dav
// }

// const recortar = (string, numero) => 
// (!string || !numero)
// ? console.warn("la cadena esta vacia")
// : console.log(string.slice(0,numero));

// recortar("Hola Mundo", 4)
/* ==================================================================================================== */






/*
3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].*/


// const devolver = (string,caracter) =>
//     (!string || !caracter)
//     ? console.warn("La cadena esta vacia")
//     : console.log(string.split(caracter))

// devolver('hola que tal', ' ')
/* ==================================================================================================== */






/*
4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo. */

// const repetir = (string,repetire) => {
//   let dav = "";

//   for (let i = 0; i < repetire; i++) {
//       dav = dav + " " + string
//   }

//   return dav
// }

//  const repetir = (string,repetire) =>
//     (!string || !repetire)
//     ?console.warn("La cadena esta vacia")
//     :console.log(string.repeat(repetire))


// repetir('Hola Mundo', 4)
/* ==================================================================================================== */






/* 5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH". */



// const reversa = (string = "") =>{
//   if (!string) {
//     return console.warn("La cadena de texto esta vacia")
//   }else{   
//     let arr = string.split("").reverse();
//     let str = "";
//     for (const valor of arr) {
//       str = str + valor
//     }
//     return console.log(str)
//   }

// }


/* const reversa = (string = "") =>
  (!string)
  ? console.warn("La cadena de texto esta vacia")
  : console.log(string.split("").reverse().join(""));

reversa("Thiago")
reversa("Hola Mundo") */
/* ==================================================================================================== */




/* 6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2. */


/* const countString = (string = "", key = "") =>{
  if(!string)return console.warn("el string esta vacio")
  if(!key)return console.warn("el key esta vacio")
  let arr = string.split(" ")
  // arr = arr.filter(a => a === key)
  let a = 0;
  for (const valor of arr) {
    if (valor === key) a++
  }
  return console.log(`La palabra ${key.toUpperCase()} se encontro ${a}`)
}

countString("hola mundo adios mundo", "Mundo")
 */
/* ==================================================================================================== */











/* 7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true. */

/* const palindromo = (string = "") =>{
  if(!string) return console.warn("el string esta vacio")
  let arr = string.split("").reverse()
  let str = "";
  for (const valor of arr) {
    str = str + valor
  }
  (string.toUpperCase() === str)
  ? console.log("Si es un palindromo")
  : console.log("No son iguales")

} */

/* const palindromo = (string = "") =>
  (!string)
  ? console.warn("el string esta vacio")
  : (string.toUpperCase().split("").reverse().join("") === string.toUpperCase())
    ? console.log("Es un palindromo")
    : console.warn("No es un palindromo");


palindromo("SALAS") */
/* ==================================================================================================== */







/* 8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5. */


/* const eliminar = (str, strcom) => {
  let stri = str.split(strcom);
  let dev = ""
  for (const valor of stri) {
    dev = dev + valor
  }
  console.log(dev)
} */

/* const eliminar = (str = "", strcom = "") =>
(!str || !strcom)
? console.war("la cadena esta vacia")
: console.log(str.split(strcom).join(""));


eliminar("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz")
eliminar("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.","o") */
/* ==================================================================================================== */

/* 9) Programa una función que obtenga un numero aleatorio entre 501 y 600. */

// const aletorio = () => {
//   let alet = 0
//   for (let i = 0; i < 1000; i++) {
//     alet = Math.trunc(Math.random()*1000)
//     if (alet >= 501 && alet <= 600) {
//       break;
//     }
//   }
//   return console.log(alet)
// }

// aletorio()





/* ==================================================================================================== */

/* 10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true. */

const capicua = (numero = undefined) =>
  (numero.toString().split("").reverse().join("") === numero.toString())
  ? console.log("Es capicua")
  : console.log("no es capicua");

capicua(2002)





/* ==================================================================================================== */

/* 11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120. */

const factorial = (numero = undefined) =>{
  let num = 1;
  for (let i = numero; i > 0; i--) {
    num = num * i
  }
  return console.log(num)
}

factorial(5)
