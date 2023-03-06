/* Set es una estructura de datos para almacenar elementos únicos, para iniciar un set toca instanciar con new Set para iniciar un set para agregar se usa el 
.add(value) -> añade un nuevo valor
.delelete(value) -> elimina un elemento en el Set,retorna un boolean si existia o no el valor
.has(value) -> Retorna un boolean si existe o no el valor dentro del Set
.clear(value) -> Elimina todos los valores del Set
.size -> Retorna la cantidad de elemento del Set
*/
const list = new Set();

list.add("item 1");
list.add("item 2").add("item 3");

console.log(list);
