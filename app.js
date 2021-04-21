// ------ Spread/Rest Operator ------//


// Ejercicio 1
// Completá el siguiente código para obtener el resultado deseado en el console.log, utilizando el operador de propagación (spread operator).

// const delUnoAlTres = [1, 2, 3];

// const delUnoAlCinco = [...delUnoAlTres, 4, 5]

// console.log( delUnoAlCinco ); // [1, 2, 3, 4, 5]

// Ejercicio 2
// A partir del array dado, creá un nuevo array que empiece con el elemento ‘CERO’ y termine con el elemento ‘CUATRO’


// const arrayDado = ['UNO', 'DOS', 'TRES'];

// const nuevoArray = ['CERO', ...arrayDado, 'CUATRO']

// console.log( nuevoArray ); // ['CERO', 'UNO', 'DOS', 'TRES', 'CUATRO']

// // Ejercicio 3
// Completá el código para poder unir los 3 arrays en uno solo y llegar al resultado esperado utilizando el spread operator.
// const frase0 = ['¡', 'Hola'];
// const frase1 = [',', ' ', 'Mundo'];
// const frase2 = ['!'];

// const fraseCompleta = [...frase0, ...frase1, ...frase2]

// console.log( fraseCompleta.join('') ); // ¡Hola, Mundo!

// Ejercicio 4

// const reviews = {
//     reviewIMDB: 9,
//     reviewFilmAffinity: 8.1
//    };
   
//    const peliInfo = {
//     titulo: 'The Dark Knight',
//     anio: 2008
//    };
   
//    const pelicula = {
//        ...peliInfo, 
//        ...reviews
//    }
   
//    console.log(pelicula);
   // {
   //   titulo: 'The Dark Knight',
   //   anio: 2008,
   //   reviewIMDB: 9,
   //   reviewFilmAffinity: 8.1
   // }

// Ejercicio 5

// const estudiante = {
//     nombre: 'Ada',
//     apellido: 'Lovelace'
//    };
   
//    const estudianteJS = {
//        sabeJS: true, 
//        ...estudiante, 
//        edad: 27
//    }
   
//    console.log(estudianteJS);
   // { sabeJS: true, nombre: 'Ada', apellido: 'Lovelace', edad: 27 }

// Ejercicio 6

// console.log( Math.max(4, 7) ); // 7

// const tresNums = [9, 4, 7];
// console.log( Math.max(tresNums[0], tresNums[1], tresNums[2]) ); // 9
// console.log( Math.max(tresNums) ); // NaN

// const masNums = [5, 5, 4, 1, 32, 132, 54, 3, 4, 5, 76, 45, 23, 65, 12, 17];
// console.log( Math.max(...masNums) ); // NaN, y debería ser 132

// Ejercicio 7
// const    agregarNumeroAlArray = (num, arr) =>{
//    return [...arr, num]
// }

// console.log( agregarNumeroAlArray(1, [6, 19]) ) // [6, 19, 1]
// console.log( agregarNumeroAlArray(4, [1, 2, 3]) ) // [1, 2, 3, 4]

// Ejercicio 8

// const contarLosArgumentos = (...num) =>{
//    return num.length
// }

// console.log(contarLosArgumentos('uno', 'dos')); // 2
// console.log(contarLosArgumentos('uno', 'dos', 'tres', 'cuatro')); // 4
// console.log(contarLosArgumentos(5, 5, 4, 1, 32, 132, 54, 3, 4, 5, 76, 45, 23, 65, 12, 17)); // 16

// Ejercicio 9

// const alCuadradoYSumar = (...arr) =>{
//   const result =  arr.reduce((inicial, currentValue) => Math.pow(currentValue, 2) + inicial, 0)
// console.log(result)
// }

// alCuadradoYSumar(2, 4, 3); // 29
// alCuadradoYSumar(1, 2); // 5


// Ejercicio 10

//  const fraseEnPartes = [
//    ['¡', 'Hola'],
//    [',', ' ', 'Mundo'],
//    ['!']
//  ];
 
//  const fraseCompleta = (fraseEnPartes) => {
//    let arr = []
//    fraseEnPartes.forEach(element => arr.push(...element))
//    console.log(arr.join(''));
//  }
 
//  fraseCompleta(fraseEnPartes)
 
 // console.log( fraseCompleta ); // ¡Hola, Mundo!
 


// Ejercicio 11

// const combinarArrays = () =>{

// }

// combinarArrays([1, 2], [4, 5, 6]); // [1, 2, 4, 5, 6]
// combinarArrays(['a', 'b']); // ['a', 'b']
// combinarArrays([true, false], [1, 2, 3], ['a'], [{}]) // [true, false, 1, 2, 3, 'a', {}]




//****** DESTRUCTURING ******/




// Ejercicio 1

// const persona = { nombre: 'Ada', apellido: 'Lovelace', edad: 35 };

// const mostrarInfo = obj => {
//    const {nombre, apellido, edad} = persona;
//    return `Tu nombre completo es ${nombre} ${apellido}`
// } ; 

// console.log( mostrarInfo(persona) ); //Tu nombre completo es Ada Lovelace

// Ejercicio 2

// const persona1 = { nombre: 'Ada', apellido: 'Lovelace', edad: 35 };
// const persona2 = { nombre: 'Grace', apellido: 'Hopper', edad: 25 };
// const persona3 = { nombre: 'Hedy', apellido: 'Lamarr', edad: 45 };

// const nombres = [persona1.nombre, persona2.nombre, persona3.nombre];

// console.log( nombres ); // [ 'Ada', 'Grace', 'Hedy' ]

// Ejercicio 3

// const datosPersonales = [ 'Ada', 'Lovelace', 10, 12, 1815, 'Londres' ];

// utilizando destructuring
// extraer las variables nombre, lugar, dia, mes, anio

// const nombre = datosPersonales[0]
// const lugar = datosPersonales[1]
// const dia = datosPersonales[2]
// const mes = datosPersonales[3]
// const anio = datosPersonales[4]

// console.log(`${nombre} nació en ${lugar}, el ${dia}/${mes}/${anio}.`);
// Ada nació en Londres, el 10/12/1815.

// Ejercicio 4

// const persona = {
//   nombre: 'Ada',
//   apellido: 'Lovelace',
//   fechaNacimiento: [10, 12, 1815],
//   lugarNacimiento: {
//     pais: 'Inglaterra',
//     ciudad: 'Londres'
//   }
// };

// const {nombre, apellido} = persona;
// const lugar = persona.lugarNacimiento.ciudad;
// const dia = persona.fechaNacimiento[0]
// const mes = persona.fechaNacimiento[1]
// const anio = persona.fechaNacimiento[2]

// console.log(`${nombre} nació en ${lugar}, el ${dia}/${mes}/${anio}.`);  // Ada nació en Londres, el 10/12/1815.



// Ejercicio 5

// const persona = ['Ada Lovelace', [ { edad: 30, idioma: 'inglés' } ]];

// // usando destructuring, obtener las variables idioma y nombrePersona

// const nombrePersona = persona[0];
// const {idioma} = persona[1][0]

// console.log(`${nombrePersona} habla en ${idioma}.`); // Ada Lovelace habla en inglés.

// Ejercicio 6

// const persona1 = {
//   nombre: 'Ada Lovelace',
//   techs: ['JavaScript', 'C++']
// };
 
// const persona2 = {
//   nombre: 'Grace Hopper',
//   techs: []
// };


// const nombrePersona1 = persona1.nombre;
// const techPersona1 = persona1.techs[0];
// const nombrePersona2 = persona2.nombre;
// const tech2 = persona2.techs.push('JS');
// const techPersona2 = persona2.techs;

// // console.log(persona2.techs.push('JS'))
// // console.log(persona2.techs)


// console.log(`${nombrePersona1} programa en ${techPersona1}.`); // Ada Lovelace programa en JavaScript.
// console.log(`${nombrePersona2} programa en ${techPersona2}.`); // Grace Hopper programa en JS.
 

// Ejercicio 7

// const calcularArea = (triangulo) => {
//   const ladoA = triangulo.a;
//   const ladoB = triangulo.b;
//   const ladoC = triangulo.c;
 
//   return ladoA + ladoB + ladoC;
//  }
 
 // ejemplos de uso
//  const triangulo1 = { a: 3, b: 5, c: 7 };
//  const triangulo2 = { a: 8, b: 2, c: 3 };

// const calcularArea = triangulo => triangulo.a + triangulo.b + triangulo.c
 
//  console.log( calcularArea(triangulo1) ); // 15
//  console.log( calcularArea(triangulo2) ); // 13

// Ejercicio 8

// const banda = {
//   nombre: 'Nirvana',
//   discos: [
//     { nombre: 'Bleach' },
//     { nombre: 'Nevermind' },
//     { nombre: 'Incesticide' }
//   ]
//  };

// const mostrarPrimerDisco = (banda)=> ` El primer disco de ${banda.nombre} es ${banda.discos[0].nombre}`
 
// console.log( mostrarPrimerDisco(banda) ); // El primer disco de Nirvana es Bleach

// Ejercicio 9
// Crear una una arrow function llamada estaVacio que recibe un array y retornar true si no tiene ningún elemento, o false si tiene algún elemento
// Es necesario utilizar destructuring y no hacer uso de la propiedad length de los arrays.

// const estaVacio = (array) => {

//   if(array[0]  === undefined){
//     return true
//   }else {
//     return false
//   }
// } // aca la solucion

// console.log(estaVacio([]))
//  //=> true

// console.log(estaVacio([0])
// ) //=> false

// console.log(estaVacio([[]])
// ) //=> false


////****** INTEGRADOR *******////

// const bulbasaur = {
//   name: "Bulbasaur",
//   type: "grass",
//   ability: {
//       "primary": "Overgrow",
//       "hidden": "Chlorophyll"
//   },
//   stats: {
//       hp: 45,
//       attack: 49,
//       deffense: 59,
//       speed: 45
//   },
//   moves: [
//       "Growl", "Tackle", "Vine Whip", "Razor Leaf"
//   ],
//   modifiers: {
//       "weakness": ["fire, ice", "flying", "psychic"],
//       "resistances": ["water", "grass", "electric", "fighter"]
//   }
// }

// const charmander = {
//   name: "Charmander",
//   type: "fire",
//   ability: {
//       "primary": "Blaze",
//       "hidden": "Solar Power"
//   },
//   stats: {
//       hp: 39,
//       attack: 52,
//       deffense: 43,
//       speed: 65
//   },
//   moves: [
//       "Growl", "Scratch", "Flamethrower", "Dragon Breath"
//   ],
//   modifiers: {
//       "weakness": ["water", "ground", "rock"],
//       "resistances": ["fire", "ice", "grass", "steal"]
//   }
// }

// const squirtle = {
//   name: "Squirtle",
//   type: "water",
//   ability: {
//       "primary": "Torrent",
//       "hidden": "Rain Dish"
//   },
//   stats: {
//       hp: 44,
//       attack: 48,
//       deffense: 50,
//       speed: 43
//   },
//   moves: [
//       "Tackle", "Tail Whip", "Water Gun", "Hydro Pump"
//   ],
//   modifiers: {
//       "weakness": ["electric", "grass"],
//       "resistances": ["water", "fire", "ice", "steel"]
//   }
// }

// const pikachu = {
//   name: "Pikachu",
//   type: "electric",
//   ability: {
//       "primary": "Static",
//       "hidden": "Lightning rod"
//   },
//   stats: {
//       hp: 35,
//       attack: 55,
//       deffense: 40,
//       speed: 90
//   },
//   moves: [
//       "Quick Attack", "Volt Tackle", "Iron Tail", "Thunderbolt"
//   ],
//   modifiers: {
//       "weakness": ["ground"],
//       "resistances": ["electric", "flying", "water", "steel"]
//   }
// }