import bcrypt from "bcrypt";

//PASSWORD HASHING
const hashPassword = async function (next) {
  if (this.isModified("password")) {
    try {
      const saltRounds=10
      const hashedPassword = await bcrypt.hash(this.password,saltRounds);
      this.password = hashedPassword;
    } catch (error) {
      next(error);
    }
  }
  next();
};

export default hashPassword;
