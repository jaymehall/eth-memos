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
      title: req.body.title,
      content: req.body.content
    });
    const saveMemo = await newMemo.save();
    res.status(201).json(saveMemo);
  } catch (err) {
    res.json(err);
    res.status(501);
    res.send("Unexpected server error when posting a memo!");
  }
});

router.put("/memos/:id", async (req, res) => {
  try {
    const updateMemo = await Memo.findOneAndUpdate(
      { _id: req.params.id },
      {
        title: req.body.title,
        content: req.body.content
      },
      { new: true }
    );
    res.status(200).json(updateMemo);
  } catch (err) {
    res.json(err);
    res.status(501);
    res.send("unexpected server error when updating a memo!");
  }
});

router.delete("/memos/:id", async (req, res) => {
  try {
    const deleteMemo = await Memo.remove({ _id: req.params.id });
    res.status(200).json("Memo deleted!");
  } catch (err) {
    res.json(err);
    res.status(501);
    res.send("unexpected server error when updating a memo!");
  }
});

module.exports = router;
