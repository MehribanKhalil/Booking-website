import bcrypt from "bcrypt";

//PASSWORD HASHING
const hashPassword = async function (next) {
  if (this.isModified("password")) {
    try {
      const hashedPassword = await bcrypt.hash(this.password, 10);
      this.password = hashedPassword;
    } catch (error) {
      next(error);
    }
  }
  next();
};

export default hashPassword;
