let Person = require("./person")

class Contacts {
    constructor(){
        this.contacts = [];
    }
    printPersons(){
        console.log(this.contacts);
    }
    introPersons(Person){
        return this.contacts.push(Person)

    }
}

module.exports = Contacts;