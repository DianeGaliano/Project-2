const router = require("express").Router();
const { CarInfo } = require("../../models");
const withAuth = require("../../utils/auth");

router.post("/", withAuth, async (req, res) => {});

router.put("/", withAuth, async (req, res) => {});

router.delete("/:id", withAuth, async (req, res) => {});
