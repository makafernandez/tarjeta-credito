'use strict';

/*
* Preguntar por el número de la tarjeta. 
*  Validar que no se ingresen campos vacíos:
*  Input: 4929364139115943, 4152811014156812
*/
let cardNumber = '';
do {
  cardNumber = prompt('Ingresa el N° de tarjeta de crédito:');
  if (cardNumber !== '') {
    isValidCard(cardNumber);
  } else {
    alert('Ingresa un número válido!');
  }                                   
}
while (cardNumber === '');

// Valida el número ingresado, aplicando el algoritmo de Luhn:
function isValidCard(num) {
  let even = [];
  let odd = [];
  let result = 0;

  // Invertir el orden de los números:
  num = Array.from(num).reverse();

  // Separar las posiciones pares e impares:
  for (let i in num) {
    num[i] = parseInt(num[i]);
    if (i % 2 !== 0) {  //--> Los números en posiciones pares se multiplican por 2
      even.push(num[i] * 2);
      for (let j in even) {
        if (even[j] > 9) {
          even[j] = (parseInt(even[j] % 10)) + (parseInt(even[j] / 10));
        }
      }
    } else {
      odd.push(num[i]);
    }
  };

  // Sumar los dígitos resultantes de las posiciones pares (even) e impares (odd):
  const getSum = (total, num) => {
    console.log(total);
    return total + num;
  }

  result = even.reduce(getSum) + odd.reduce(getSum); 

  // Verificar que la suma de los dígitos sea múltiplo de 10 para validar la tarjeta:
  if (result % 10 === 0) {
    alert('La tarjeta de crédito es VÁLIDA');
  } else {
    alert('La tarjeta de crédito es INVÁLIDA');
  } 
};