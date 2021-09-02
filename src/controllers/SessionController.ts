import { Request, Response } from "express"
import User from "../models/user"
import AuthProvider from "../providers/AuthProvider"

class SessionController {
  constructor(private authProvider: AuthProvider){
    this.authProvider = authProvider
  }

  async authenticate(req: Request, res: Response){
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

export default SessionController