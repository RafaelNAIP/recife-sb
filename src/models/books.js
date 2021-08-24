const mongoose = require("mongoose")

const Books = new mongoose.Schema({
  name: String,
  publisher: String,
  author: String,
  releaseDate: Date,
  description: String,
  units: Number,
})

module.exports = mongoose.model("books", Books)
