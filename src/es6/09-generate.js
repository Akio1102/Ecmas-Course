//Son funciones generadoras las cuales pueden pausar su pausa(yield) y posteriormente volver a el punto donde se quedaron guardando el punto donde se quedaron. Sirven para guardar la totalidad de datos infitos. Para crearlas se usa el * despues de function (function*), yield es la palabra reservada que retorna el valor y para la ejecución, para acceder a estos metodos usamos la propiedad next que devuelve un .value  y otra propiedad done es boolean que especifica si la ejecución del generador ha terminado, si ya no hay más valores en yeild devolvera el value como undefined y un done con true.

function* iterate(array) {
  for (let value of array) {
    yield value;
  }
}

const it = iterate(["Akio", "Lufe", "Jean", "Hitlet"]);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
