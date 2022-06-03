const router = require("express").Router();
const Memo = require("../models/Memo");

router.get("/memos", async (req, res) => {
  try {
    const memos = await Memo.find();
    res.status(200).json(memos);
  } catch (err) {
    res.json(err);
    res.status(500);
    res.send("unexpected server error when retreiving a memo!");
  }
});

router.post("/memos", async (req, res) => {
  try {
    const newMemo = new Memo({
      content: req.body.content
    });
    const saveMemo = await newMemo.save();
    res.status(201).json("Memo added successfully!");
  } catch (err) {
    res.json(err);
    res.status(501);
    res.send("unexpected server error when posting a memo!");
  }
});

router.put("/memos/:id", async (req, res) => {
  try {
    console.log(req.params.id);
    const updateMemo = await Memo.findOneAndUpdate(
      { id: req.params.id },
      {
        content: req.body.content
      },
      { new: true }
    );
    console.log(updateMemo);
    res.status(200).json("Memo updated!");
  } catch (err) {
    res.json(err);
    res.status(501);
    res.send("unexpected server error when updating a memo!");
  }
});

module.exports = router;
