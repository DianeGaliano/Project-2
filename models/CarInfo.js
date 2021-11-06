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
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
    },
    date_created: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    // customer_id: {
    //   type: DataTypes.INTEGER,
    //   references: {
    //     model: "customer",
    //     key: "id",
    //   },
    //   allowNull: true,
    // },
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
