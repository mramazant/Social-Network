const router = require("express").Router();
const {
  createThought,
  getThought,
  getSingleThought,
  deleteThought,
  createReaction,
  removeReaction,
} = require("../../controllers/thoughtController.js");
// **********************
router.route("/").get(getThought).post(createThought);
router.route("/:thoughtId").get(getSingleThought).delete(deleteThought);
router
  .route("/:thoughtId/reactions")
  .post(createReaction)
  .delete(removeReaction);

module.exports = router;
