"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var person_1 = require("./person");
var p1 = new person_1.Person("Pedro", 44, "Avenida Mediterraneo");
p1.printname();
console.log(p1.yearOfBirth(2024));
console.log(p1.getAddress());
p1.setAddress("Doctor Esquerdo");
console.log(p1.getAddress());
