export class Book {
    //Atributos
    private title : string;
    private nPages : number;
    private isbn : string;
    private author : string;
    private editorial : string;

    //Getters y Setters
    public getTitle() : string{
        return this.title;
    }
    public getNPages() : number{
        return this.nPages;
    }
    public getISBN() : string{
        return this.isbn;
    }
    public getAuthor() : string{
        return this.author;
    }
    public getEditorial() : string{
        return this.editorial;
    }

    public setTitle(newTitle:string) : void{
        this.title = newTitle;
    }
    public setNPages(newNPages:number) : void{
        this.nPages = newNPages;
    }
    public setISBN(newISBN:string) : void{
        this.isbn = newISBN;
    }
    public setAuthor(newAuthor:string) : void{
        this.author = newAuthor;
    }
    public setEditorial(newEditorial:string) : void{
        this.editorial = newEditorial;
    }

    //Constructor
    constructor (title:string, nPages:number, isbn:string, author:string, editorial:string){
        this.title = title;
        this.nPages = nPages;
        this.isbn = isbn;
        this.author = author;
        this.editorial = editorial; 
    }

    //Metodos RETURN

    public toString (): string{
        return (`Title - ${this.title}\nNumber of Pages - ${this.nPages}\nISBN - ${this.isbn}\nAuthor - ${this.author}\nEditorial - ${this.editorial}\n`);
    }

}

/*let book1 : Book = new Book("Introducción a Javascript", 233, " 2344433-BC23333", "Joseph Smith", " Now Editions");
console.log(typeof book1);
console.log(book1);
console.log(book1.getAuthor());
console.log("");
console.log(book1.toString());*/
