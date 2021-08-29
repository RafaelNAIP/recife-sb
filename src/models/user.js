const mongoose = require("mongoose")

const User =  { name: String, cpf: String, email: String, birthDate: Date, userType: String }

module.exports = mongoose.model("users", User)