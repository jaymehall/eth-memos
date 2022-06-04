const mongoose = require("mongoose");

const MemoSchema = new mongoose.Schema(
  {
    title: { type: String },
    content: {
      id: mongoose.Schema.Types.ObjectId,
      type: String
    },
    // createdAt: {
    //   type: Date,
    //   default: Date.now,
    // },
    // updatedAt: {
    //   type: Date,
    //   default: Date.now
    // }
  },
  { timestamps: true }
);

module.exports = mongoose.model("memo", MemoSchema);
