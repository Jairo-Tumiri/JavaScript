/*Crea un algoritmo que solicite al usuario uno o más valores ingresados por prompt(),
 compare las entradas y, en función de ciertas condiciones, muestre un resultado.*/


// const USUARIO = "Jhon Jairo"
// let usuario = prompt("ingresar el nombre nuavamente")
// let edad = prompt("ingresar la edad")

// if(USUARIO === usuario){
//     alert("USTED A INGRESADO CORRETAMENTE; usted tiene " + edad + " años");
// }else{
//     alert("USUARIO INCORRECTO!!!!")
// }

/* Crea un algoritmo que solicite al usuario uno o más valores ingresados por prompt(), compare las entradas y, en
 función de ciertas condiciones, muestre por consola o alert() el resultado según los valores ingresados y las 
 condiciones cumplidas.
 */

let usuario = prompt("ingresar usuario");
let edad = parseInt(prompt("ingresar la edad"));
let mes = prompt("ingresar el mes");
let año = parseInt(prompt("ingresar el año de nacimiento"));

(edad === (2022 - año))
? alert(usuario +"nacio en "+año+" ; la edad es: "+edad)
: alert("ingreso incorrectamente la edad o el año")





/* Formato: Página HTML y código fuente en JavaScript en archivo .js vinculado al HTML.

Sugerencia: Tener en cuenta que los valores obtenidos por prompt() son string, si se busca operar con números hay que 
parsearlos antes y si van a usar cadenas recordar tener cuidado con mayúsculas y minúsculas en las comparaciones de
igualdad. (Ej. “Hola” y “HOLA” no son iguales) */



/* Aspectos a incluir:
Archivo HTML y Archivo JS, referenciado en el HTML por etiqueta <script src="js/miarchivo.js"></script>, que incluya
 la definición de un algoritmo en JavaScript que emplee instrucciones condicionales.
Ejemplo:
Pedir número mediante prompt y si es mayor a 1000 mostrar un alert.
Pedir un texto mediante prompt, y si es igual a "Hola" mostrar un alerta por consola.
Pedir un número por prompt y evaluar si está entre 10 y 50. En caso positivo mostrar un alert.
 */






