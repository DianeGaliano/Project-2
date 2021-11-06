const sequelize = require("../config/connection");
const { Company, CarInfo } = require("../models");

const companyData = require("./companyData.json");
const carinfoData = require("./carInfoData.json");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const company = await Company.bulkCreate(companyData, {
    individualHooks: true,
    returning: true,
  });

  for (const carinfo of carinfoData) {
    await carinfo.create({
      ...carinfo,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();
