const jwt = require("jsonwebtoken")

class JwtAuthProvider {
  #SECRET = "puts"
  #EXPIRES_IN = "1d"

  sign(user){
    return jwt.sign(user._id, this.#SECRET, { expiresIn: this.#EXPIRES_IN })
  }

  verify(token){
    return jwt.verify(token, this.#SECRET)
  }
}

module.exports = JwtAuthProvider