Algoritmo isValidCard
// Preguntar por el n�mero de la tarjeta. Validar que no se ingresen campos vac�os:
	
	Hacer {
		var response = Prompt('Ingresa el N� de tarjeta de cr�dito:');
		Si response != '')
			cardNum <- response
			response;
			isValidCard(num);
		SiNo
			alert('Ingresa un n�mero v�lido!');
		FinSi																		  
	Mientras response == ''
	
// Crear funci�n que valida el n�mero de tarjeta ingresado, aplicando el algoritmo de Luhn::
	
	function isValidCard(num) {
	
		result <- 0;
	
	// Pasar los n�meros a un array en orden inverso:
		num = Array.from(num).reverse();
	
	Para i Desde 0 Hasta  Longitud((num); i++) {
	num[i] = ConvertirANumero(num[i], 10);
	FinPara
	console.log(num);
	
	// Multiplicar los n�meros de las posiciones pares por 2:
	Para j Desde 1 Hasta Longitud(num); j+2
		num[j] *= 2;
	FinPara	
	console.log(num);
	
	// Si el producto de las posiciones pares fue mayor a 10, reducir a 1 d�gito:
	Si num[j] > 9) Entonces
		num[j] -= 9;
	}
	console.log(num);
	
	// Sumar las posiciones pares con las impares:
	result += num[j];
	console.log(result);
	
	// Comprobar si es una tarjeta v�lida, evaluando el resultado de la suma de los d�gitos, si es potencia de 10 es v�lida, si no, el n�mero de la tarjeta no es v�lido:
	Si result MOD 10 === 0) Entonces
		Escribir 'TARJETA ES V�LIDA'
	Si no
		Escribir 'TARJETA NO ES V�LIDA'
	FinSi
	
FinAlgoritmo
