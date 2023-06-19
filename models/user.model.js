
const mongoose = require("mongoose");


const userSchema = new mongoose.Schema({
  id: {
    type: Number,
  },
  name: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
  },
})


exports.User = mongoose.model("user",userSchema)