const { Router } = require("express")

const BookController = require("../controllers/BookController")

const bookRouter = Router()

bookRouter.post("/books", BookController.create)
bookRouter.post("/books/unit", BookController.addUnit)
bookRouter.put("/books", BookController.edit)
bookRouter.delete("/books", BookController.remove)
bookRouter.get("/books", BookController.index)


module.exports = bookRouter