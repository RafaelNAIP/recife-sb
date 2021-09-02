import { NextFunction, Request, Response } from "express";

export default interface Middleware {
  use(req: Request, res: Response, next: NextFunction): Promise<void|Response>
}