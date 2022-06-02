const router = require("express").Router();
const Memo = require("../models/memos");

router.post("/memo", async (req, res) => {
  try {
    const newMemo = new Memo({
      item: req.body.item
    });
    const saveMemo = await newMemo.save();
    res.status(200).json("Memo added successfully!");
  } catch (err) {
    res.json(err);
  }
});

module.exports = router;