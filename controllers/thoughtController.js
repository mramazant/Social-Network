const { ObjectId } = require("mongoose").Types;
const { User, Thought } = require("../models");
// *****************all of the page**************
const thoughtController = {
  createThought(req, res) {
    Thought.create(req.body)
      .then((thought) => res.json(thought))
      .catch((err) => res.status(500).json(err));
  },
  getThought(req, res) {
    Thought.find()
      .then((thought) => res.json(thought))
      .catch((err) => res.status(500).json(err));
  },
  getSingleThought(req, res) {
    Thought.findOne({ _id: req.params.thoughtId })
      .select("-__v")
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: "No thought with that ID" })
          : res.json(thought)
      )
      .catch((err) => res.status(500).json(err));
  },
  deleteThought(req, res) {
    User.findOneAndDelete({ _id: req.params.thoughtId })
      .then((thought) =>
        !user
          ? res.status(404).json({ message: "No thought with that ID" })
          : thought.deleteMany({ _id: { $in: thought } })
      )
      .then(() => res.json({ message: "Thought deleted!" }))
      .catch((err) => res.status(500).json(err));
  },
};
module.exports = thoughtController;
