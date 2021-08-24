const Books = require("../models/books")


class BooksController{
  async create(req, res){
    const {name, pusblisher, author, releaseDate, description, units} = req.body
    
    const newBook = await Books({ name, pusblisher, author, releaseDate, description, units })

    await newBook.save()

    return res.json(newBook)
  }
  async addUnit(req, res){
    const { id, units } = req.body

    const book = await Books.findById(id)

    book.units += parseInt(units,10)
    await book.save()

    return res.json(book)
  }
}

module.exports = new BooksController()