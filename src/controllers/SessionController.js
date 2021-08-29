const User = require("../models/user")

class SessionController {
  constructor(authProvider){
    this.authProvider = authProvider
  }

  async authenticate(req, res){
    const { email } = req.body

    const user = await User.findOne({
      email
    })

    if(!user){
      return res.status(400).json({
        message: "user not found"
      })
    }

    const token = this.authProvider.sign(user)

    return res.json({
      token
    })

  }

}

module.exports = SessionController