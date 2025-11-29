const jwt = require("jsonwebtoken");

const authUser = async (req, res, next) => {
  const {token} = req.headers
  if(!token){
    return res.json({
      success: false,
      message: "Authorization denied, Login again"
    })
  }

  try {
    const token_decode = jwt.verify(token,process.env.JWT_SECRET)
    req.body.userId = token_decode.id
    next()
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: error.message
    })
  }
}

module.exports =  authUser;

// const verifyToken = (req, res, next) => {
//   try {
//     const token = req.headers.authorization?.split(" ")[1];

//     if (!token) {
//       return res.status(401).json({
//         success: false,
//         message: "No token, authorization denied",
//       });
//     }

//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     req.user = decoded.id;
//     next();
//   } catch (error) {
//     return res.status(401).json({
//       success: false,
//       message: "Invalid or expired token",
//     });
//   }
// };


// module.exports = { verifyToken };