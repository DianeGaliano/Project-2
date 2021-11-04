const router = require("express").Router();
const { Company } = require("../../models");
const withAuth = require("../../utils/auth");

router.post("/", async (req, res) => {
  try {
    const compData = await Company.create(req.body);

    req.session.save(() => {
      req.session.company_id = compData.id;
      req.session.logged_in = true;

      res.status(200).json(compData);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post("/login", async (req, res) => {
  try {
    const compData = await Company.findOne;
    ({ where: { email: req.body.email } });

    if (!compData) {
      res
        .status(404)
        .json({ message: "Incorrect email or password, please try again." });
      return;
    }

    req.session.save(() => {
      req.session.company_id = compData.id;
      req.session.logged_in = true;

      res.json({ user: compData, message: "You are now logged in!" });
    });
  } catch (err) {
    res.status(400).json(err);
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
