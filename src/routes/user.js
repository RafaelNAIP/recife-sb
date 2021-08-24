const { Router } = require("express")
const UserController = require("../controllers/UserController")

const UserRouter = Router()

UserRouter.post("/users", UserController.create)

UserRouter.put("/users", UserController.edit)

UserRouter.get("/users", UserController.index)

UserRouter.delete("/users", UserController.delete)

module.exports = UserRouter