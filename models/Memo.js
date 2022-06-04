const mongoose = require("mongoose");

const MemoSchema = new mongoose.Schema(
  {
    title: { type: String },
    content: {
      id: mongoose.Schema.Types.ObjectId,
      type: String
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("memo", MemoSchema);
