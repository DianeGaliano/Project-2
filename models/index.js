const CarInfo = require("./CarInfo");
const Company = require("./Company");
const Customer = require("./Customer");

Customer.hasMany(CarInfo, {
  foreignKey: "customer_id",
  onDelete: "CASCADE",
});

Customer.hasOne(Company, {
  foreignKey: "",
  onDelete: "CASCADE",
});

Company.belongsTo(Customer, {
  foreignKey: "",
});

CarInfo.belongsTo(Customer, {
  foreignKey: "customer_id",
});
