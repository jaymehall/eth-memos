const mongoose = require("mongoose");

const MemoSchema = new mongoose.Schema(
  {
    title: { type: String },
    content: {
      id: mongoose.Schema.Types.ObjectId,
      type: String
    },
    createdAt: {
      type: Date,
      immutable: true,
    },
    updatedAt: {
      type: Date,
      immutable: true
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("memo", MemoSchema);
