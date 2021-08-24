const express = require("express")
const mongoose = require("mongoose")
mongoose.connect('mongodb://localhost:27017/recife-sb', {useNewUrlParser: true, useUnifiedTopology: true})

const UserRouter = require("./routes/user")
const bookRouter = require("./routes/books")

const app = express()
app.use(express.json())


app.listen(3000,() => {
  console.log("application started")
})

app.use(UserRouter)

app.use(bookRouter)


