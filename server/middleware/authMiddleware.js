const jwt = require("jsonwebtoken");
const User = require("../models/User");

const protect = async (req, res, next) => {
  try {
    console.log(req.headers);
    console.log("Authorization:", req.headers.authorization);
    let token;

    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      token = req.headers.authorization.split(" ")[1];

      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      req.user = await User.findById(decoded.id).select("-password");

      return next();
    }

    return res.status(401).json({
      success: false,
      message: "Not authorized. No token.",
    });

  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Token invalid.",
    });
  }
};

module.exports = protect;