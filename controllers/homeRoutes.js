const router = require("express").Router();
const { CarInfo, Customer, Company } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", async (req, res) => {});

router.get("/carinfo/:id", async (req, res) => {});

router.get("/custprof", withAuth, async (req, res) => {});

router.get("/compprof", withAuth, async (req, res) => {});
