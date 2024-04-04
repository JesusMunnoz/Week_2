import {Book} from "./book"
import {Library} from "./library"

let book1 : Book = new Book("Introducción a Javascript", 233, " 2344433-BC23333", "Joseph Smith", " Now Editions");
let book2 : Book = new Book("La Bruja Mon", 64, " 2355533-BC255555", "Pilar Mateos", "SM");
let bookLibrary : Library = new Library([], "Calle Cavanilles", "Perico Palotes");

bookLibrary.toStringLibrary(book1);
bookLibrary.toStringLibrary(book2);

console.log("");
console.log(bookLibrary.toStringlibroteca()); //Book1+ Address & Editor   Book2+ Address & Editor
console.log(bookLibrary.getNumberOfBooks()); //2

console.log(bookLibrary.findByAuthor("Pilar Mateos"));
console.log(bookLibrary.findByAuthor("Joseph Smith"));