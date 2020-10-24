
let antifragile = new Book ("Antifragile", "Nassim Nicholas Taleb", "544"); // this Book Object is a sample to test the code

let harryPotter1 = new Book ("Harry Potter and the Philosopher's Stone", "J.K.Rowling", "342"); // // this Book Object is a sample to test the code


let myLibrary = [antifragile, harryPotter1]; // empty array that stores Book objects


function Book(title, author, pages) { // constructor that creates new Book Objects
    this.title = title
    this.author = author
    this.pages = pages + " pages"
}


function addBookToLibrary(title, author, pages) { // takes the user's input
    let newBook = new Book (title, author, pages); // uses the input to create a new Object
    myLibrary.push(newBook); // adds new Book Object created with the constructor to the array myLibrary
}

let bookList = document.getElementById("bookList"); // targets the <p> to display the Book Objects

myLibrary.forEach(item => bookList.innerHTML += "- " + Object.values(item).join(", ") + "<br>" + "<br>"); // shows the Book Objects

// Books to test the code:
// ("Harry Potter and the Philosopher's Stone", "J.K.Rowling", "342")
// ("Harry Potter and the Chamber of Secrets", "J.K.Rowling", "251")
// ("Harry Potter and the Prisoner of Azkaban", "J.K.Rowling", "317")
// ("The Lord of the Rings: The Fellowship of the Ring", "J.R.Tolkien", "479")
// ("The Lord of the Rings: The Return of the King", "J.R.Tolkien", "347")