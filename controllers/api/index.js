const router = require("express").Router();
const carInfoRoutes = require("./carInfoRoutes");
const companyRoutes = require("./companyRoutes");
//const customerRoutes = require("./customerRoutes");

//router.use("/cust", customerRoutes);
router.use("/comp", companyRoutes);
router.use("/carInfo", carInfoRoutes);

router.post("/new/testColor", (req, res) => {
  console.log(req.body);
  res.json("cats");
});

module.exports = router;
