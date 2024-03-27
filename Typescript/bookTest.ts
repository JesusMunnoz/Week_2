import {Book} from "./book"

let book1 : Book = new Book("Introducción a Javascript", 233, " 2344433-BC23333", "Joseph Smith", " Now Editions");
console.log(typeof book1);
console.log(book1);
console.log(book1.getAuthor());
console.log("");
console.log(book1.toString());