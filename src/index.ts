import express from "express";
import mongoose from "mongoose"
mongoose.connect('mongodb://localhost:27017/recife-sb', {useNewUrlParser: true, useUnifiedTopology: true})

import UserRouter from "./routes/user"
import bookRouter from "./routes/books"
import sessionRouter from "./routes/session";

const app = express()
app.use(express.json())


app.listen(3000,() => {
  console.log("application started")
})

app.use(UserRouter)

app.use(bookRouter)

app.use(sessionRouter)


