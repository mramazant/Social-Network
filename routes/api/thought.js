const router = require("express").Router();
const {
  createThought,
  getThought,
  getSingleThought,
  deleteThought,
} = require("../../controllers/thoughtController.js");
// **********************
router.route("/").get(getThought).post(createThought);

module.exports = router;
