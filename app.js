// Preguntar por el número de la tarjeta. Validar que no se ingresen campos vacíos:

do {
	var response = prompt('Ingresa el N° de tarjeta de crédito:');
	if (response !== '') {
    	var cardNum = response;
    	isValidCard(cardNum);
    } else {
    	alert('Ingresa un número válido!');
    }																		  
} while (response === '');

// Crear función que valida el número de tarjeta ingresado, aplicando el algoritmo de Luhn::

function isValidCard(num) {
	
	var pares = [];
	var impares = [];
	var result = 0;
	

// Pasar los números a un array en orden inverso:
	num = Array.from(num).reverse();

	for(var i = 0; i < num.length; i++) {
  		num[i] = parseInt(num[i], 10);
		if (i % 2 === 0) {
			pares.push(parseInt(num[i]));
		} else {
			impares.push(parseInt(num[i]));
		}
	}

// Multiplicar los números de las posiciones pares por 2:
	var mult = [];
	
	for (var j = 0; j < pares.length; j++) {
		
		mult = pares[j]* 2;
		if (mult > 9) {
			mult = (mult % 10) + (mult / 10);
		}
	}
	console.log(pares);
	console.log(mult);
// Sumar los números de las posiciones impares al total:	
	var sum1 = 0;
	for (var k = 0; k < mult.length; k++) {
		sum1 += mult[k];
	}
console.log(sum1);
	
	var sum2 = 0;
	for (var l = 0; l < impares.length; l++) {
		sum2 += impares[l];
	}
console.log(sum2);
	result = sum1 + sum2;
console.log(result);
// Comprobar si es una tarjeta válida, evaluando el resultado de la suma de los dígitos, si es potencia de 10 es válida, si no, el número de la tarjeta no es válido:
	if (result % 10 === 0) {
		console.log(result);
		alert('TARJETA ES VÁLIDA');
	} else {
		alert('TARJETA NO ES VÁLIDA');
	}
}

// input 4076115352220310 // result debería darme 40
// 4287465788753508

// 4916166822592105 (65)