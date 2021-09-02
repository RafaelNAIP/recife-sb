import * as yup from "yup"
import ValidationMiddleware from "../middlewares/ValidationMiddleware"

const bookSchema = yup.object().shape({
  name: yup.string().required(),
  publisher: yup.string().required(),
  author: yup.string().required(),
  releaseDate: yup.date().required(),
  description: yup.string(),
  units: yup.number().required().positive().integer()
})

export default new ValidationMiddleware(bookSchema)