const router = require("express").Router();
const { CarInfo, Company } = require("../../models");
const withAuth = require("../../utils/auth");

router.get("/", (req, res) => {
  CarInfo.findAll({
    include: [
      {
        model: Company,
        attributes: ["id"],
      },
    ],
  })
    .then((carData) => res.json(carData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/:id", (req, res) => {
  CarInfo.findOne({
    where: {
      id: req.params.id,
    },
    include: [
      {
        model: Company,
        attributes: ["id"],
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

router.post("/", async (req, res) => {
  console.log(req.body);
  try {
    const newCar = await CarInfo.create({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      phone: req.body.phone,
      vehicle: req.body.vehicle,
      description: req.body.description,
    });
    console.log(newCar);
    req.session.save(() => {
      res.status(200).json(newCar);
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.put("/:id", async (req, res) => {
  CarInfo.update(
    { description: req.body.description },
    {
      where: {
        id: req.params.id,
      },
    }
  )
    .then((updatedCars) => res.json(updatedCars))
    .catch((err) => {
      res.status(400).json(err);
    });
});

router.delete("/:id", async (req, res) => {
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
