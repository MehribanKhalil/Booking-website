import mongoose from "mongoose";
// import hashPassword from "../middleware/hashPassword.js";
import Joi from "joi";
import bcrypt from "bcrypt";
import hashPassword from "../../middleware/hashPassword.js";
const { Schema } = mongoose;


const userSchema = new Schema(
  {
    email: {
      type: String,
      required: [true, "Please provide your email"],
      unique: true,
      lowercase: true,
    },
    firstName: {
      type: String,
      required: [true, "Please tell us your name!"],
      minlength: 3,
      maxlength: 30,
    },
    bookings: [{type:Schema.Types.ObjectId, ref:"Bookings"}],
    lastName: {
      type: String,
      required: [true, "Please tell us your last name!"],
      minlength: 3,
      maxlength: 30,
    },
    // mobileNumber:{
    //   type: Number,
    //   required: [true, "Please provide a mobile number!"],
    // },
    // image: { type: String },
    password: {
      type: String,
      required: [true, "Please provide a password!"],
      minlength: 3,
    },
    userName: {
      type: String,
      required: [true, "Please provide a userName!"],
    },
    role: {
      type: String,
      enum: ["user", "admin",'superAdmin'],
      required: true,
      default: "user",
    },
  },
  { timestamps: true }
);


const schema = Joi.object({
  email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] },}).trim(),
  firstName: Joi.string().min(3).max(30).trim(),
  lastName: Joi.string().min(3).max(30).trim(),
  // mobileNumber: Joi.number(),
  // image: Joi.string().trim(),
  password: Joi.string().trim(),
  userName: Joi.string().trim(),
  role: Joi.string().trim(),
});

  // .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))



//Validation for new users
userSchema.methods.validateUser = function (userObject) {
  schema.required()
  return schema.validate(userObject);
};

//Validation for update users
userSchema.statics.validateForUpdate = function (userObject) {
  return schema.validate(userObject);
};

userSchema.methods.toJSON = function() {
  const user = this.toObject();

  // delete user._id;
  // delete user.createdAt;
  // delete user.updatedAt;
  // delete user.password;
  // delete user.__v;

  return user;
 }

userSchema.pre("save", hashPassword);

userSchema.methods.matchedPassword= async function(enteredPassword){
  return await bcrypt.compare(enteredPassword, this.password)
}

export const User = mongoose.model("User", userSchema);
