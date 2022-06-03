const mongoose = require("mongoose");

const MemoSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: {
    id: mongoose.Schema.Types.ObjectId,
    type: String,
    timestamps: true,
    required: true
  }
});

module.exports = mongoose.model("memo", MemoSchema);
