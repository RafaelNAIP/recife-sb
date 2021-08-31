const { Router } = require("express")

const booksValidation = require("../validations/books")
const AuthMiddleware = require("../middlewares/AuthMiddleware")
const BookController = require("../controllers/BookController")
const updateBooks = require("../validations/updateBooks")
const JwtAuthProvider = require("../providers/JwtAuthProvider")

const bookRouter = Router()


const auth = new AuthMiddleware(new JwtAuthProvider)

bookRouter.post("/books", auth.use.bind(auth), booksValidation.use.bind(booksValidation), BookController.create)
bookRouter.post("/books/:id/unit", auth.use.bind(auth), BookController.addUnit)
bookRouter.put("/books", auth.use.bind(auth), updateBooks.use.bind(updateBooks) ,BookController.edit)
bookRouter.delete("/books/:id", auth.use.bind(auth), BookController.remove)
bookRouter.get("/books", BookController.index)


module.exports = bookRouter