//Ejercicio 01 diapo 51
//VAR
var age = 25;
console.log(age);
console.log(typeof age);


//LET
let name = "Keyla";
console.log(name);
console.log(typeof name);


//CONST
const PI = 3.1416;
console.log(PI);
console.log(typeof PI);

//TDZ
// 1. Declaración e inicialización
console.log(city); // Generará un ReferenceError en esta línea
let city = "New York";
console.log(city);
console.log(typeof city);


//SCOOPE Y GLOBAL
// Variable con scope local
function foo() {
    let localVariable = "Local";
    console.log(localVariable);
  }
  // Variable con scope global
  var globalVariable = "Global";
  
  foo(); // Llamada a la función
  console.log(globalVariable);

//Ejercicio 1 diapo 64
const getFullName = () => {
  const firstName = "Keyla";
  const lastName = "Batzin";
  return `${firstName} ${lastName}`;
};

console.log(getFullName());

//Ejercicio 2 diapo 64
function printBooleanValue(value) {
  console.log(value);
}
printBooleanValue(true);

//Ejercicio 3 diapo 64
printValues(1, 2, 3, 4, 5);
function printValues(...args) {
  args.forEach((value) => {
    console.log(value);
  });
}

//Ejercicio Math Moneda diapo 74
const resultadoMoneda = lanzarMoneda();
function lanzarMoneda() {
  const resultado = Math.round(Math.random());
  if (resultado === 1) {
    return "cara";
  } else {
    return "cruz";
  }
}
console.log(resultadoMoneda);

//Ejercicios diapo 75
//Ej-1
const resultadoSuma = sumarNumeros(2, 4, 6);
function sumarNumeros(num1, num2, num3) {
  return num1 + num2 + num3;
}
console.log(resultadoSuma);

//Ej-2
const miNombreCompleto = obtenerNombreCompleto("Keyla", "Batzin", "Con");
function obtenerNombreCompleto(nombre, apellido1, apellido2) {
  const nombreCompleto = nombre + " " + apellido1 + " " + apellido2;
  return nombreCompleto;
}
console.log(miNombreCompleto);

//Ej-3
const numeroMayor = obtenerNumeroMayor(10, 7);
function obtenerNumeroMayor(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
}

console.log(numeroMayor);

//Ejercicios diapo 81
//Ej-1
const numeroMes = 2;
const nombreMes = mostrarMes(numeroMes);
function mostrarMes(numero) {
  let mes;

  switch (numero) {
    case 1:
      mes = "Enero";
      break;
    case 2:
      mes = "Febrero";
      break;
    case 3:
      mes = "Marzo";
      break;
    case 4:
      mes = "Abril";
      break;
    case 5:
      mes = "Mayo";
      break;
    case 6:
      mes = "Junio";
      break;
    case 7:
      mes = "Julio";
      break;
    case 8:
      mes = "Agosto";
      break;
    case 9:
      mes = "Septiembre";
      break;
    case 10:
      mes = "Octubre";
      break;
    case 11:
      mes = "Noviembre";
      break;
    case 12:
      mes = "Diciembre";
      break;
    default:
      mes = "Mes inválido";
      break;
  }

  return mes;
}

console.log(nombreMes);
//Ej-2
const numeroString = "tres";
const numeroTransformado = transformarNumero(numeroString);
function transformarNumero(numero) {
  let numeroTransformado;

  switch (numero) {
    case "uno":
      numeroTransformado = 1;
      break;
    case "dos":
      numeroTransformado = 2;
      break;
    case "tres":
      numeroTransformado = 3;
      break;
    case "cuatro":
      numeroTransformado = 4;
      break;
    case "cinco":
      numeroTransformado = 5;
      break;
    default:
      numeroTransformado = NaN;
      break;
  }

  return numeroTransformado;
}

console.log(numeroTransformado);

//Ejercicio diapo 84 (Math)
//Ej-1 Genera 0 o 1 de forma aleatoria
const numeroAleatorio = Math.floor(Math.random() * 2); 
console.log(numeroAleatorio);

//Ej-2 PI redondeado
const numeroRedondeado = Math.PI.toFixed(3);
console.log(numeroRedondeado);

//Ejercicios diapo 87 
//Ej-1
const textoOriginal = 'El árbol estaba situado en medio de la pradera junto al granero.';
const textoModificado = reemplazarLetrasAporO(textoOriginal);
function reemplazarLetrasAporO(texto) {
  const textoModificado = texto.replace(/a/g, 'O');
  return textoModificado;
}
console.log(textoModificado);

//Ej-2
const texto1 = 'academia';
const texto2 = 'escuela';
function comprobarInicioConAca(texto) {
  return texto.startsWith('aca');
}
console.log(comprobarInicioConAca(texto1));  // Devuelve true
console.log(comprobarInicioConAca(texto2));  // Devuelve false

//Ej-3
const saludoFinal = saludarTresVeces('Hola'+" ");
function saludarTresVeces(texto) {
  const saludo = texto.repeat(3);
  return saludo;
}
console.log(saludoFinal);

//Ejercicio diapo 94 bucle for y while
//FOR
for (let i = 0; i < 10; i++) {
  console.log("I ❤code");
}
//WHILE
let contador = 0;
while (contador < 10) {
  console.log("I ❤code");
  contador++;
}

//Ejercicio diapo 95
//Ej-1
const letras = ['a', 'b', 'c', 'd', 'e'];

letras.forEach(function(letra) {
  console.log(letra);
});

//Ej-2
let numero = 5;

while (numero > 0) {
  console.log(numero);
  numero--;
}

//Ejercicio diapo 96
//Explicación:......
 





