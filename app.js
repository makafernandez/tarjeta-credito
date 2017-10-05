// Preguntar por el número de la tarjeta. Validar que no se ingresen campos vacíos:

do {
	var response = prompt('Ingresa el N° de tarjeta de crédito:');
	if (response != '') {
    	var cardNum = response;
    	isValidCard(cardNum);
    } else {
    	alert('Ingresa un número válido!');
    }																		  
} while (response == '');

// Crear función que valida el número de tarjeta ingresado, aplicando el algoritmo de Luhn::

function isValidCard(num) {
	
	var result = 0;
	var pares = [];
	var impares = [];

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
	for (var j = 0; j <= pares.length-1; j++) {
		var mult = pares[j]* 2;
		if (mult >= 10) {
			mult = (mult % 10) + (mult / 10);
		}
	}

// Sumar los números de las posiciones impares al total:	
	var sum1=0;
	for (var k = 0; k < mult.length; k++) {
		sum1 = sum1 + mult[k];
	}

	var sum2=0;
	for (var l=0; l < impares.length; l++) {
		sum2= sum2 + impares[l];
	}

	result = sum1 + sum2;

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