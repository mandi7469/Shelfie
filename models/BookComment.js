const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class BookComment extends Model {}

// Intermediary object, intended to bridge Comments between Book and User relations

BookComment.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    book_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'book',
        key: 'id',
      }
    },
    comment_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'comment',
        key: 'id',
      }
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = BookComment;
