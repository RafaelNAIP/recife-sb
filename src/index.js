const express = require("express")
const mongoose = require("mongoose")
mongoose.connect('mongodb://localhost:27017/recife-sb', {useNewUrlParser: true, useUnifiedTopology: true})

const User = mongoose.model("users", { name: String, cpf: Number, email: String, birthDate: Date })

const app = express()
app.use(express.json())


app.listen(3000,() => {
  console.log("application started")
})

app.post("/users", async (req,res) => {
  const request = req.body
  const name = request.name
  const cpf = request.cpf
  const email = request.email
  const birthDate = request.birthDate

  const newUser = new User({ name, cpf, email, birthDate })

  const resfoda = await newUser.save()
  console.log(resfoda)

  return res.json(newUser)
})

app.put("/users", async (req,res) => {
  const request = req.body
  const id = request.id
  const name = request.name

  const editUser = await User.findById(id)
  editUser.name = name
  await editUser.save()

  return res.json(editUser)  
})



