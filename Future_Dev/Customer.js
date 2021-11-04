// const { Model, DataTypes } = require("sequelize");
// const bcrypt = require("bcrypt");
// const sequelize = require("../config/connection");

// class Customer extends Model {
//   checkPassword(loginPw) {
//     return bcrypt.compareSync(loginPw, this.password);
//   }
// }

// Customer.init(
//   {
//     id: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       primaryKey: true,
//       autoIncrement: true,
//     },
//     name: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     email: {
//       type: DataTypes.STRING,
//       allowNull: false,
//       unique: true,
//       validate: {
//         isEmail: true,
//       },
//     },
//     password: {
//       type: DataTypes.STRING,
//       allowNull: false,
//       validate: {
//         len: [8],
//       },
//     },
//     company_id: {
//       type: DataTypes.STRING,
//       allowNull: false,
//       references: {
//         model: "company",
//         key: "id",
//       },
//     },
//   },
//   {
//     hooks: {
//       beforeCreate: async (newCustData) => {
//         newCustData.password = await bcrypt.hash(newUserData.password, 10);
//         return newCustData;
//       },
//       beforeUpdate: async (updatedCustData) => {
//         updatedCustData.password = await bcrypt.hash(
//           updatedCustData.password,
//           10
//         );
//         return updatedCustData;
//       },
//     },
//     sequelize,
//     timestamps: false,
//     freezeTableName: true,
//     underscored: true,
//     modelName: "customer",
//   }
// );

// module.exports = Customer;
