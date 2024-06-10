const STORAGE_KEY = "BOOKSHELF_APPS";
let books = [];

document.addEventListener("DOMContentLoaded", function () {
   const submitBook = document.getElementById("inputBook");
   const searchBook = document.getElementById("searchBook");
   const incompleteBookshelfList = document.getElementById(
      "incompleteBookshelfList"
   );
   const completeBookshelfList = document.getElementById(
      "completeBookshelfList"
   );

   if (localStorage.getItem(STORAGE_KEY)) {
      books = JSON.parse(localStorage.getItem(STORAGE_KEY));
      renderBooks();
   }

   submitBook.addEventListener("submit", function (event) {
      event.preventDefault();
      addBook();
   });

   searchBook.addEventListener("submit", function (event) {
      event.preventDefault();
      searchBooks();
   });

   function saveData() {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(books));
   }

   function generateId() {
      return +new Date();
   }

   function addBook() {
      const bookTitle = document.getElementById("inputBookTitle").value;
      const bookAuthor = document.getElementById("inputBookAuthor").value;
      const bookYear = document.getElementById("inputBookYear").value;
      const bookIsComplete = document.getElementById(
         "inputBookIsComplete"
      ).checked;

      const book = {
         id: generateId(),
         title: bookTitle,
         author: bookAuthor,
         year: parseInt(bookYear),
         isComplete: bookIsComplete,
      };

      books.push(book);
      saveData();
      renderBooks();
   }

   function renderBooks() {
      incompleteBookshelfList.innerHTML = "";
      completeBookshelfList.innerHTML = "";

      books.forEach((book) => {
         const bookElement = createBookElement(book);
         if (book.isComplete) {
            completeBookshelfList.append(bookElement);
         } else {
            incompleteBookshelfList.append(bookElement);
         }
      });
   }

   function createBookElement(book) {
      const bookTitle = document.createElement("h3");
      bookTitle.innerText = book.title;

      const bookAuthor = document.createElement("p");
      bookAuthor.innerText = `Penulis: ${book.author}`;

      const bookYear = document.createElement("p");
      bookYear.innerText = `Tahun: ${book.year}`;

      const bookItem = document.createElement("article");
      bookItem.classList.add("book_item");
      bookItem.append(bookTitle, bookAuthor, bookYear);

      const actionContainer = document.createElement("div");
      actionContainer.classList.add("action");

      const toggleReadButton = document.createElement("button");
      toggleReadButton.classList.add("green");
      toggleReadButton.innerText = book.isComplete
         ? "Belum selesai dibaca"
         : "Selesai dibaca";
      toggleReadButton.addEventListener("click", function () {
         toggleBookReadStatus(book.id);
      });

      const deleteButton = document.createElement("button");
      deleteButton.classList.add("red");
      deleteButton.innerText = "Hapus buku";
      deleteButton.addEventListener("click", function () {
         deleteBook(book.id);
      });

      actionContainer.append(toggleReadButton, deleteButton);
      bookItem.append(actionContainer);

      return bookItem;
   }

   function toggleBookReadStatus(bookId) {
      const book = books.find((b) => b.id === bookId);
      if (book) {
         book.isComplete = !book.isComplete;
         saveData();
         renderBooks();
      }
   }

   function deleteBook(bookId) {
      books = books.filter((b) => b.id !== bookId);
      saveData();
      renderBooks();
   }

   function searchBooks() {
      const searchTitle = document
         .getElementById("searchBookTitle")
         .value.toLowerCase();
      const filteredBooks = books.filter((book) =>
         book.title.toLowerCase().includes(searchTitle)
      );

      incompleteBookshelfList.innerHTML = "";
      completeBookshelfList.innerHTML = "";

      filteredBooks.forEach((book) => {
         const bookElement = createBookElement(book);
         if (book.isComplete) {
            completeBookshelfList.append(bookElement);
         } else {
            incompleteBookshelfList.append(bookElement);
         }
      });
   }
});
