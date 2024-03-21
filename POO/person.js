class Person {
    constructor(nm, snm1, snm2, w, h, yob, hobbies){
        this.name = nm;
        this.surname1 = snm1;
        this.surname2 = snm2;
        this.weight = w;
        this.height = h;
        this.yearOfBirth = yob;
        this.hobbies = [];
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
    }

    introHobbies(hobbie){
        this.hobbies.push(hobbie)
    }
}

module.exports = Person