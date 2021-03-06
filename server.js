const express = require("express");
const app = express();
const cors = require("cors");
const playerRouter = require("./routes/playerRoutes");
app.use(express.json());
app.use(cors());
app.get("/", (req, res) => {
  res.send("Welcome!");
});

app.listen(3000, () => {
  console.log("SERVER LISTENING ON PORT", process.env.PORT);
});

app.use("/api/player", playerRouter);
