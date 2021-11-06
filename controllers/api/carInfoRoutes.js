const router = require("express").Router();
const { CarInfo, Company } = require("../../models");
const withAuth = require("../../utils/auth");

router.get("/", (req, res) => {
  CarInfo.findAll({
    include: [
      {
        model: Company,
        attributes: ["id", "name"],
      },
    ],
  })
    .then((carData) => res.json(carData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/", (req, res) => {
  CarInfo.findOne({
    where: {
      id: req.params.id,
    },
    include: [
      {
        model: Company,
        attributes: ["id", "category_name"],
      },
    ],
  })
    .then((carData) => {
      if (!carData) {
        res.status(404).json({ message: "No car found with this Id." });
        return;
      }
      res.json(carData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post("/", withAuth, async (req, res) => {
  try {
    const newCar = await CarInfo.create({
      ...req.body,
      company_id: req.session.company_id,
    });

    res.status(200).json(newProject);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put("/:id", withAuth, async (req, res) => {
  CarInfo.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((updatedCars) => res.json(updatedCars))
    .catch((err) => {
      res.status(400).json(err);
    });
});

router.delete("/:id", withAuth, async (req, res) => {
  try {
    const carData = await CarInfo.destroy({
      where: {
        id: req.params.id,
        company_id: req.session.company_id,
      },
    });

    if (!carData) {
      res.status(404).json({ message: "No car found with this id." });
      return;
    }

    res.status(200).json(carData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
