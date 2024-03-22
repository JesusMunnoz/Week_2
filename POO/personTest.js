let Person = require("./person")

let personita = new Person ("Paco", "Perez", "Pereda", 70, 1.80, 1968);
personita.introHobbies("senderismo");
personita.introHobbies("pasear con su perro");

personita.printAll();
personita.calcIMC();
personita.calcAge();
personita.printHobbies();

let c1 = new Contacts ()
c1.introPersons(personita);
c1.printPersons(personita);