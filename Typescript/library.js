"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Library = void 0;
var Library = /** @class */ (function () {
    //Constructor
    function Library(books, address, manager) {
        this.books = books;
        this.address = address;
        this.manager = manager;
    }
    //Getters y Setters
    Library.prototype.getAddress = function () {
        return this.address;
    };
    Library.prototype.getManager = function () {
        return this.manager;
    };
    Library.prototype.setAddress = function (newAddress) {
        this.address = newAddress;
    };
    Library.prototype.setManager = function (newManager) {
        this.manager = newManager;
    };
    //Metodos
    //Funciona
    Library.prototype.toStringLibrary = function (book) {
        return ("".concat(this.books.push(book)));
    };
    //funciona
    Library.prototype.toStringlibroteca = function () {
        var lbr = "";
        for (var i = 0; i < this.books.length; i++) {
            var book = void 0;
            book = this.books[i];
            lbr += ("Book".concat(i + 1, ":\n"));
            lbr += ("Title - ".concat(book.getTitle(), "\n"));
            lbr += ("Number of Pages - ".concat(book.getNPages(), "\n"));
            lbr += ("ISBN - ".concat(book.getISBN(), "\n"));
            lbr += ("Author - ".concat(book.getAuthor(), "\n"));
            lbr += ("Editorial - ".concat(book.getEditorial(), "\n"));
            lbr += ("Addrees - ".concat(this.address, "\n"));
            lbr += ("Manager - ".concat(this.manager, "\n\n"));
        }
        return (lbr);
    };
    //Tipado de Library - No vale
    /*public printLibroteca():void{
        console.log (`Book${this.toStringlibroteca()} \n \nAddrees - ${this.address}\nManager - ${this.manager}\n`);
        
    }*/
    //Funciona
    Library.prototype.getNumberOfBooks = function () {
        return this.books.length;
    };
    Library.prototype.findByAuthor = function (author) {
        return this.books.filter(function (book) {
            return book.getAuthor() == author;
        });
    };
    return Library;
}());
exports.Library = Library;
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
