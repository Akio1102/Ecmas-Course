//Un try catch es para manejar el error
try {
  hello();
} catch (error) {
  console.error(error);
}
//Manjear el error ya es opcional
try {
  anotherFn();
} catch {
  console.error("Esto es un error");
}
