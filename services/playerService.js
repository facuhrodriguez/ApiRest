const db = require("../db/db");
const player = require("../models/player").playerSch;

async function create(playerData) {
  try {
    await db.connection();
    let playersInserted = await player.create(playerData);
    return playersInserted;
  } catch (error) {
    throw error;
  }
}

async function findById(playerId) {
  try {
    await db.connection();
    let players = await player.findById(playerId);
    return players;
  } catch (error) {
    throw error;
  }
}

async function findAll() {
  try {
    await db.connection();
    let players = await player.find();
    return players;
  } catch (error) {
    throw error;
  }
}

async function deleteById(playerId) {
  try {
    await db.connection();
    let playersDeleted = await player.deleteOne({ _id: playerId });
    return playersDeleted;
  } catch (error) {
    throw error;
  }
}

async function updateById(playerId, playerData) {
  try {
    await db.connection();
    let playersUpdate = await player.updateOne({ _id: playerId }, playerData);
    return playersUpdate;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  create,
  findById,
  findAll,
  updateById,
  deleteById,
};
