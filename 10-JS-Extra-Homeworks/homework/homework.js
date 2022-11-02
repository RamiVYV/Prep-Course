// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  // let arreglo = Object.entries(objeto)
  // return arreglo

     nuevoArray = [];

     for(clave in objeto){
      nuevoArray.push([clave,objeto[clave]])
     }
  return nuevoArray
}
function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código 

var objeto = {};

for( var i = 0; i < string.length; i++){
  
  if (objeto.hasOwnProperty(string[i])){

  objeto[string[i]] = objeto[string[i]]+ 1
  
}else{
  objeto[string[i]]=-1
}
return objeto}
}

function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí

  let ordenMinuscula = "";
  let ordenMayuscula = "";

  for (let i = 0; i<s.length; i++){

    if (s[i] === s[i].toLowerCase()){
        ordenMayuscula = ordenMayuscula + s[i]
    }else{
      ordenMinuscula = ordenMinuscula + s[i]
    }
  }
  return ordenMinuscula +ordenMayuscula
}

function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí

  // convertir la frase en un array donde cada palabara sea una elemento, lueego recorrer ese array y modificarlo de forma de poder invertir las palabara y agregarlo a un nuevo array con las palabras invertidas 

  let cadenaDividida = str.split(" ");
  console.log(cadenaDividida);
  letter =""
  
  // recorrer el array y luego invertir las letras ver que tiene que ir un nivel mas abajo del array.
  
  for (let i=0; i<cadenaDividida.length; i++ ){

    let strDividido = cadenaDividida[i].split("")
    strDividido.reverse()
    let letterReverse = strDividido.join("")
    console.log(strDividido)
    console.log(letterReverse)
    letter = letter+" "+ letterReverse
}
console.log(letter.trim())
return letter.trim()
 
} 

function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  
  let numeroString = numero.toString()
  let numeroReverso= numeroString.split("").reverse().join("")

  if (numeroReverso === numeroString){
      return ("Es capicua")
  }else{
      return ("No es capicua")
  }
}

function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí

  let arrayCadena = cadena.
  split("")
        let nuevaCadena = ""
        let elementosDescartados = []
        console.log(arrayCadena)

        for(let i = 0; i < arrayCadena.length; i++){
          if (arrayCadena[i] === "a" || arrayCadena[i] ==="b" || arrayCadena[i] ==="c"){
            elementosDescartados.push(arrayCadena[i])
          }else{
            nuevaCadena =nuevaCadena + arrayCadena[i]
         }
}
return nuevaCadena
 }

function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí

  var nuevoArray = arr.sort(function (a, b) {
    return a.length - b.length
  })
  return nuevoArray;
}

function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

