import * as yup from "yup"
import ValidationMiddleware from "../middlewares/ValidationMiddleware"


const updateUsersSchema = yup.object().shape({
  id: yup.string().required(),
  name: yup.string(),
  cpf: yup.string().length(14),
  email: yup.string().email(),
  birthDate: yup.date(),
  userType: yup.string()
})

export default new ValidationMiddleware(updateUsersSchema)