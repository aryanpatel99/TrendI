const jwt = require("jsonwebtoken");

const adminAuth = (req, res, next) => {
  try {
    const { token } = req.headers;
    if (!token) {
      return res.json({
        success: false,
        message: "No token, authorization denied",
      });
    }

    const decode = jwt.verify(token, process.env.JWT_SECRET);

    if (decode.email !== process.env.ADMIN_EMAIL || decode.role !== "admin") {
      return res.json({
        success: false,
        message: "Admin resource. Access denied",
      });
    }

    next();
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: error.message,
    });
  }
};



module.exports = adminAuth;