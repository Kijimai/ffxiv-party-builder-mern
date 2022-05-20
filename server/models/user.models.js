const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Username is required!"],
      minLength: [6, "Username must be at least 6 characters long!"],
    },
    email: {
      type: String,
      required: [true, "Email is required!"],
      unique: true,
    },
  },
  { timestamps: true }
)

module.exports.User = mongoose.model("User", UserSchema)
