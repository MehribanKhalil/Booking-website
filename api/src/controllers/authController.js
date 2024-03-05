import asyncHandler from "express-async-handler";
import generateToken from "../utils/generateToken.js";
import { User } from "../models/userModel/userModel.js";
import sendMail from "../utils/sendEmail.js";
import bcrypt from 'bcrypt'

export const authWithGoogle = async (req, res) => {
  try {
    const { tokens } = await oauth2Client.getToken(req.query.code);
    oauth2Client.setCredentials(tokens);
    const people = google.people({ version: "v1", auth: oauth2Client });
    const me = await people.people.get({
      resourceName: "people/me",
      personFields: "emailAddresses,names,photos",
    });


    let user = await User.findOne({
      email: me.data.emailAddresses[0].value,
    });
    if (!user) {
      const avatarUrl = me.data.photos[0]
        ? me.data.photos.url
        : "default-avatar-url";
      user = new User({
        avatar: avatarUrl,
        firstName: me.data.names[0].givenName,
        lastName: me.data.names[0].familyName || " ",
        username: `${me.data.names[0].givenName}${
          me.data.names[0].familyName || " "
        }`,
        email: me.data.emailAddresses[0].value,
        password: crypto.randomBytes(20).toString("hex"),
        googleId: me.data.resourceName.split("/")[1],
        verified: true,
      });
      await user.save();
    }

    generateToken(user);

    res.redirect(process.env.CLIENT_URL);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getOauth = async (req, res) => {
  try {
    const url = oauth2Client.generateAuthUrl({
      access_type: "offline",
      scope: ["profile", "email"],
    });
    res.json({ url });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//USER REGISTER
export const userRegister = async (req, res) => {
  try {
    const { email, userName, firstName, lastName, password } = req.body;

    // const { error } = User().validateUser(req.body);
    // if (error) {
    //   return res.status(400).json(error.details[0].message);
    // }


    const user = await User.findOne({
      email,
    });

    if (user) {
      return res
        .status(400)
        .json({ message: "User already exists. Please sign in" });
    }
    const newUser = new User({
      email,
      firstName,
      lastName,
      userName,
      password,
    });

    newUser.emailVerification();
    await newUser.save();

    const emailText = `Please click the following link to verify your email: 
   ${process.env.CLIENT_URL}/verify?token=${newUser.emailVerificationToken}`;

    await sendMail(newUser.email, "Please verify your email", emailText);

    res.status(201).json({ message: "Please verify your email" });
  } catch (error) {
    console.log(error);
  }
};

//USER LOGIN
export const userLogin = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email: email });
  if (!user) { 
    return res.status(400).json({ message: "Invalid email or password" });
  }
  if (!user.verified) {
    return res.status(403).json({ error: 'Email not verified' })
  }


  if (user && (await user.matchedPassword(password))) {
    generateToken(res, user);

    return res.status(201).json({ user });
  } else {
    res.status(400).json({ message: "Invalid email or password" });
  }
});

//USER LOGOUT
export const userLogOut = asyncHandler(async (req, res) => {
  res.cookie("access_token", "", {
    httpOnly: true,
    expires: new Date(0),
  });
  res.status(200).json({ message: "User log out" });
});

//VERIFY EMAIL
export const sendVerify = asyncHandler(async (req, res) => {
  const { token } = req.query;
  const user = await User.findOne({
    emailVerificationToken: token,
  });
  if (!user) {
    return res.status(400).json({ error: "User not found" });
  }
  user.verified = true;
  user.emailVerificationToken = undefined;

  generateToken(res, user);

  await user.save();
  res.status(200).json({ message: "Account confirmed" });
});

//GET USER
export const getUserProfile = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "User profile" });
});

//UPDATE USER
export const updateUserProfile = asyncHandler(async (req, res) => {
  const { error } = User.validateForUpdate(req.body);

  if (error) {
    return res.status(400).send(error.details[0].message);
  }
  const { id } = req.params;

  if (req.body.hasOwnProperty("password")) {
    req.body.password = await bcrypt.hash(req.body.password, 10);
  }

  const updateUser = await User.findByIdAndUpdate(
    id,
    { ...req.body },
    { new: true, runValidators: true }
  );
  if (!updateUser) {
    res.status(400).json({ error: "User not found" });
  }
  res.status(200).json({ updateUser });
});


//Change password
export const changePassword = async (req, res) => {
  try {
    const { currentPassword, newPassword } = req.body
    const { _id } = req.user

    const findCurrentUser = await User.findById(_id)

    const isValidPassword = await findCurrentUser.matchedPassword(currentPassword)

    if (!isValidPassword) return res.status(400).json({ message: 'Password is not valid' })

    const hashPassword = await bcrypt.hash(newPassword, 10)
    const findUser = await User.findByIdAndUpdate(
      findCurrentUser._id,
      {
        password: hashPassword
      },
      { new: true }
    )
    if (!findUser) return res.status(404).json({ message: 'User not found' })

    await findUser.save()
    res.status(200).json({ message: 'Password changed successfully' })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}