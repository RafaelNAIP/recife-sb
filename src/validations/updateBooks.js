const yup = require("yup")
const ValidationMiddleware = require("../middlewares/ValidationMiddleware")

const updateBookSchema = yup.object().shape({
  id: yup.string().required(),
  name: yup.string(),
  publisher: yup.string(),
  author: yup.string(),
  releaseDate: yup.date(),
  description: yup.string(),
  units: yup.number().positive().integer()
})

module.exports = new ValidationMiddleware(updateBookSchema)