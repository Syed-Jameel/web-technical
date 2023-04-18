const mongoose = require("mongoose");
const validator = require("validator");

//defining the structure of database
const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
  },
  email: {
    type: String,
    required: true,
    unique:true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Invalid Email Id");
      }
    },
  },
  mobile: {
    type: String,
    required: true,
    min: 10,
  },
  message: {
    type: String,
    required: true,
    minlength: 3,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

//we need a collection
const users = mongoose.model("users", userSchema);
module.exports = users;
