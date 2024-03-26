import {Person} from "./person"
import {Contacts} from "./contact"

/*let p1 : Person = new Person("Juan", 23, "Avenida America");
p1.printname();
console.log(p1.yearOfBirth(2024));
console.log(p1.getAddress());
p1.setAddress("Doctor Esquerdo")
console.log(p1.getAddress());*/



let c1 : Person = new Person("Peter", 44, "Avenida mediterraneo");
let c2 : Person = new Person("John", 45, "Avenida barcelona");
let ctcts : Contacts= new Contacts();
ctcts.printcalendar(c1);
ctcts.printcalendar(c2);
console.log(ctcts);