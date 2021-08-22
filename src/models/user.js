const mongoose = require("mongoose")

const User =  { name: String, cpf: Number, email: String, birthDate: Date, userType: String }

module.exports = mongoose.model("users", User)