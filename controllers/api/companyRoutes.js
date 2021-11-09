const router = require("express").Router();
const { Company } = require("../../models");
const withAuth = require("../../utils/auth");

router.post("/", async (req, res) => {
  try {
    const compData = await Company.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      employee_id: req.body.employee_id,
    });

    const { name, email, employee_id } = compData;

    const userData = { name, email, employee_id };

    req.session.save(() => {
      req.session.logged_in = true;
      req.session.company_id = compData.id;
      res.status(200).json(userData);
    });
  } catch (err) {
    console.log(err);
    res.status(500);
  }
});

router.post("/login", async (req, res) => {
  try {
    const compData = await Company.findOne({
      where: { email: req.body.email },
    });
    // console.log(compData);
    // debugger;
    if (req.body.employee_id !== compData.employee_id) {
      res
        .status(404)
        .json({ message: "Incorrect email or password, please try again." });
      return;
    }
    if (!compData.checkPassword(req.body.password)) {
      res
        .status(404)
        .json({ message: "Incorrect email or password, please try again." });
      return;
    }
    const { name, email, employee_id } = compData;

    const userData = { name, email, employee_id };

    req.session.save(() => {
      req.session.company_id = compData.id;
      req.session.logged_in = true;
    });
    res.status(200).json({ user: userData, message: "You are now logged in!" });
  } catch (err) {
    console.log(err);
    res.status(400);
  }
});

router.post("/logout", async (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
