const router = require("express").Router();
const { CarInfo, Company } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", async (req, res) => {
  try {
    const carData = await CarInfo.findall({
      include: [
        {
          model: Company,
          attributes: ["name"],
        },
      ],
    });

    const cars = carData.map((car) => car.get({ plain: true }));

    res.render("homepage", {
      cars,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/carinfo/:id", async (req, res) => {
  try {
    const carData = await CarInfo.findByPk(req.params.id, {
      include: [
        {
          model: Company,
          attributes: ["name"],
        },
      ],
    });

    const car = carData.get({ plain: true });

    res.render("cars", {
      ...car,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

//router.get("/custprof", withAuth, async (req, res) => {});
router.get("/testRoute", (req, res) => {
  res.render("test");
});

router.get("/compprof", withAuth, async (req, res) => {
  try {
    const compData = await Company.findByPk(req.session.company_id, {
      attributes: { exculde: ["password"] },
      include: [{ model: CarInfo }],
    });

    const user = compData.get({ plain: true });

    res.render("profile", {
      ...user,
      logged_in: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/login", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/compprof");
    return;
  }

  res.render("login");
});

module.exports = router;
