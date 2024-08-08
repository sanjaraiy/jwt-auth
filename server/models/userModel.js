const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
   username: {
      type: String,
      unique: [true, "username is already taken"],
      required: [true, "Please provide your username"],
      trim: true
   },
   email: {
    type: String,
    unique: [true, "email is already used"],
    required: [true, "Please provide your email address"],
    lowercase: true,

   },
   password: {
    type: String,
    minLength: [5, "character should be more than 5"],
   },
   forgotPasswordToken: {
      type: String,
   },
   forgotPasswordExpiryDate: {
      type: Date
   }


},{timestamps:true});

const User = mongoose.model('user',userSchema);

module.exports = User;
