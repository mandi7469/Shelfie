// Third-party Modules
const { Model, DataTypes } = require("sequelize");
const bcrypt = require("bcrypt");

// Local Modules
const sequelize = require("../config/connection");
// checks login password with de-hashed user password on file
class User extends Model {
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }
}
User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [8, Infinity],
      },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    // on password creation, hashes password before storing
    hooks: {
      beforeCreate: async (newUserData) => {
        newUserData.password = await bcrypt.hash(newUserData.password, 10);
        return newUserData;
      },
      beforeUpdate: async (updatedUserData) => {
        updatedUserData.password = await bcrypt.hash(
          updatedUserData.password,
          10
        );
        return updatedUserData;
      },
    },
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "user",
  }
);

module.exports = User;
