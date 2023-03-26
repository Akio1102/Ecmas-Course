//El método exec() ejecuta una busqueda sobre las coincidencias de una expresión regular en una cadena especifica. Devuelve el resultado como array, o null.
const regex = /(\d{4})-(\d{2})-(\d{2})/;
const matchers = regex.exec("2023-01-01");
console.table(matchers);
