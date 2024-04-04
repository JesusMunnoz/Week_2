import {Book} from "./book"

export class Library{
    //Atributos
    public books: Book[];
    private address: string;
    private manager: string;

    //Getters y Setters

    public getAddress(): string{
        return this.address;
    }
    public getManager(): string{
        return this.manager;
    }

    public setAddress(newAddress:string) : void{
        this.address = newAddress;
    }
    public setManager(newManager:string) : void{
        this.manager = newManager;
    }

    //Constructor
    constructor (books:Book[], address: string, manager:string){
        this.books = books;
        this.address = address; 
        this.manager = manager;
    }

    //Metodos

    //Funciona
    public toStringLibrary(book:Book): string{
        return (`${this.books.push(book)}`);
    }

    //funciona
    public toStringlibroteca(): string{

        let lbr: string = "";

        for (let i = 0; i < this.books.length; i++){
            let book:Book;
            book = this.books[i];

            lbr += (`Book${i+1}:\n`);
            lbr += (`Title - ${book.getTitle()}\n`);
            lbr += (`Number of Pages - ${book.getNPages()}\n`);
            lbr += (`ISBN - ${book.getISBN()}\n`);
            lbr += (`Author - ${book.getAuthor()}\n`);
            lbr += (`Editorial - ${book.getEditorial()}\n`);

            lbr += (`Addrees - ${this.address}\n`)
            lbr += (`Manager - ${this.manager}\n\n`)

        }
        return(lbr);
    }

    //Tipado de Library - No vale
    /*public printLibroteca():void{
        console.log (`Book${this.toStringlibroteca()} \n \nAddrees - ${this.address}\nManager - ${this.manager}\n`);
        
    }*/

    //Funciona
    public getNumberOfBooks(): number{
        return this.books.length;
    }

    public findByAuthor (author:string):Book[]{
        return this.books.filter(function(book){
            return book.getAuthor() == author;
        });
    }
}

/*let book1 : Book = new Book("Introducción a Javascript", 233, " 2344433-BC23333", "Joseph Smith", " Now Editions");
let book2 : Book = new Book("La Bruja Mon", 64, " 2355533-BC255555", "Pilar Mateos", "SM");
let bookLibrary : Library = new Library([], "Calle Cavanilles", "Perico Palotes");

bookLibrary.toStringLibrary(book1);
bookLibrary.toStringLibrary(book2);*/


//bookLibrary.printLibroteca();  //No vale Library tipado
//console.log(bookLibrary);  //Book1...Book2... + Address & Editor

/*console.log("");
console.log(bookLibrary.toStringlibroteca()); //Book1...Book2...
console.log(bookLibrary.getNumberOfBooks()); //2

console.log(bookLibrary.findByAuthor("Pilar Mateos"));*/