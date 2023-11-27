const lutins = require("../data/data.json");

function getAll(req, res) {
  lutins ? res.json(lutins) : res.sendStatus(404);
}

module.exports = { getAll };
