const playerService = require("../services/playerService");

function findAll(req, res) {
  playerService
    .findAll()
    .then((players) => {
      return res.status(200).json(players);
    })
    .catch((error) => {
      console.log("error", error);
      return res.status(500).json(error);
    });
}

function create(req, res) {
  const playerData = req.body.playerData;
  playerService
    .create(playerData)
    .then((players) => {
      return res.status(201).json(players);
    })
    .catch((error) => {
      return res.status(500).json(error);
    });
}

function findById(req, res) {
  const playerId = req.params.playerId;
  playerService
    .findById(playerId)
    .then((player) => {
      return res.status(200).json(player);
    })
    .catch((error) => {
      return res.status(500).json(error);
    });
}

function deleteById(req, res) {
  const playerId = req.params.playerId;
  playerService
    .deleteById(playerId)
    .then((data) => {
      return res.status(200).json(data.ok);
    })
    .catch((error) => {
      console.log(error);
      return res.status(500).json(error);
    });
}

function updateById(req, res) {
  const playerId = req.params.playerId;
  const playerData = req.body.playerData;
  playerService
    .updateById(playerId, playerData)
    .then((data) => {
      return res.status(200).json(data);
    })
    .catch((error) => {
      return res.status(500).json(error);
    });
}

module.exports = {
  updateById,
  deleteById,
  findAll,
  findById,
  create,
};
