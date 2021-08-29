const { Router } = require("express")

const booksValidation = require("../validations/books")

const BookController = require("../controllers/BookController")
const updateBooks = require("../validations/updateBooks")

const bookRouter = Router()


bookRouter.post("/books", booksValidation.use.bind(booksValidation), BookController.create)
bookRouter.post("/books/:id/unit", BookController.addUnit)
bookRouter.put("/books", updateBooks.use.bind(updateBooks) ,BookController.edit)
bookRouter.delete("/books/:id", BookController.remove)
bookRouter.get("/books", BookController.index)


module.exports = bookRouter