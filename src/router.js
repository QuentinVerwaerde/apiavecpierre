const express = require("express");
const router = express.Router();

const lutins = require("./data/data.json");
const { getAll } = require("./controllers/lutinsController");

router.get("/lutins", getAll);

router.get("/lutins/:id", (req, res) => {
  const id = parseInt(req.params.id, 10);
  const lutin = lutins.find((l) => lutin.id === id);

  lutin ? res.json(lutin) : res.sendStatus(404);
});

router.post("/lutins/single", (req, res) => {
  const { id, name } = req.body;
  const lutin = lutins.find((l) => lutin.id === id);
  lutin ? res.json(lutin) : res.sendStatus(404);
});

module.exports = router;
