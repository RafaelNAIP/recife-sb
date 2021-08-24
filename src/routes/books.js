const { Router } = require("express")

const BookController = require("../controllers/BookController")

const bookRouter = Router()

bookRouter.post("/books", BookController.create)
bookRouter.post("/books/unit", BookController.addUnit)


module.exports = bookRouter