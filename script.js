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

function updateLibrary() { // update the library
    let displayer = document.getElementById("displayer"); // targets the displayer
    displayer.innerHTML = "MY BOOKS" + "<br>" + "<br>" + "Use the checkbox to remember which books you have read"; // clears the library and adds the title of the displayer
    myLibrary.forEach(item => { // for each Object in the array do the following
        
        bookList = document.createElement("div"); // create a new div
        bookList.setAttribute("class", "bookList"); // give it the class bookList for styling

        bookList.setAttribute("id", myLibrary.indexOf(item)); // sets the id to be the index position of the object in the array

        let toggle = document.createElement("button"); // creates the toggle button
        toggle.setAttribute("class", "toggle"); // sets its class for CSS styling
        bookList.appendChild(toggle); // appends it to the new div
        
        bookList.innerHTML += Object.values(item).join(", ") + "<br>" + "<br>"; // show the Object inside the div

        let removeBtn = document.createElement("button"); // creates the remove button
        removeBtn.setAttribute("class", "removeBtn"); // sets its class for CSS styling
        removeBtn.innerHTML = "&#10005" // sets the content inside the button
        removeBtn.setAttribute("id", myLibrary.indexOf(item)); // sets the id to be the index position of the object in the array
        bookList.appendChild(removeBtn); // appends it to the new div

        removeBtn.addEventListener('click', () => { // listen to click on remove button
            myLibrary.splice(myLibrary.indexOf(item), 1); // if clicked, remove the object from the array
            updateLibrary(); // update the library
        });
        
        displayer.appendChild(bookList); // append the new div to the DOM
        
        // WORKING ON THIS !!!
        // toggle = document.getElementsByClassName("toggle"); // targets the toggles
        // toggle.addEventListener('click', () => { alert('hey') }); // changes the appearance of the toggle
    });
}

let addButton = document.getElementById("buttonAddToLibrary"); // targets the "Add book to library" button
addButton.addEventListener('click', addBookToLibrary); // listens to click on button and calls addBookToLibrary


let inputFieldTitle = document.getElementById("title"); // targets the title input
inputFieldTitle.addEventListener('keydown', function(event) {
    if (event.key === "Enter") { // If the key "Enter" is pressed
      event.preventDefault(); // Cancel the default action, if needed
      document.getElementById("buttonAddToLibrary").click(); // Trigger the button element with a click
    }
  });


let inputFieldAuthor = document.getElementById("author"); // targets the author input
inputFieldAuthor.addEventListener('keydown', function(event) {
    if (event.key === "Enter") { // If the key "Enter" is pressed
      event.preventDefault(); // Cancel the default action, if needed
      document.getElementById("buttonAddToLibrary").click(); // Trigger the button element with a click
    }
  });


let inputFieldPages = document.getElementById("pages"); // targets the pages input
inputFieldPages.addEventListener('keydown', function(event) {
    if (event.key === "Enter") { // If the key "Enter" is pressed
      event.preventDefault(); // Cancel the default action, if needed
      document.getElementById("buttonAddToLibrary").click(); // Trigger the button element with a click
    }
  });


function clearInputFields() { // resets the input after pressing the button
    document.getElementById("title").value = title.defaultValue;
    document.getElementById("author").value = author.defaultValue;
    document.getElementById("pages").value = pages.defaultValue;
}  


// THINGS I'D LIKE TO HAVE
// don't submit if empty field and show me where I need to add stuff
// dark/light mode switch
// books stored in alphabetical order
// possibility to see only books I haven't read yet