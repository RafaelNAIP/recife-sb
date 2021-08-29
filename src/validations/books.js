const yup = require("yup")
const ValidationMiddleware = require("../middlewares/ValidationMiddleware")

const bookSchema = yup.object().shape({
  name: yup.string().required(),
  publisher: yup.string().required(),
  author: yup.string().required(),
  releaseDate: yup.date().required(),
  description: yup.string(),
  units: yup.number().required().positive().integer()
})

module.exports = new ValidationMiddleware(bookSchema)