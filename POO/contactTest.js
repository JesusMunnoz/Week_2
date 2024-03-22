let Person = require("./person")
let Contacts = require("./contacts")

let contacto0 = new Person ("Paco", "Perez", "Pereda", 70, 1.80, 1968);
contacto0.introHobbies("senderismo");
contacto0.introHobbies("pasear con su perro");

let contacto1 = new Person("Betty", "Spagueti", "Carbonara", 35, 100, 2020);
contacto1.introHobbies("Pasta");
contacto1.introHobbies("Pesto");
contacto1.introHobbies = "Pizza"

let contacto2 = new Person("Rocio", "Jurado", "Garcia", 50, 150, 1984);
contacto2.introHobbies("Paella");
contacto2.introHobbies("Fiesta");
contacto2.introHobbies = ("Siesta")

let c1 = new Contacts ()
c1.introPersons(contacto0);
c1.printPersons(contacto0);

let c2 = new Contacts ()
c2.introPersons(contacto1);
c2.printPersons(contacto1);

let c3 = new Contacts ()
c3.introPersons(contacto2);
c3.printPersons(contacto2);




/*
let contacto1 = new Contacts();
contacto1.name = "Betty"
contacto1.surname1 = "Spagueti"
contacto1.surname2 = "Carbonara"
contacto1.weight = 35
contacto1.height = 100
contacto1.yearOfBirth = 2020
contacto1.hobbies = ["Pasta", "Pesto", "Pizza"]

let contacto2 = new Contacts();
contacto2.name = "Rocio"
contacto2.surname1 = "Jurado"
contacto2.surname2 = "Garcia"
contacto2.weight = 50
contacto2.height = 150
contacto2.yearOfBirth = 1984
contacto2.hobbies = ["Paella", "Fiesta", "Siesta"]

console.log(contacto1, contacto2);
*/