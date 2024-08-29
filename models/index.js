// import all models here
const User = require("./User");
const Book = require("./Book");
const Comment = require("./Comment");
const SearchedBook = require("./SearchedBook");

// IN DEVELOPMENT: db pathways; User has many Books and many Comments. Books have many Comments. Comments connect to single User and single Book through BookComment
User.hasMany(Book, {
  foreignKey: 'user_id',
})

User.hasMany(Comment, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
})

Comment.belongsTo(User, {
foreignKey: 'user_id',
onDelete: 'CASCADE',
})

Comment.belongsTo(Book, {
  foreignKey: 'book_id',
  onDelete: 'CASCADE',
})

Book.hasMany(Comment, {
  foreignKey: 'book_id'
})

Book.belongsTo(User, {
  foreignKey: 'user_id',
})

// export all models here
module.exports = { User, Book, Comment, SearchedBook };
