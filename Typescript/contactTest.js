"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var person_1 = require("./person");
var contact_1 = require("./contact");
/*let p1 : Person = new Person("Juan", 23, "Avenida America");
p1.printname();
console.log(p1.yearOfBirth(2024));
console.log(p1.getAddress());
p1.setAddress("Doctor Esquerdo")
console.log(p1.getAddress());*/
var c1 = new person_1.Person("Peter", 44, "Avenida mediterraneo");
var c2 = new person_1.Person("John", 45, "Avenida barcelona");
var ctcts = new contact_1.Contacts();
ctcts.printcalendar(c1);
ctcts.printcalendar(c2);
console.log(ctcts);
