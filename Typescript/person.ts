export class Person {
    //Atributos
    public name : string;
    public age : number;
    public currentYear : number;
    private address : string;

    // getters y setters
    public getAddress() : string{
        return this.address;
    }
    public setAddress(newAddress:string) : void{
        this.address = newAddress;
    }

    //Contructor
    constructor (name:string, age:number, address:string){
        this.name = name;
        this.age = age;
        this.address = address;
    }
    //Metodos
    public printname(): void{
       console.log(this.name);
       
    }
    public yearOfBirth(currentYear: number) : number {
        return (currentYear - this.age);
    }
}


/*let p1 : Person = new Person("Juan", 23, "Avenida America");
p1.printname();
console.log(p1.yearOfBirth(2024));
console.log(p1.getAddress());
p1.setAddress("Doctor Esquerdo")
console.log(p1.getAddress());*/

