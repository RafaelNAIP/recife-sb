const User = require("../models/user")

class UserController {
  index(req,res){
    const all = await User.find()
    return res.json(all)
  }
}

module.exports = new UserController()