"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
var Person = /** @class */ (function () {
    //Contructor
    function Person(name, age, address) {
        this.name = name;
        this.age = age;
        this.address = address;
    }
    // getters y setters
    Person.prototype.getAddress = function () {
        return this.address;
    };
    Person.prototype.setAddress = function (newAddress) {
        this.address = newAddress;
    };
    //Metodos
    Person.prototype.printname = function () {
        console.log(this.name);
    };
    Person.prototype.yearOfBirth = function (currentYear) {
        return (currentYear - this.age);
    };
    return Person;
}());
exports.Person = Person;
/*let p1 : Person = new Person("Juan", 23, "Avenida America");
p1.printname();
console.log(p1.yearOfBirth(2024));
console.log(p1.getAddress());
p1.setAddress("Doctor Esquerdo")
console.log(p1.getAddress());*/
