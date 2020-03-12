const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ChapterSchema = new Schema({
    title : {
        type: String,
        required: true
    },
    index: {
        type: Number,
        required: true
    },
    sections: [
        { title : {type: String}, body: {type: Array} }
    ]
});

const Chapter = mongoose.model('chapter', ChapterSchema);
module.exports = Chapter;