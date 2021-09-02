import { Router } from "express"
import UserController from "../controllers/UserController"
import createUsers from "../validations/createUsers"
import updateUsers from "../validations/updateUsers"

const UserRouter = Router()

UserRouter.post("/users", createUsers.use.bind(createUsers), UserController.create)

UserRouter.put("/users", updateUsers.use.bind(updateUsers) ,UserController.edit)

UserRouter.get("/users", UserController.index)

UserRouter.delete("/users/:id", UserController.delete)

export default UserRouter