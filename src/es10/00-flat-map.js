//El método flat de los array permite aplanar los elementos internos de un array permitiendo eliminar array internos y espacios vacios dentro del mismo.Si se quiere aplanar todo el arreglo sin pasar una profundidad exacta, se puede hacer uso de Infinity.
const array = [1, 1, 2, 3, 4, [1, 3, 5, 6, [1, 2, 4]]];
console.log(array.flat(3));

//El método flatMap() primero mapea cada elemento usando una función de mapeo, luego aplana el resultado en una nueva matriz(aplana en una sola profundidad).
const array2 = [1, 2, 3, 4, 5];
console.log(array2.flatMap((v) => [v, v * 2]));
