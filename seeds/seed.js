const sequelize = require("../config/connection");

// Reminder- import any models you want to seed here
const { User, Book, Comment } = require("../models");

// Reminder- import any data you want to seed here
const userData = require("./userData.json");
const bookData = require("./bookData.json");
const commentData = require("./commentData.json");

const seedDatabase = async () => {
  // sync all models
  await sequelize.sync({ force: true });
  console.log("Sequelize synced");

  // bulkCreate example users
  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });
  console.log("Users created");

  // bulkCreate example books
  await Book.bulkCreate(bookData, {
    returning: true,
  });
  console.log("Books created");

    // bulkCreate example comments
    await Comment.bulkCreate(commentData, {
      returning: true,
    });
    console.log("Comments created");

  // Reminder- add any other models you want to seed here

  process.exit(0);
};

seedDatabase();
