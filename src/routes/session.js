const { Router } = require("express")

const SessionController = require("../controllers/SessionController")
const JwtAuthProvider = require("../providers/JwtAuthProvider")

const sessionRouter = Router()

const sessionController = new SessionController(new JwtAuthProvider())

sessionRouter.post("/login", sessionController.authenticate.bind(sessionController))

module.exports = sessionRouter