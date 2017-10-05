Algoritmo isValidCard
// Preguntar por el número de la tarjeta. Validar que no se ingresen campos vacíos:
	
	Hacer {
		var response = Prompt('Ingresa el N° de tarjeta de crédito:');
		Si response != '')
			cardNum <- response
			response;
			isValidCard(num);
		SiNo
			alert('Ingresa un número válido!');
		FinSi																		  
	Mientras response == ''
	
// Crear función que valida el número de tarjeta ingresado, aplicando el algoritmo de Luhn::
	
	function isValidCard(num) {
	
		result <- 0;
	
	// Pasar los números a un array en orden inverso:
		num = Array.from(num).reverse();
	
	Para i Desde 0 Hasta  Longitud((num); i++) {
	num[i] = ConvertirANumero(num[i], 10);
	FinPara
	console.log(num);
	
	// Multiplicar los números de las posiciones pares por 2:
	Para j Desde 1 Hasta Longitud(num); j+2
		num[j] *= 2;
	FinPara	
	console.log(num);
	
	// Si el producto de las posiciones pares fue mayor a 10, reducir a 1 dígito:
	Si num[j] > 9) Entonces
		num[j] -= 9;
	}
	console.log(num);
	
	// Sumar las posiciones pares con las impares:
	result += num[j];
	console.log(result);
	
	// Comprobar si es una tarjeta válida, evaluando el resultado de la suma de los dígitos, si es potencia de 10 es válida, si no, el número de la tarjeta no es válido:
	Si result MOD 10 === 0) Entonces
		Escribir 'TARJETA ES VÁLIDA'
	Si no
		Escribir 'TARJETA NO ES VÁLIDA'
	FinSi
	
FinAlgoritmo
