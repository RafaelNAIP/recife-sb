import { NextFunction, Request, Response } from "express"
import yup from "yup"
import Middleware from "./Middleware"

class ValidationMiddleware implements Middleware {
  constructor(private schema: yup.ObjectSchema<any>){

  }

  async use(req: Request, res: Response, next: NextFunction){
    try{
      await this.schema.validate(req.body)
      return next()
    } catch (error: any){
      return res.status(400).json({
        name: error.name,
        errors: error.errors
      })
    }
  }
}

export default ValidationMiddleware