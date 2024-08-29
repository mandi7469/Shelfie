const router = require("express").Router();

// import any models you plan to use for this data's routes here
const { Book } = require("../../models");

// Route: create a new book
router.post("/", async (req, res) => {
  try {
    const bookData = await Book.create(req.body);

    req.session.save(() => {
      req.session.book_id = bookData.id;
      req.session.title = bookData.title;
      req.session.authors = bookData.authors;
      req.session.thumbnail = bookData.thumbnail;
      req.session.publishedDate = bookData.publishedDate;
      req.session.description = bookData.description;
      req.session.pageCount = bookData.pageCount;
      req.session.user_id = bookData.user_id;

      res.status(200).json(bookData);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

// API Route: GET all books (for testing purposes)
router.get('/', async (req, res) => {
  // ? We find all dishes in the db and set the data equal to dishData
  const bookData = await Book.findAll().catch((err) => {
    res.json(err);
  });
  // ? We use map() to iterate over dishData and then add .get({ plain: true }) each object to serialize it.
  const dishes = bookData.map((book) => book.get({ plain: true }));
  // ? We render the template, 'all', passing in dishes, a new array of serialized objects.
  res.render('all', { books });
});



module.exports = router;
