"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var book_1 = require("./book");
var book1 = new book_1.Book("Introducción a Javascript", 233, " 2344433-BC23333", "Joseph Smith", " Now Editions");
console.log(typeof book1);
console.log(book1);
console.log(book1.getAuthor());
console.log("");
console.log(book1.toString());
