import {Person} from "./person"

let p1 : Person = new Person("Pedro", 44, "Avenida Mediterraneo");
p1.printname();
console.log(p1.yearOfBirth(2024));
console.log(p1.getAddress());
p1.setAddress("Doctor Esquerdo")
console.log(p1.getAddress());