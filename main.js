
console.clear()
// ARRAYS -> arreglos

// const a = [];
// console.log(a);
// const b = [1, true , "Hola", ["A", "B", "C"]];
// console.log(b)
// console.log(b.length)
// console.log(b[2])
// console.log(b[3][0])

// const c = Array.of("a","b","c",1,2,3); //Otra forma de crear arreglos
// console.log(c)

// const d = Array(100).fill(false); //1° parentesis la cantidad de arreglos y el 2° por lo que va a ser llenado
// console.log(d);

// const colores = ["rojo", "verde", "azul"]
// console.log(colores)

// colores.push("Negro") //agrega un nuevo elemento al array
// console.log(colores)

// colores.pop()//elimina el ultimo arrys
// console.log(colores)

// colores.forEach(function(el, index){
//     document.write(`<ul>
//                         <li id="${index}">${el}</li>
//                     </ul>`)
// });



// ===================================================
// OBJETOS

// const b = {};
// console.log(b);

// /*Dentro de un objeto a las variables se le van a
// llamar atributos/propiedades y a las funciones se 
// les llama métodos */

// const yo = {
//     nombre: "jairo",
//     apellido: "Tumiri",
//     edad: 18,
//     pasatiempos:["Tocar guitarra", "programar", "jugar"],
//     soltero: true,
//     contacto: {
//         email: "jhon.jairo.tumiri@gmail.com",
//         twitter: "JhonTumiri",
//         movile: "1141430021",
//     },
//     saludar: function(){
//         console.log(`hola :)`)
//     },

//     decirMinombre:function(){
//         console.log(
//             `hola me llamo ${this.nombre} ${this.apellido} y tengo ${this.edad} años y me puedes seguir como ${this.contacto.twitter} en twitter`)
//     }
// }

// console.log(yo)
// // ACCEDER A DATOS
// console.log(yo["nombre"])
// console.log(yo["apellido"])
// console.log(yo.nombre);
// console.log(yo.apellido);
// console.log(yo.edad)
// console.log(yo.soltero)
// console.log(yo.pasatiempos)
// console.log(yo.pasatiempos[0])
// console.log(yo.contacto.email)
// yo.saludar();
// yo.decirMinombre();

// console.log(Object.keys(yo))
// console.log(Object.values(yo))
// console.log(yo.hasOwnProperty("nombre"))
// console.log(yo.hasOwnProperty("acimiento"))

// ================================================================
// CONDICIONAL

// // -Operador Ternario

// let edad = 8;

// let eresMayor = (edad >= 18)
// ? "eres mayor de edad"
// : "eres menor de edad"

// console.log(eresMayor)

// // -Switch - case

// let dia = 5;

// switch (dia) {
//     case (0):
//         console.log("domingo");
//         break;
//     case (1):
//         console.log("lunes");
//         break;
//     case (2):
//         console.log("martes");
//         break;
//     case (3):
//         console.log("miercoles");
//         break;
//     case (4):
//         console.log("jueves");
//         break;
//     case (5):
//         console.log("viernes");
//         break;
//     case (6):
//         console.log("sabado");
//         break;

//     default:
//         console.log("El dia no existe")
//         break;
// }

// ===================================================================

// CICLOS (LOOPS)

// const objeto = {
//     name: "Jairo",
//     apellido: "Tumiri",
//     age: 18
// }

// const arrays = ["manzana", "naranga", "durazno"]

// const string = "Jhon jairo Tumiri"

// // FOR - IN => Permite recorrer las propiedades de un objeto

//     // PARA OBJETOS ME MUESTRA LA PROPIEDAD Y SU VALOR
//     for (const propiedad in objeto) {
//         console.log(propiedad)
//     }


//     for (const propiedad in objeto) {
//         console.log(`propiedad ${propiedad}: valor:"${objeto[propiedad]}`)
//     }

//     console.log(`
//     `)
    
    
//     // FOR - OF => Permite recorrer cuelquier objeto iterable  (string y arrays)
    
//     // MUESTRA SU POCISION y su valor
//     for (const pocision of arrays  ) {
//         console.log(`valor: ${pocision}`)
//     }

//     console.log(`
//     `)

//     for (const pocision of string  ) {
//         console.log(`valor: ${pocision}`)
//     }
    
// =========================================================

// Detructuracion


let persona ={
    nombre: "Jairo",
    apellido: "Tumiri",
    edad: 18
}

let {nombre, apellido, edad} = persona;

console.log(nombre, apellido, edad)



