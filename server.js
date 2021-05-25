const express = require("express");
const app = express();
const playerService = require("./services/playerService");
const bodyParser = require("body-parser");

app.use(express.json());
app.get("/api/player", (req, res) => {
  playerService
    .findAll()
    .then((players) => {
      return res.status(200).json(players);
    })
    .catch((error) => {
      console.log("error", error);
      return res.status(500).json(error);
    });
});

app.get("/api/player/:playerId", (req, res) => {
  const playerId = req.params.playerId;
  playerService
    .findById(playerId)
    .then((player) => {
      return res.status(200).json(player);
    })
    .catch((error) => {
      return res.status(500).json(error);
    });
});

app.post("/api/player", (req, res) => {
  const playerData = req.body.playerData;
  playerService
    .create(playerData)
    .then((players) => {
      return res.status(201).json(players);
    })
    .catch((error) => {
      return res.status(500).json(error);
    });
});

app.delete("/api/player/:playerId", (req, res) => {
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
});

app.put("/api/player/:playerId", (req, res) => {
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
});

app.get("/", (req, res) => {
  res.send("Welcome!");
});

app.listen(3000, () => {
  console.log("SERVER LISTENING ON PORT", process.env.PORT);
});
