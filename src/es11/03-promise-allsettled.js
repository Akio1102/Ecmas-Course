//El método Promise.all sirve para manejar varias promesas al mismo tiempo. Recibe como argumento un array de promesas. El problema es que Promise.all() se resolverá, si y solo si todas las promesas fueron resueltas. Si al menos una promesa es rechazada, Promise.all será rechazada.

//Promise.allSettled() permite manejar varias promesas, que devolverá un array de objetos con el estado y el valor de cada promesa, haya sido resuelta o rechazada.

const promise1 = new Promise((resolve, rejct) => {
  rejct("Reject");
});
const promise2 = new Promise((resolve, rejct) => {
  resolve("Resolve");
});
const promise3 = new Promise((resolve, rejct) => {
  resolve("Reject");
});

Promise.allSettled([promise1, promise2, promise3]).then((response) =>
  console.log(response)
);
