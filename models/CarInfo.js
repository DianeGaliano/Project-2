const { UUIDV4, Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class CarInfo extends Model {}

CarInfo.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
    },
    vehicle: {
      type: DataTypes.STRING,
    },
    phone: {
      type: DataTypes.STRING,
    },
    date_created: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    company_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "company",
        key: "id",
      },
      allowNull: true,
    },
    reference_id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "carinfo",
  }
);

module.exports = CarInfo;
