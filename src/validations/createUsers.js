const yup = require("yup")
const ValidationMiddleware = require("../middlewares/ValidationMiddleware")

const createUsersSchema = yup.object().shape({
  name: yup.string().required(),
  cpf: yup.string().length(14).required(),
  email: yup.string().email().required(),
  birthDate: yup.date().required(),
  userType: yup.string().required()
})

module.exports = new ValidationMiddleware(createUsersSchema)