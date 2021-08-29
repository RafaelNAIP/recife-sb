const User = require("../models/user")

class UserController {
  async index(req,res){
    const all = await User.find()
    return res.json(all)
  }
  async create(req,res){
    const request = req.body
    const name = request.name
    const cpf = request.cpf
    const email = request.email
    const birthDate = request.birthDate
    const userType = request.userType
  
    const newUser = new User({ name, cpf, email, birthDate, userType })
  
    await newUser.save()
  
    return res.json(newUser)
  }
  async edit(req, res){
    const request = req.body
    const id = request.id
  
    const editUser = await User.findById(id)
    
    editUser.name = request.name ? request.name : editUser.name 
    editUser.cpf = request.cpf ? request.cpf : editUser.cpf
    editUser.email = request.email ? request.email : editUser.email
    editUser.birthDate = request.birthDate ? request.birthDate : editUser.birthDate
    editUser.userType = request.userType ? request.userType : editUser.userType
  
    await editUser.save()
  
    return res.json(editUser)  
  }

  async delete(req, res){
    const id = req.params.id

    const filter = User.findById(id)
    const deleteUser = await User.deleteOne(filter)

    console.log(deleteUser)

    return res.json(deleteUser)
  }

}

module.exports = new UserController()