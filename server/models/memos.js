const mongoose = require("mongoose");

const MemoSchema = new mongoose.Schema({
  item: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("memo", MemoSchema);
