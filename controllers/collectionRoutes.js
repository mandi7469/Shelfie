const router = require("express").Router();

// import any models you plan to use for this page's routes here
const { Book, User } = require("../models");

// protects routes from unauthorized access
const { withGuard } = require("../utils/authGuard");

router.get("/", withGuard, async (req, res) => {
  try {
    const booksByUser = await Book.findAll({
      // Reminder- this is how you filter data by user_id
      where: {
        user_id: req.session.user_id,
      },
    });

    const userBooks = booksByUser.map((book) =>
      book.get({ plain: true })
    );
    console.log("userBooks", userBooks);
    // Reminder- We're passing the userExamples data to the page-one handlebars template here!
    // Reminder- We're also passing the loggedIn status to the page-one handlebars template here so that we can conditionally render items if the user is logged in or not.
    res.render("collection", {
      userBooks,
      loggedIn: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;
