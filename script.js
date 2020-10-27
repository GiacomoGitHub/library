// Books to test the code:
// ("Antifragile", "Nassim Nicholas Taleb", "544");
// ("Harry Potter and the Philosopher's Stone", "J.K.Rowling", "342")
// ("Harry Potter and the Chamber of Secrets", "J.K.Rowling", "251")
// ("Harry Potter and the Prisoner of Azkaban", "J.K.Rowling", "317")
// ("The Lord of the Rings: The Fellowship of the Ring", "J.R.Tolkien", "479")
// ("The Lord of the Rings: The Return of the King", "J.R.Tolkien", "347")

let myLibrary = []; // empty array that stores Book objects

function Book() { // constructor that creates new Book Objects
    this.title = document.getElementById("title").value;
    this.author = document.getElementById("author").value;
    this.pages = document.getElementById("pages").value + " pages";
}

function addBookToLibrary() { // takes the user's input
    let newBook = new Book(); // uses the input to create a new Object
    myLibrary.push(newBook); // adds new Book Object created with the constructor to the array myLibrary
    updateLibrary();
    clearInputFields();
}

let bookList = document.getElementById("bookList"); // targets the <p> to display the Book Objects

function updateLibrary() {
    bookList.innerHTML = " "; // clear the table before adding and showing the new books
    myLibrary.forEach(item => bookList.innerHTML += Object.values(item).join(", ") + "<br>" + "<br>"); // shows the Book Objects
}

document.getElementById("btn").addEventListener('click', addBookToLibrary); // listens to click on button and calls addBookToLibrary

function clearInputFields() { // clear the input after pressing the button
    document.getElementById("title").value = " ";
    document.getElementById("author").value = " ";
    document.getElementById("pages").value = " ";
}  