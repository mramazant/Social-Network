const { Schema, model } = require("mongoose");
const reactionSchema = require("./Reaction");
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: "this is required",
      maxlength: 280,
      minlength: 1,
    },
    createdAt: {
      // ***********************************
      type: Date,
      default: Date.now,
    },
    username: {
      type: String,
      required: true,
    },
    reactions: [
      reactionSchema,
      // ********************************************
    ],
  },
  {
    timestamps: true,
    toJSON: {
      getters: true,
      virtuals: true,
    },
    id: false,
  }
);
thoughtSchema.virtual("reactionCount").get(() => {
  return this.reactions.length;
});
const Thought = model("Thought", thoughtSchema);
module.exports = Thought;
