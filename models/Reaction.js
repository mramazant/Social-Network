const { Schema, Types } = require("mongoose");

const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      // ******************************
      default: () => new Types.ObjectId(),
    },

    reactionBody: {
      type: String,
      Required: true,
      maxlength: 280,
    },
    username: {
      type: String,
      Required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    // ***********************************
    timestamps: true,
    toJSON: {
      getters: true,
      virtuals: true,
    },
    id: false,
  }
);

module.exports = reactionSchema;
