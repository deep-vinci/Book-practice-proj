const container = document.querySelector(".book-card-container");
const addBook = document.querySelector(".add-book");

const dialog = document.querySelector("dialog");
const closeButton = document.querySelector(".close button");

// input box
const title = document.querySelector("#title");
const author = document.querySelector("#author");
const pages = document.querySelector("#pages");

const dialogAddButton = document.querySelector(".dialog-add-button");

const myLibrary = [
    "HP series",
    "Maze runner series",
    "If you could see the sun",
    "I hope this doesn't find you",
    "kaiju preservation society"
];

function Book() {
    // the constructor...
}

function addBookToLibrary() {
    let userBookInput = prompt("Name the book");
    myLibrary.push(userBookInput);
    console.log(myLibrary)
}

// addBookToLibrary();

function displayBooks() {
    myLibrary.forEach(book => {
        let bookCard = document.createElement("div");
        bookCard.classList.add("book-card");
        bookCard.textContent = book;
        container.appendChild(bookCard);;
        console.log(book)
    });
}

displayBooks();


// "Show the dialog" button opens the dialog modally
addBook.addEventListener("click", () => {
  dialog.showModal();
});

// "Close" button closes the dialog
closeButton.addEventListener("click", () => {
  dialog.close();
});

// window.addEventListener("load", (event) => {
//   dialog.showModal();
// });

dialogAddButton.addEventListener("click", event => {
    event.preventDefault();
    window.returnValue = {
        title: title.value,
        author: author.value,
        pages: pages.value,
    };
    dialog.close()
})

dialog.addEventListener("close", () => {
    // console.log(returnValue)
    let bookCard = document.createElement("div");
    bookCard.classList.add("book-card");
    bookCard.textContent = returnValue.title;
    container.appendChild(bookCard);

});