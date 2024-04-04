"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var book_1 = require("./book");
var library_1 = require("./library");
var book1 = new book_1.Book("Introducción a Javascript", 233, " 2344433-BC23333", "Joseph Smith", " Now Editions");
var book2 = new book_1.Book("La Bruja Mon", 64, " 2355533-BC255555", "Pilar Mateos", "SM");
var bookLibrary = new library_1.Library([], "Calle Cavanilles", "Perico Palotes");
bookLibrary.toStringLibrary(book1);
bookLibrary.toStringLibrary(book2);
console.log("");
console.log(bookLibrary.toStringlibroteca()); //Book1+ Address & Editor   Book2+ Address & Editor
console.log(bookLibrary.getNumberOfBooks()); //2
console.log(bookLibrary.findByAuthor("Pilar Mateos"));
console.log(bookLibrary.findByAuthor("Joseph Smith"));
