const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ChapterSchema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true
  },
  index: {
    type: Number,
    required: true
  },
  sections: { type: String }
});

const Chapter = mongoose.model("chapter", ChapterSchema);
module.exports = Chapter;
