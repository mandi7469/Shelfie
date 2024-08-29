// Third-party Modules
const { Model, DataTypes } = require("sequelize");

// Local Modules
const sequelize = require("../config/connection");

class SearchedBook extends Model {}

SearchedBook.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    authors: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false,
    },
    thumbnail: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    publishedDate: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    pageCount: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
      // Reminder- add any new columns you'd like to the User model here
},
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "searchedbook",
    timestamps: false,
  }
);

module.exports = SearchedBook;
