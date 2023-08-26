const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { User } = require("../db");

const userService = {
  //signup service
  signup: async (user) => {
    const newUser = new User(user);
    const hashedPassword = await bcrypt.hash(user.password, 10);
    newUser.password = hashedPassword;
    await newUser.save();

    const token = jwt.sign({ id: newUser._id }, process.env.SECRET, {
      expiresIn: "1d",
    });

    delete user.password;

    return {
      accessToken: token,
      message: "Created user successfully!",
      user,
    };
  },

  // login service
  login: async (user) => {
    const { email, password } = user;
    const userInDb = await User.findOne({ email }).lean();
    let accessToken = null;

    if (!userInDb) {
      return {
        accessToken,
        message: `User with email ${email} not found in database`,
      };
    }

    const validLogin = await bcrypt.compare(password, userInDb.password);

    if (!validLogin) {
      const message = "Password is not matching";
      return {
        accessToken,
        message: `Wrong password`,
      };
    }

    accessToken = jwt.sign({ id: userInDb._id }, process.env.SECRET, {
      expiresIn: "1d",
    });

    return {
      accessToken,
      message: `Logged in successfully`,
    };
  },
};

module.exports = { userService };
