class user {
  //Constructor
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  // Metodos
  // Los métodos privados consiste en limitar el acceso a propiedades y métodos agregando el caracter numeral ( # )
  #speak() {
    return "Hello";
  }
  greeting() {
    return `${this.speak()} ${this.name}`;
  }
  get #uAge() {
    return this.age;
  }
  set #uAge(n) {
    this.age = n;
  }
}

const lufeDev = new user("Lufe", 21);
console.log(lufeDev.uAge);
console.log((lufeDev.uAge = 20));
