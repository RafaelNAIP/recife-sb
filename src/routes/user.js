const { Router } = require("express")
const UserController = require("../controllers/UserController")
const createUsers = require("../validations/createUsers")
const updateUsers = require("../validations/updateUsers")

const UserRouter = Router()

UserRouter.post("/users", createUsers.use.bind(createUsers), UserController.create)

UserRouter.put("/users", updateUsers.use.bind(updateUsers) ,UserController.edit)

UserRouter.get("/users", UserController.index)

UserRouter.delete("/users/:id", UserController.delete)

module.exports = UserRouter