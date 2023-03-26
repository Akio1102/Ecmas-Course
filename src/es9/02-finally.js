// El finally() de las promises se ejecutan al final de la promesa ya sea que se haya resulto o rechazado

const anotherFuncion = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      resolve("Hey!!!");
    } else {
      reject("F");
    }
  });
};

anotherFuncion()
  .then((response) => console.log(response))
  .catch((err) => console.log(err))
  .finally(() => console.log("Finally"));
