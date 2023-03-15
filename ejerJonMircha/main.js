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

/*
3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].*/


// const devolver = (string,caracter) =>
//     (!string || !caracter)
//     ? console.warn("La cadena esta vacia")
//     : console.log(string.split(caracter))

// devolver('hola que tal', ' ')


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

let string = "Nada Mas Que YO"

console.log(string.reverse())


/* 6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2. */




/* 7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true. */




/* 8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5. */


