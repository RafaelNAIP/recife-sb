import { Router } from "express"
 
import booksValidation from "../validations/books"
import AuthMiddleware from "../middlewares/AuthMiddleware"
import BookController from "../controllers/BookController"
import updateBooks from "../validations/updateBooks"
import JwtAuthProvider from "../providers/JwtAuthProvider"

const bookRouter = Router()


const auth = new AuthMiddleware(new JwtAuthProvider)

bookRouter.post("/books", auth.use.bind(auth), booksValidation.use.bind(booksValidation), BookController.create)
bookRouter.post("/books/:id/unit", auth.use.bind(auth), BookController.addUnit)
bookRouter.put("/books", auth.use.bind(auth), updateBooks.use.bind(updateBooks) ,BookController.edit)
bookRouter.delete("/books/:id", auth.use.bind(auth), BookController.remove)
bookRouter.get("/books", BookController.index)


export default bookRouter