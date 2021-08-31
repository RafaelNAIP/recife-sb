class AuthMiddleware {
  constructor(authProvider){
    this.authProvider = authProvider
  }

  use(req, res, next){
    try{
      const auth = req.headers.authorization

      if(!auth){
        return res.status(401).json({
          message: "missing token",
        })
      }

      const [, token] = auth.split(" ")

      const user = this.authProvider.verify(token)

      req.userId = user.id

      return next()

    } catch (err) {
      return res.status(401).json({
        message: "invalid token",
        err
      })
    }
  }

}

module.exports = AuthMiddleware