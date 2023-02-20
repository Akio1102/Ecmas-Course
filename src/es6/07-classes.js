// Declaracion
class User {}
// Instancia de una clase
// const newUser = new User();

class user {
  greeting() {
    return "Hello";
  }
}

const akio = new user();
console.log(akio.greeting());
const akioDev = new user();
console.log(akioDev.greeting());

// Constructor

class user {
  //Constructor
  constructor() {
    console.log("Nuevo Usuario");
  }
  greeting() {
    return "Hello";
  }
}

const lucky = new user();

// This

class user {
  constructor(name) {
    this.name = name;
  }
  // Metodos
  speak() {
    return "Hello";
  }
  greeting() {
    return `${this.speak()} ${this.name}`;
  }
}

const tony = new user("Tony");
console.log(tony.greeting());

// Setters Getters

class user {
  //Constructor
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  // Metodos
  speak() {
    return "Hello";
  }
  greeting() {
    return `${this.speak()} ${this.name}`;
  }
  get uAge() {
    return this.age;
  }
  set uAge(n) {
    this.age = n;
  }
}

const lufeDev = new user("Lufe", 21);
console.log(lufeDev.uAge);
console.log((lufeDev.uAge = 20));
