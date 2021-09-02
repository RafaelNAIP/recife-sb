import * as yup from "yup"
import ValidationMiddleware from "../middlewares/ValidationMiddleware"


const createUsersSchema = yup.object().shape({
  name: yup.string().required(),
  cpf: yup.string().length(14).required(),
  email: yup.string().email().required(),
  birthDate: yup.date().required(),
  userType: yup.string().required()
})

export default new ValidationMiddleware(createUsersSchema)