const router = require("express").Router();
require("dotenv").config();
const axios = require("axios");

// protects routes from unauthorized access
const { withGuard } = require("../../utils/authGuard");

// things that deal with the search functions

const { Book, SearchedBook } = require("../../models");
const { logger } = require("sequelize/lib/utils/logger");
const { json } = require("sequelize");

//get the search results and render them????? except i wrote that in bookAPI.js
router.get("/search-results", withGuard, async (req, res) => {
  try {
    // getBooks(req.body),
      res.render("search-results", {
        // bookResults,
        loggedIn: req.session.logged_in,
      });
  } catch (err) {
    res.status(500).json(err);
  }
});

//to add the selected searched book ot the database
router.post("/addBook",  withGuard, async (req, res) => {
  try {
    console.log("addBook running");

    console.log(req.body);

    const newBookData = await Book.create(req.body);
    res.json(newBookData);
  } catch (err) {
    console.log(err);

    res.status(400).json(err);
  }
});

//posts the search results to a new table and then redners them MAYBE LOL
router.post("/searchResults", async (req, res) => {
  try {

    console.log("we're in the post route");
    
    const searchResults = req.body;

    await SearchedBook.destroy({ truncate: true, restartIdentity: true });
    

    const results = await SearchedBook.bulkCreate(searchResults);
    // res.json(searchResults);

    // const books = searchResults.map((book)=> book.get({plain: true}))
    res.redirect("/search-results"
      // searchResults
      // loggedIn: req.session.logged_in,
      // username: req.session.username,
    )
  } catch (err) {
    console.log(err);
    
    res.status(500).json(err);
  }
});

//get all the searched books?
router.get("/searchResults", withGuard, async (req, res) => {
  try {
    const searchedBooks = await SearchedBook.findAll();
    console.log("-----these are the searchedBooks from the GET route------");
    console.log(searchedBooks);
    
    const books = searchedBooks.map((book)=> book.get({plain: true}))
    console.log("--------THIS IS books FROM THE GET ROUTE");
    console.log(books);
    
    // res.json(books);
    res.status(200).json(books);
    // console.log(json(books));
    // return books;

  } catch (err) {
    console.log(err);
    
    res.status(500).json(err);
  }
});

//get only the searched book with the matching id
router.get("/searchResults/:id", async (req, res) => {
  try {
    const book = await SearchedBook.findByPk(req.params.id, {
      // include: [{ model: SearchedBook }],
    });

    if (!SearchedBook) {
      res.status(404).json({ message: 'No book from search found with that id!' });
      return;
    }

    res.status(200).json(book);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/results/:name", async (req,res) => {
  try{
  const name = req.params.name;
  const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${name}&maxResults=6&key=${process.env.API_KEY}`);
  // const bookResults = await response.json();
  const books = response.data.items;
  console.log(books);
  
for (let i = 0; i < books.length; i++) {
  books[i].tempId = i+1;
}
res.render("search-results", {
  books
  // loggedIn: req.session.logged_in,
  // username: req.session.username,
})
} catch(err) {
  console.log(err);
  
  res.status(500).json(err);
}
})


module.exports = router;
