import { Request, Response } from "express"
import Books from "../models/books"


class BooksController {
  async create(req: Request, res: Response) {
    const { name, publisher, author, releaseDate, description, units } = req.body

    const newBook = new Books({ name, publisher, author, releaseDate, description, units })
    await newBook.save()

    return res.json(newBook)


  }
  async addUnit(req: Request, res: Response) {
    const id = req.params.id

    const book = await Books.findById(id)

    book.units += 1
    await book.save()

    return res.json(book)
  }
  async edit(req: Request, res: Response) {
    const { id, name, publisher, author, releaseDate, description, units } = req.body

    const editBook = await Books.findById(id)

    editBook.name = name ?? editBook.name
    editBook.publisher = publisher ?? editBook.publisher
    editBook.author = author ?? editBook.author
    editBook.releaseDate = releaseDate ?? editBook.releaseDate
    editBook.description = description ?? editBook.description
    editBook.units = units ?? editBook.units

    await editBook.save()

    res.json(editBook)
  }
  async remove(req: Request, res: Response) {
    const { id } = req.params

    const book = await Books.findByIdAndRemove(id)

    res.json(book)
  }
  async index(req: Request, res: Response) {
    const allBooks = await Books.find()
    res.json(allBooks)
  }
}

export default new BooksController()