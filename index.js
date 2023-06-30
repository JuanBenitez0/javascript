//Función que reciba un número por parámetro e indique en consola si el número es par o impar.

function paridad(n) {
  if (n % 2 === 0) {
    return console.log("Es un número par");
  } else {
    return console.log("Es un número impar");
  }
}

const procesarNumero = () => {
  const n = prompt("Por favor, ingrese un número.");
  paridad(n);
};

procesarNumero();

//Función que reciba dos números por parámetro e indique en consola cuál es mayor.

function mayorQue(numero1, numero2) {
  if (numero1 > numero2) {
    return console.log(numero1 + " es mayor que " + numero2);
  } else if (numero1 == numero2) {
    return console.log(numero1 + " es igual que " + numero2);
  } else {
    return console.log(numero2 + " es mayor que " + numero1);
  }
}

const compararNumero = () => {
  const numero1 = prompt("Por favor, ingrese un número.");
  const numero2 = prompt("Por favor, ingrese un número.");
  mayorQue(numero1, numero2);
};

compararNumero();

//Función que reciba un número por parámetro e indique en consola si ese número es múltiplo de 5.

function multiplo(n) {
  if (n % 5 === 0) {
    return console.log("El número es múltiplo de 5");
  } else {
    return console.log("El número no es múltiplo de 5");
  }
}

const calcularNumero = () => {
  const n = prompt("Por favor, ingrese un número para saber si es múltiplo de 5.");
  multiplo(n);
};

calcularNumero();

//Función que reciba un número por parámetro e imprima por consola todos los números desde 0 hasta ese número

function contar(numero) {
  for (let i = 0; i <= numero; i++) {
    console.log(i);
  }
}

const contarHasta = () => {
  const numero = prompt("¿Hasta cuánto queres contar?");
  contar(numero);
};

contarHasta();

//Función que reciba una palabra y un número por parámetro e imprima por consola esa palabra la cantidad correspondiente al número indicado.

function imprimirPalabra(palabra, numero) {
  for (let i = 0; i <= numero; i++) {
    console.log(palabra);
  }
}

imprimirPalabra("Hola", 5);

//Función que reciba un array por parámetro e imprima por consola todos los valores de ese array.

function imprimirArray(numeros) {
  for (let i = 0; i < numeros.length; i++) {
    console.log(numeros[i]);
  }
}

const numeros = [20, 10, 30, 50, 40];
imprimirArray(numeros);

//Función que reciba un array con 10 números e imprima por consola todos los valores, excepto el que se encuentre en la 5ta posición.

function imprimirArray2(array) {
  for (let i = 0; i < array.length; i++) {
    if (i !== 4) {
      console.log(array[i]);
    }
  }
}

const numeros2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
imprimirArray2(numeros2);

//Función que reciba un array de números y un número por parámetro e imprima por consola cada número del array multiplicado por el número pasado por parámetro.

function multiplicarArray(array, numero) {
  for (let i = 0; i < array.length; i++) {
    const resultado = array[i] * numero;
    console.log(resultado);
  }
}

const multiplicador = 3;
multiplicarArray(numeros, multiplicador); //usé el array del punto 6
