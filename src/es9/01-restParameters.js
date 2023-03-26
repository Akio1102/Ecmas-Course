//Podemos usar el Rest Operator con la cual podemos un número indefinido de argumento como un array dentro de una Funcion

const user = {
  username: "Akio",
  age: 20,
  country: "CO",
};

const { username, ...values } = user;
console.log(username);
console.log(values);
