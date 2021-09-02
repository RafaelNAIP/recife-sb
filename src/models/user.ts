import * as mongoose from "mongoose"

const User = new mongoose.Schema({ 
  name: String, 
  cpf: String, 
  email: String, 
  birthDate: Date, 
  userType: String 
})

export default mongoose.model("users", User)