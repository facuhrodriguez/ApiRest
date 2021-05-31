const express = require("express");
const router = express.Router();
const playerController = require("../controllers/playerController");

router.get("", playerController.findAll);

router.get("/:playerId", playerController.findById);

router.post("", playerController.create);

router.delete("/:playerId", playerController.deleteById);

router.put("/:playerId", playerController.updateById);

module.exports = router;
