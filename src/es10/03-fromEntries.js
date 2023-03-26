//El método Object.fromEntries devuelve un objeto a partir de un array donde sus elementos son las entries en forma [propiedad, valor].
const entries = new Map([
  ["name", "Akio"],
  ["Age", 20],
]);
console.log(entries);
console.log(Object.fromEntries(entries));
