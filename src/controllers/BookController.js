const Books = require("../models/books")


class BooksController{
  async create(req, res){
    const {name, publisher, author, releaseDate, description, units} = req.body
    
    const newBook = await Books({ name, publisher, author, releaseDate, description, units })

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
  async edit(req, res){
    const { id, name, publisher, author, releaseDate, description, units } = req.body

    const editBook = await Books.findById(id)

    editBook.name = name ?? editBook.name
    editBook.publisher = publisher ?? editBook.publisher
    editBook.author = author ?? editBook.author
    editBook.releaseDate = releaseDate ?? editBook.releaseDate
    editBook.description = description ?? editBook.description
    editBook.units = units?? editBook.units

    await editBook.save()

    res.json(editBook)
  }
  async remove(req, res){
    const { id } = req.body

    const book = await Books.findByIdAndRemove(id)

    res.json(book)
  }
  async index(req, res){
    const allBooks = await Books.find()
    res.json(allBooks)
  }
}

module.exports = new BooksController()