
class Person {
    constructor(nm, snm1, snm2, w, h, yob, hobbies){
        this.name = nm;
        this.surname1 = snm1;
        this.surname2 = snm2;
        this.weight = w;
        this.height = h;
        this.yearOfBirth = yob;
        this.hobbies = hobbies;
    }

    calcIMC(){
        console.log( `\nEl indice de masa corporal de ${this.name} es de ${this.weight/(this.height**2)}`);
    }

    calcAge(){
        let currentYear = 2024;
        console.log(`${this.name} tiene ${currentYear - this.yearOfBirth} annos de edad`);
    }

    printAll() {
        console.log(`${this.name} - ${this.surname1} - ${this.surname2} - ${this.weight} - ${this.height} - ${this.yearOfBirth}`);
    }

    printHobbies() {
        console.log(`Los hobbies de ${this.name} son: ${this.hobbies}`);
        console.log(`Los hobbies de ${this.name} son: ${this.hobbies[0]}, ${this.hobbies[1]}, ${this.hobbies[2]} y ${this.hobbies[3]}`);
        
        /*for(i=0; i<this.hobbies.length;i++){
            console.log(`${this.hobbies[i]}`);
        }*/
    }
}

let person1 = new Person ("Pepe", "Garcia", "Martin", 70, 1.80, 1968, ["senderismo", "nadar", "pintar", "escuchar musica"]);
console.log(person1);
person1.calcIMC()
person1.calcAge()
person1.printAll()
person1.printHobbies()


/*let arr = [1,2,3,4,5,6,7,8,9]
for(i=0; i<arr.length;i++){
    console.log(arr[i]);
}*/