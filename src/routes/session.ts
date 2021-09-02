import { Router } from "express"

import SessionController from "../controllers/SessionController"
import JwtAuthProvider from "../providers/JwtAuthProvider"

const sessionRouter = Router()

const sessionController = new SessionController(new JwtAuthProvider())

sessionRouter.post("/login", sessionController.authenticate.bind(sessionController))

export default sessionRouter