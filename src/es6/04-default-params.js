function newUser(name, age, country) {
  var name = name || "Akio";
  var age = age || 20;
  var country = country || "COP";
  console.log(name, age, country);
}

newUser();
newUser("Cristian", 21, "CO");

function newAdmin(name = "Akio", age = 20, country = "CO") {
  console.log(name, age, country);
}

newAdmin();
newAdmin("David", 22, "EU");
