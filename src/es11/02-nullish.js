//Nullish coalescing operator es un operador lógico que devuelve su operando del lado derecho cuando su operando del lado izquierdo es nulo o indefinido y, de lo contrario, devuelve su operando del lado izquierdo
const anotherNumber = null;
const validate = anotherNumber ?? 5;
console.log(validate);
