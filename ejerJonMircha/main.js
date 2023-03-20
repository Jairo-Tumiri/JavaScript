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


// const countString = (string = "", key = "") =>{
//   if(!string)return console.warn("el string esta vacio")
//   if(!key)return console.warn("el key esta vacio")
//   // let arr = string.split(" ")
//   // arr = arr.filter(a => a === key)
//   let a = 0;
//   for (const valor of string.split(" ")) {
//     if (valor === key) a++
//   }
//   return console.log(`La palabra ${key.toUpperCase()} se encontro ${a}`)
// }


// countString("hola mundo adios mundo", "mundo")








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


// const aletorio = () => console.info(Math.round((Math.random()*100)+500));
// aletorio()





/* ==================================================================================================== */

/* 10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true. */

// const capicua = (numero = undefined) =>
//   (numero.toString().split("").reverse().join("") === numero.toString())
//   ? console.log("Es capicua")
//   : console.log("no es capicua");

// capicua(2002)






/* ==================================================================================================== */

/* 11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120. */

// const factorial = (numero = undefined) =>{
// if (numero === undefined ) return console.log("no se envio ningun numero ")
// if (numero < 0 ) return console.log("no se puede ")
//   let num = 1;
//   for (let i = numero; i > 0; i--) {
//     num *= i
//   }
//   return console.log(num)
// }

// factorial(5)







/* ====================================================================================================*/

/* 12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true. */

// const primos = (numero = undefined) => {
//   if (typeof numero !== "number") return console.error("Esto no es un numero");
//   if (numero <= 1) return console.error(` el numero -> ${numero} no puede ser primo`);
//   if (!numero) return console.warn("La varible esta vacia");
//   let primo = true
//   for (let i = 2; i < numero; i++) {
//     if(numero % i === 0){
//       primo = false;
//       break;
//     }
//   }
//   return console.log(primo)
// }

// primos(-13)






/* ====================================================================================================*/

/* 13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar. */

// const parImpar = (numero = undefined) =>{
//   if (typeof numero !== "number") return console.error("Esto no es un numero");
//   if (!numero) return console.warn("La varible esta vacia");
//   return (numero % 2 === 0)
//   ? console.log(`El numero ${numero} es Par`)
//   : console.log(`El numero ${numero} es Impar`)
// }

// parImpar(29)






/* ====================================================================================================*/

/* 14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F. */

// const convercion = (numero = undefined, car = undefined) =>{
//   if(numero === undefined) return console.warn("No ingreso grasdos a convertir")
//   if(typeof numero !== "number") return console.warn("El numero "+numero+" ,No es un numero")

//   if(car === undefined) return console.warn("No ingreso el tipo de grados a convertir")
//   if(typeof car !== "string") return console.warn("La unidad "+car+" ,No es una cadena de Texto")

//   if(car.length !== 1 || !/(C|F)/.test(car)) return console.error("valor de unidad non reconocido")

//   let grados = 0;
//   if (car === "C") {
//     grados = ((numero * (9/5))+32).toFixed(2)
//     return console.log(`${grados}°F`)
//   }else{
//     grados = ((numero - 32)/(9/5)).toFixed(2)
//     return console.log(`${grados}°C`)
//   }

// }


// convercion(0,"C")


/* ====================================================================================================*/

/* 15) Programa una función para convertir números de base binaria a decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10.
 */
const binario = (numero = undefined, base = undefined) =>{
  if (!numero) return console.warn("El numero esta vacio");
  if (!base) return console.warn("La base esta vacia");
  if (typeof numero !== "number") return console.warn(`El tipo de dato no es un numero`);
  if (typeof base !== "number") return console.warn(`El tipo de base no es un numero`);

  let tem = 0;

  if (base === 2){
    numero.toString().split("").reverse().forEach((element, index) => { 
      tem += (parseInt(element) * Math.pow(2,index));
    });
    return console.log(tem)

  }else if(base === 10){
    tem = numero;
    let bin = [];
    for(let i = 0; i < numero; i++){
      bin[i] = (tem % 2)
      tem = Math.trunc(tem / 2)
      if ((tem / 2) === 0) {
        break;
      }
    }
    return console.log(bin.join(""))
  }else{
    return console.warn("solo se acepta base 2 y 10")
  }

}

binario(90,10)





/* ====================================================================================================*/

/* 16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800. */





/* ====================================================================================================*/

/* 17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020). */
