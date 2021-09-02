import * as mongoose from "mongoose"

const Books = new mongoose.Schema({
  name: String,
  publisher: String,
  author: String,
  releaseDate: Date,
  description: String,
  units: Number,
})

export default mongoose.model("books", Books)
