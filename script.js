// Books for testing the code:
// ("Antifragile", "Nassim Nicholas Taleb", "544");
// ("Harry Potter and the Philosopher's Stone", "J.K.Rowling", "342")
// ("Harry Potter and the Chamber of Secrets", "J.K.Rowling", "251")
// ("Harry Potter and the Prisoner of Azkaban", "J.K.Rowling", "317")
// ("The Lord of the Rings: The Fellowship of the Ring", "J.R.Tolkien", "479")
// ("The Lord of the Rings: The Return of the King", "J.R.Tolkien", "347")

let myLibrary = []; // store Book Objects in this empty array

function Book() { // use this constructor to create new Book Objects
    this.title = document.getElementById("title").value;
    this.author = document.getElementById("author").value;
    this.pages = document.getElementById("pages").value + " pages";
    this.read = false;
}

function addBookToLibrary() { // take the user's input
    let newBook = new Book(); // use the input to create a new Object
    myLibrary.push(newBook); // add new Book Object created with the constructor to the array "myLibrary"
    updateLibrary(); // update the library
    clearInputFields(); // clear input fields
}

function updateLibrary() { // update the library
    let displayer = document.getElementById("displayer"); // target the displayer
    displayer.innerHTML = "MY BOOKS" + "<br>" + "<br>" + "Use the checkbox to remember which books you have read"; // clear the library and adds the title of the displayer
    myLibrary.forEach(item => { // for each Object in the array do the following:
        
        bookList = document.createElement("div"); // create a new div
        bookList.setAttribute("class", "bookList"); // give it the class bookList for styling
        bookList.setAttribute("id", myLibrary.indexOf(item)); // set the id to be the index position of the object in the array
        bookList.innerHTML += Object.values(item).join(", ") + "<br>" + "<br>"; // show the Object inside the div

        let toggle = document.createElement("button"); // create the toggle button

        function setToggleClass() { // set the toggle's class for styling based on the key "read"
            if (item.read === false) { // if it has not been read
                toggle.setAttribute("class", "toggle"); // set its class to the unchecked toggle
            } else { // otherwise
                toggle.setAttribute("class", "toggleActivated"); // set its class to the checked toggle
                toggle.innerHTML = "&check;"; // put a check symbol in the toggle
            }
        }

        setToggleClass(); // call the function to check or uncheck the toggle

        bookList.appendChild(toggle); // append the toggle to the new div

        toggle.addEventListener('click', () => {  // listen to click on toggle 
            if (item.read === false) { // if the toggle is unchecked
                toggle.setAttribute("class", "toggleActivated"); // change the class of the toggle to check it
                item.read = true; // set the key "read" to true
                toggle.innerHTML = "&check;"; // put a check symbol in the toggle
            } else { // otherwise
                toggle.setAttribute("class", "toggle"); // uncheck the toggle and remove the check symbol
                item.read = false; // set the key "read" to false
            } 
        });

        let removeBtn = document.createElement("button"); // create the remove button
        removeBtn.setAttribute("class", "removeBtn"); // set its class for CSS styling
        removeBtn.innerHTML = "&#10005" // set the content inside the button
        removeBtn.setAttribute("id", myLibrary.indexOf(item)); // set the id to be the index position of the object in the array
        bookList.appendChild(removeBtn); // append it to the new div
        removeBtn.addEventListener('click', () => { // listen to click on remove button
            myLibrary.splice(myLibrary.indexOf(item), 1); // if clicked, remove the object from the array
            updateLibrary(); // update the library
        });
        
        displayer.appendChild(bookList); // append the new div to the DOM
    });
}

let addButton = document.getElementById("buttonAddToLibrary"); // target the "Add book to library" button
addButton.addEventListener('click', addBookToLibrary); // listen to click on button and calls addBookToLibrary


let inputFieldTitle = document.getElementById("title"); // target the title input
inputFieldTitle.addEventListener('keydown', function(event) { // listen to pressing of a key
    if (event.key === "Enter") { // if the key "Enter" is pressed
      event.preventDefault(); // cancel the default action, if needed
      document.getElementById("author").focus(); // move to next input field
    }
  });


let inputFieldAuthor = document.getElementById("author"); // target the author input
inputFieldAuthor.addEventListener('keydown', function(event) {
    if (event.key === "Enter") { // if the key "Enter" is pressed
      event.preventDefault(); // cancel the default action, if needed
      document.getElementById("pages").focus(); // move to next input field
    }
  });


let inputFieldPages = document.getElementById("pages"); // target the pages input
inputFieldPages.addEventListener('keydown', function(event) {
    if (event.key === "Enter") { // if the key "Enter" is pressed
      event.preventDefault(); // cancel the default action, if needed
      document.getElementById("buttonAddToLibrary").click(); // add the book ad though by clicking the button
    }
  });


function clearInputFields() { // reset the input after pressing the button
    document.getElementById("title").value = title.defaultValue;
    document.getElementById("author").value = author.defaultValue;
    document.getElementById("pages").value = pages.defaultValue;
}  


// THINGS I'D LIKE TO HAVE
// don't submit if empty field and show me where I need to add stuff
// dark/light mode switch
// books stored in alphabetical order
// possibility to see only books I haven't read yet