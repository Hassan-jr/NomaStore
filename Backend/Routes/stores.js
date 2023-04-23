const express = require("express");
const router = express.Router();
const {
  getStores,
  createStore,
  deleteStore,
  updateStore,
  addSubs,
  delSubs
} = require("../Controllers/Stores");

router.route("/").get(getStores).post(createStore);

router.route("/:id").delete(deleteStore).put(updateStore);

// For subts
router.route("/subs/:id").delete(delSubs).put(addSubs);

module.exports = router;
