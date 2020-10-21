let myLibrary = []; // stores Book objects into an array

function Book(title, author, pages) { // it's the constructor that creates new Book objects
    this.title = title
    this.author = author
    this.pages = pages
}

let Book1 = new Book("Harry Potter", "J.K.Rowling", "342")

function addBookToLibrary() {
    // adds new Book to myLibrary
}