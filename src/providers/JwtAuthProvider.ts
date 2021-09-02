import User from "../entities/user"
import AuthProvider from "./AuthProvider"

const jwt = require("jsonwebtoken")

class JwtAuthProvider implements AuthProvider {
  #SECRET = "puts"
  #EXPIRES_IN = "1d"

  sign(user: User){
    return jwt.sign({ id: user._id }, this.#SECRET, { expiresIn: this.#EXPIRES_IN })
  }

  verify(token: string){
    return jwt.verify(token, this.#SECRET)
  }
}

export default JwtAuthProvider