import { NextFunction, Request, Response } from "express"
import AuthProvider from "../providers/AuthProvider"
import Middleware from "./Middleware"

class AuthMiddleware implements Middleware {
  constructor(private authProvider: AuthProvider ){
    
  }

  async use(req: Request, res: Response, next: NextFunction){
    try{
      const auth = req.headers.authorization

      if(!auth){
        return res.status(401).json({
          message: "missing token",
        })
      }

      const [, token] = auth.split(" ")

      const user = this.authProvider.verify(token)

      res.locals.userId = user._id

      return next()

    } catch (err) {
      return res.status(401).json({
        message: "invalid token",
        err
      })
    }
  }

}

export default AuthMiddleware