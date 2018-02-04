# VALIDADOR DE TARJETAS DE CRÉDITO 

![license](https://img.shields.io/github/release/missmakita/tarjeta-credito.svg) ![license](https://img.shields.io/github/license/missmakita/tarjeta-credito.svg) 

### DESCRIPCIÓN
Plugin que permite validar la numeración de una tarjeta de crédito, basado en el algoritmo de Luhn.

#### Consideraciones Específicas

* El código debe estar compuesto por 1 función: `isValidCard`.
* El usuario no debe poder ingresar un campo vacío.

### PROCESO

*1. Preguntar por el número de la tarjeta de crédito a validar, mediante un cuadro de diálogo emergente en la página web.*

Si la respuesta no es un campo vacío, ingresa a la función `isValidCard` que evalúa la validez del número ingresado. De lo contrario, un cuadro emergente alertará que debe ingresar un número válido.

*2. Crear función `isValidCard`, que valide el número de tarjeta ingresado.*

Para ésto, se declara una variable `result` para asignar el total de la fórmula del algoritmo de Luhn, que es el número validador.

Las variables `pares` e `impares`, que después servirá para separar los dígitos de las posiciones pares e impares.

*3. Pasar los números a un array en orden inverso.*

Para esto, el `string` que contiene el número se pasa a un array en orden inverso con el método `Array.from` y `reverse`. 
Mediante un ciclo `for` en variable `num`, se convierte el `string` a `number` con `parseInt()`. Se separan los números pares e impares de acuerdo a la condición `Si i en num MOD de 2 es igual 0, i es par. Sino i es impar`.

*4. Multiplicar los números de las posiciones pares por 2.*

Ciclo `for` para cada elemento de `pares`, con el que se multiplica la posición `j` en `pares` por 2, asignando el resultado a variable `mult`. Si alguno de los elementos es mayor o igual que 10, se aplica la formula `(x % 10)+(x / 10)` para simplificar a 1 dígito.

*5. Sumar los números de las posiciones impares al total*

Declaradas variables `sum1` y `sum2`. Con `for` para cada elemento de `mult`, donde están los pares, se suman y asignan a `sum1`. Sigue otro `for`para cada elemento en `impares` que suma los impares y asigna a `sum2`.
El total de `sum1 + sum2` se asigna a `result`. Este es el número validador.

*6. Comprobar si es una tarjeta válida.*

Evalúa el resultado de la suma de los dígitos, si es potencia de 10 es válida, si no, el número de la tarjeta no es válido.

Si `result MOD de 10 es igual 0 entonces TARJETA ES VÁLIDA, sino TARJETA NO ES VÁLIDA`. 

Ej:

	input -> 4287465788753508
	output -> La tarjeta de crédito es VÁLIDA


:v:

## Autor
[Makarena Fernández](https://github.com/missmakita)put -> 4287465788753508
	output -> La tarjeta de crédito es VÁLIDA

