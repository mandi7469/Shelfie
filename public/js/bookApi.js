//-------------- OK BELOW THIS IS search.js CONTENT FOR THE /SEARCH PAGE------------------------------------------------
// const Sequelize = require("sequelize");
// require("dotenv").config();
// const router = require("express").Router();
// let searchedBook =`lord of the rings`; //this is a placeholder search for testing and will become from user input
const maxResults = 6; //limits results to 6

//this will hold the array of up to 6 search results
let bookResults = [];

//these are the local storage items for both search queries
let search = JSON.parse(localStorage.getItem("search"));
let genre;

//function to search for a query and return an array of 6 book objects from the results
function getBooks(searchedBook) {
  //url for google books API
  //if only using the keyword search
  let booksUrl;
  if (search && !genre) {
    booksURL = `https://www.googleapis.com/books/v1/volumes?q=${searchedBook}&maxResults=${maxResults}&key=AIzaSyDHEnaX2QUg8xYq_F9TdxEXKe_UElIeU9A`;
  } else if (search && genre) {
    //if using both a genre search AND a keyword search
    booksURL = `https://www.googleapis.com/books/v1/volumes?q=${searchedBook}+subject=${genre}&maxResults=${maxResults}&key=AIzaSyDHEnaX2QUg8xYq_F9TdxEXKe_UElIeU9A`;
  }
  const apiOptions = {
    method: "GET",
  };

  fetch(booksURL, apiOptions)
    .then(function (response) {
      //return data as json
      return response.json();
    })
    //this is where we create the books from the results
    .then(function (books) {
      for (let i = 0; i < books.items.length; i++) {
        //this makes it easier to parse through the data
        const book = books.items[i];

        //makes each book object
        const newBook = {
          tempId: i + 1,
          title: book.volumeInfo.title,
          authors: book.volumeInfo.authors,
          publishedDate: book.volumeInfo.publishedDate,
          //fill with placeholder link DO THIS
          thumbnail: book.volumeInfo.imageLinks
            ? book.volumeInfo.imageLinks.thumbnail
            : "../images/placeholder-cover2.png", //replace the null w/placeholder image ink
          description: book.volumeInfo.description,
          pageCount: book.volumeInfo.pageCount,
        };
        //adds the books to the array of searched books
        bookResults.push(newBook);
      }
      //log all the results to check
      console.log(bookResults);
      localStorage.setItem("bookResults", JSON.stringify(bookResults));

      //dynamically generate html on the document
      //this is the main area the book results will go into that already exists on the handlebars view
      const bookZone = document.getElementById("book-zone");

      //then for each book....
      for (let i = 0; i < bookResults.length; i++) {
        const book = bookResults[i];
        //making a new div for the each search result object
        const resultItem = document.createElement("div");
        resultItem.setAttribute("style", "width: 30%;");
        resultItem.setAttribute(
          "class",
          "card book-info m-3 p-3 flex-sm-grow-1"
        );
        resultItem.setAttribute("id", i);

        //result counter
        const resultCounter = document.createElement("p");
        resultCounter.setAttribute("style", "font-size: x-small;");
        resultCounter.textContent = `Result ${i + 1} /6`;

        //cover div
        const coverDiv = document.createElement("div");
        coverDiv.setAttribute("class", "text-center");

        //cover el
        const resultCover = document.createElement("img");
        const coverAlt = `Book Cover for ${book.title}`;
        resultCover.setAttribute("style", "width: 130px;");
        if (book.thumbnail) {
          resultCover.setAttribute("src", book.thumbnail);
        } else if(book.thumbnail == null){
          resultCover.setAttribute("src", "../images/placeholder-cover2.png");

        }
        resultCover.setAttribute("alt", coverAlt);
        resultCover.setAttribute("class", "card-img-top");

        //card body div
        const bodyDiv = document.createElement("div");
        bodyDiv.setAttribute("class", "card-body");
        //title el
        const resultTitle = document.createElement("h4");
        resultTitle.textContent = book.title;
        resultTitle.setAttribute("class", "card-title text-center");
        //author(s) el
        const resultAuthor = document.createElement("h6");
        resultAuthor.textContent = "By: ";
        //authors is an array so we have to do it like this
        for (let i = 0; i < book.authors.length; i++) {
          const author = book.authors[i];
          //this ADDS the author text to whats already there
          resultAuthor.textContent += `${author}`;
          //and if we have multiple authors add the + button before listing other people
          if (i < book.authors.length - 1) {
            resultAuthor.textContent += " + ";
          }
        }
        //description el
        const resultDesc = document.createElement("p");
        resultDesc.setAttribute("class", "card-text");
        resultDesc.setAttribute("style", "font-size:smaller;");
        resultDesc.textContent = book.description;
        //its i+1 to match what the id's of the books are
        const bookBtnId = `${i + 1}`;
        const addDiv = document.createElement("div");
        addDiv.setAttribute("class", "text-center");
        addDiv.setAttribute("id", "add-button-div");
        //add book button
        const addButton = document.createElement("button");
        addButton.setAttribute("type", "submit");
        addButton.setAttribute("id", bookBtnId);
        addButton.setAttribute("class", "btn btn-light mt-3 mb-3 add-book");
        addButton.textContent = "Add Book to Collection ⊕";

        // // more info button (this is a pipe dream)
        // const infoDiv = document.createElement("div");
        // infoDiv.setAttribute("class", "text-center");
        // infoDiv.setAttribute("id", "info-button-div");
        // const infoButton = document.createElement("button");
        // infoButton.setAttribute("type", "submit");
        // infoButton.setAttribute("id", bookBtnId);
        // infoButton.setAttribute("class", "btn btn-light mt-3 mb-3 more-info");
        // infoButton.textContent = "More info about this book ⇒";

        //add it all together
        coverDiv.append(resultCover);
        addDiv.append(addButton);
        // infoDiv.append(infoButton);
        bodyDiv.append(resultTitle, resultAuthor, resultDesc, addDiv);
        resultItem.append(coverDiv, bodyDiv);

        //and add each item to book zone
        bookZone.append(resultItem);

        // infoButton.addEventListener("click", moreBookInfo);
        addButton.addEventListener("click", bookAddHandler);
      }
    });
}

//function that handles the search query from the /search page. takes user input and feeds it to the above API
const searchHandler = async function (event) {
  event.preventDefault();
  //document query for search bar
  const searchedBook = document.querySelector("#titlesearch").value.trim();
  const genreSearch = document.querySelector("#genresearch").value.trim();

  //if theres both a general search and a genre search
  if (searchedBook && genreSearch) {
    console.log(`SEARCHING FOR: ${searchedBook} in ${genreSearch} genre`);
    localStorage.setItem("search", JSON.stringify(searchedBook));
    localStorage.setItem("genre", JSON.stringify(genreSearch));

    window.location.replace("/search-results");

    //if only general search
  } else if (searchedBook && !genreSearch) {
    console.log(`SEARCHING FOR: ${searchedBook}`);
    localStorage.setItem("search", JSON.stringify(searchedBook));

    window.location.replace("/search-results");

    //if no general search
  } else if (!searchedBook) {
    const alertLocation = document.querySelector("#search-bar");
    const alert = document.createElement("div");
    alert.setAttribute("class", "alert alert-danger");
    alert.setAttribute("role", "alert");
    alert.textContent = "Please enter a book name in the search bar";
    alertLocation.append(alert);
  }
};

//function to add books to the database
const bookAddHandler = async (event) => {
  event.preventDefault();
  console.log(event.target);
  //only do stuff if the target is a button
  if (event.target.matches("button")) {
    const clickedId = event.target.getAttribute("id");
    console.log(`THE ID OF THE CLICKED BOOK IS ${clickedId}`);
    //make result variable out here so it can be accessed later
    let result;
    //for each of the bookResults check if the id matches clickedId
    for (let i = 0; i < bookResults.length; i++) {
      const book = bookResults[i];
      if (book.tempId == clickedId) {
        result = book;
      }
    }

    //re-create the book without an id so that it can be added to the book database with a new id
    const bookToAdd = {
      title: result.title,
      authors: result.authors,
      thumbnail: result.thumbnail,
      publishedDate: result.publishedDate,
      description: result.description,
      pageCount: result.pageCount,
    };

    //log to check
    console.log(
      `___________THIS SHOULD BE THE BOOK THAT MATCHED THE CLICKED ID________________`
    );
    console.log(bookToAdd);

    //post to the database
    const response = await fetch(`/api/search/addBook`, {
      method: "POST",
      body: JSON.stringify(bookToAdd),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      //take you back to the empty search page?
      alert("Added the book to your collection!");
      document.location.replace("/search");
      console.log(response);
    } else {
      alert("Failed to add the book");
    }
  }
};

//this checks which page we're on so i dont get errors about not being able to access the addeventlisteners
const pageChecker = function () {
  console.log("checking which page we're on");
  console.log(window.location.pathname);

  if (window.location.pathname === "/search") {
    //event listener for the search btn
    genre = null;
    document
      .querySelector("#search-btn")
      .addEventListener("click", searchHandler);
  } else if (window.location.pathname === "/search-results") {
    //on page load get the search results
    genre = JSON.parse(localStorage.getItem("search"))
    getBooks(search);
    console.log("performing the search for" + search);
  }
};
//calls the function that checks the page, should happen immediately
pageChecker();

// const moreBookInfo = async function (event) {
//   console.log("and now you'd go to the book page");
//   alert("you would go to book info page");
//   event.preventDefault();
//   console.log(event.target);

//   event.preventDefault();
//   console.log(event.target);

//     const clickedId = event.target.getAttribute("id");
//     console.log(`THE ID OF THE CLICKED BOOK IS ${clickedId}`);
//     //make result variable out here so it can be accessed later
//     let result;
//     //for each of the bookResults check if the id matches clickedId
//     for (let i = 0; i < bookResults.length; i++) {
//       const book = bookResults[i];
//       if (book.tempId == clickedId) {
//         result = book;
//       }
//     }

//     //re-create the book without an id so that it can be added to the book database with a new id
//     const bookToAdd = {
//       title: result.title,
//       authors: result.authors,
//       thumbnail: result.thumbnail,
//       publishedDate: result.publishedDate,
//       description: result.description,
//       pageCount: result.pageCount,
//     };

//     //log to check
//     console.log(
//       `___________THIS SHOULD BE THE BOOK THAT MATCHED THE CLICKED ID________________`
//     );
//     console.log(bookToAdd);

    

//   const response = await fetch(`/book/${clickedId}`, {
//     method: "GET",
//   });
//    window.location.replace(`/book/${clickedId}`);

// };
