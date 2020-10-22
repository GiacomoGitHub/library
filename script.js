
let antifragile = new Book ("Antifragile", "Nassim Taleb", "544"); // we use this Book Object as a sample to see how to make Books appear on screen

let harryPotter1 = new Book ("Harry Potter and the Philosopher's Stone", "J.K.Rowling", "342"); // we use this Book Object as a sample to see how to make Books appear on screen


let myLibrary = [antifragile, harryPotter1]; // it's an empty array that stores our Book objects


function Book(title, author, pages) { // it's the constructor that creates new Book Objects
    this.title = title
    this.author = author
    this.pages = pages
}


function addBookToLibrary(title, author, pages) { // takes the user's input
    let newBook = new Book (title, author, pages); // it uses it to create a new Object
    myLibrary.push(newBook); // adds new Book Object we just created with the constructor to the array myLibrary
}

let demo = document.getElementById("demo"); // this targets the <p> where we will display the Book Objects

myLibrary.forEach(item => demo.innerHTML = Object.values(item).join(" ")); // this should show the Book Objects, but it's not working yet



// Some books to test our code:
// ("Harry Potter and the Philosopher's Stone", "J.K.Rowling", "342")
// ("Harry Potter and the Chamber of Secrets", "J.K.Rowling", "251")
// ("Harry Potter and the Prisoner of Azkaban", "J.K.Rowling", "317")
// ("The Lord of the Rings: The Fellowship of the Ring", "J.R.Tolkien", "479")
// ("The Lord of the Rings: The Return of the King", "J.R.Tolkien", "347")

// possible way to show books on page
// let libraryDisplayer = document.getElementById("libraryDisplayer");
// myLibrary.forEach(item => libraryDisplayer.innerHTML += "<br>" + Object.values(item).join(" "));