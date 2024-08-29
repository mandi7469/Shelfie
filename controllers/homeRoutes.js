const router = require("express").Router();

// Import any models you plan to use for data's routes here
const { User, SearchedBook, Book } = require("../models/");

// If you would like to use an authGuard middleware, import it here
const { withGuard } = require("../utils/authGuard");

// add a get / (landing page) route here
router.get("/", async (req, res) => {
  try {
    // const exampleData = await ExampleData.findAll({
    //   include: [User],
    // });

    // const examples = exampleData.map((example) => example.get({ plain: true }));

    // Reminder- We're passing the examples data to the home handlebars template here!
    // Reminder- We're also passing the loggedIn status to the home template here so that we can conditionally render items if the user is logged in or not (like we do with the navbar using `{{if loggedIn}}`).
    res.render("home", {
      loggedIn: req.session.logged_in,
      username: req.session.username,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// get for search
router.get("/search", withGuard, async (req, res) => {
  try {
    res.render("search");
  } catch (err) {
    console.log(err);
    
    res.status(500).json(err);
  }
});

// get for search
router.get("/search-results",  withGuard, async (req, res) => {
  try {
    const searchResults = await SearchedBook.findAll();
    // Reminder- We're passing the examples data to the home handlebars template here!
    // Reminder- We're also passing the loggedIn status to the home template here so that we can conditionally render items if the user is logged in or not (like we do with the navbar using `{{if loggedIn}}`).
    console.log("*****************LOOK HERE**********************");

    console.log(searchResults);
    const books = searchResults.map((book)=> book.get({plain: true}))
    res.render("search-results", {
      books
      // loggedIn: req.session.logged_in,
      // username: req.session.username,
    })
    // document.location.replace("/search-results");
  } catch (err) {
    console.log(err);
    
    res.status(500).json(err);
  }
});

// add a get /login route here
router.get("/login", (req, res) => {
  try {
    res.render("login");
  } catch (err) {
    res.status(500).json(err);
  }
});

// add a get /signup route here
router.get("/signup", (req, res) => {
  try {
    res.render("signup");
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
