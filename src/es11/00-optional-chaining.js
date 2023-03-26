// Optional chaining permite leer el valor de una propiedad ubicada dentro de una cadena de objetos conectados sin tener que validar expresamente que cada referencia en la cadena sea válida.
const users = {
  akio: {
    country: "CO",
  },
  cristian: {
    country: "CO",
  },
};

console.log(users?.jean?.country);
