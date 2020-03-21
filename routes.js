const express = require("express");
const Chapter = require("./models/Chapter");

const router = express.Router();

router.get("/", (req, res) => {
  res.json({ msg: "Hello world" });
});

// @Route GET /chapters
// @@ Desc Get all chapters
router.get("/chapters", async (req, res) => {
  try {
    const chapterList = await Chapter.find({});
    res.json(chapterList);
  } catch (error) {
    res.status(400).json({ msg: "Something went wrong with finding chapters" });
  }
});

// @@ Route Post /new
// @@ Desc Create new chapter
router.post("/chapters", async (req, res) => {
  const { title, index, sections } = req.body;
  const chapterFields = {
    title,
    index,
    sections
  };

  try {
    const newChapter = new Chapter(chapterFields);
    await newChapter.save();
    res.json({ msg: "Chapter created" });
  } catch (err) {
    console.log(err);
    res.status(500).send("Server error");
  }
});

module.exports = router;
