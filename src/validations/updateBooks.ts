import * as yup from "yup"
import ValidationMiddleware from "../middlewares/ValidationMiddleware"


const updateBookSchema = yup.object().shape({
  id: yup.string().required(),
  name: yup.string(),
  publisher: yup.string(),
  author: yup.string(),
  releaseDate: yup.date(),
  description: yup.string(),
  units: yup.number().positive().integer()
})

export default new ValidationMiddleware(updateBookSchema)