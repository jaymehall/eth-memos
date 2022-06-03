const mongoose = require("mongoose");

const MemoSchema = new mongoose.Schema({
  content: {
    id: mongoose.Schema.Types.ObjectId,
    type: String,
    timestamps: true,
    required: true
  }
});

module.exports = mongoose.model("memo", MemoSchema);
