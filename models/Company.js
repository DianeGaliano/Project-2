const { UUIDV4, Model, DataTypes } = require("sequelize");
const bcrypt = require("bcrypt");
const sequelize = require("../config/connection");

class Company extends Model {
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }
}

Company.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [8],
      },
    },
    employee_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: false,
      validate: {
        len: [4],
      },
    },
  },
  {
    hooks: {
      beforeCreate: async (newCustData) => {
        newCustData.password = await bcrypt.hash(newUserData.password, 10);
        return newCustData;
      },
      beforeUpdate: async (updatedCustData) => {
        updatedCustData.password = await bcrypt.hash(
          updatedCustData.password,
          10
        );
        return updatedCustData;
      },
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "company",
  }
);

module.exports = Company;
