const router = require("express").Router();
const {
  createReaction,
  getReaction,
  getSingleReaction,
  deleteReaction,
} = require("../../controllers/reactionController.js");
// **********************
router.route("/").get(getReaction).post(createReaction);

module.exports = router;
