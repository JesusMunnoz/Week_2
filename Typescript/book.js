"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Book = void 0;
var Book = /** @class */ (function () {
    //Constructor
    function Book(title, nPages, isbn, author, editorial) {
        this.title = title;
        this.nPages = nPages;
        this.isbn = isbn;
        this.author = author;
        this.editorial = editorial;
    }
    //Getters y Setters
    Book.prototype.getTitle = function () {
        return this.title;
    };
    Book.prototype.getNPages = function () {
        return this.nPages;
    };
    Book.prototype.getISBN = function () {
        return this.isbn;
    };
    Book.prototype.getAuthor = function () {
        return this.author;
    };
    Book.prototype.getEditorial = function () {
        return this.editorial;
    };
    Book.prototype.setTitle = function (newTitle) {
        this.title = newTitle;
    };
    Book.prototype.setNPages = function (newNPages) {
        this.nPages = newNPages;
    };
    Book.prototype.setISBN = function (newISBN) {
        this.isbn = newISBN;
    };
    Book.prototype.setAuthor = function (newAuthor) {
        this.author = newAuthor;
    };
    Book.prototype.setEditorial = function (newEditorial) {
        this.editorial = newEditorial;
    };
    //Metodos RETURN
    Book.prototype.toString = function () {
        return ("Title - ".concat(this.title, "\nNumber of Pages - ").concat(this.nPages, "\nISBN - ").concat(this.isbn, "\nAuthor - ").concat(this.author, "\nEditorial - ").concat(this.editorial, "\n"));
    };
    return Book;
}());
exports.Book = Book;
/*let book1 : Book = new Book("Introducción a Javascript", 233, " 2344433-BC23333", "Joseph Smith", " Now Editions");
console.log(typeof book1);
console.log(book1);
console.log(book1.getAuthor());
console.log("");
console.log(book1.toString());*/
