const express = require("express")
const mongoose = require("mongoose")
const UserController = require("./controllers/UserController")
mongoose.connect('mongodb://localhost:27017/recife-sb', {useNewUrlParser: true, useUnifiedTopology: true})

const User = mongoose.model("users", { name: String, cpf: Number, email: String, birthDate: Date, userType: String })

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
  const userType = request.userType

  const newUser = new User({ name, cpf, email, birthDate, userType })

  await newUser.save()

  return res.json(newUser)
})

app.put("/users", async (req,res) => {
  const request = req.body
  const id = request.id

  const editUser = await User.findById(id)
  
  editUser.name = request.name ? request.name : editUser.name 
  editUser.cpf = request.cpf ? request.cpf : editUser.cpf
  editUser.email = request.email ? request.email : editUser.email
  editUser.birthDate = request.birthDate ? request.birthDate : editUser.birthDate
  
  await editUser.save()

  return res.json(editUser)  
})

app.get("/users", UserController.index)



