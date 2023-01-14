const { Schema, model } = require("mongoose");
const reactionSchema = require("./Reaction");
const thoughtSchema = new Schema(
  {
    thoughtText: [
      {
        type: String,
        Required: true,
        maxlength: 280,
        minlength: 1,
      },
    ],
    createdAt: {
      // ***********************************
      type: Date,
      default: Date.now,
    },
    username: {
      type: String,
      Required: true,
    },
    reactions: [
      reactionSchema,
      //   ********************************************
    ],
  },
  {
    timestamps: true,
    toJSON: {
      getters: true,
      virtuals: true,
    },
  }
);
thoughtSchema.virtual("reactionCount ").get(() => {
  return this.reactions.length;
});
const Thought = model("Thought", thoughtSchema);
module.exports = Thought;
