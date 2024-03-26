import {Person} from "./person"

export class Contacts {
    //atributos
    public people : Person[];

    //constructor
    constructor (){
        this.people = [];
    }

    //metodos
    public printcalendar(people : Person) : void{
        console.log (this.people.push(people));
    }
}
