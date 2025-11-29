const express = require('express')
const { loginUser, registerUser, adminLogin, getUsersOrders } = require('../controllers/userController')
// const { verifyToken } = require('../middleware/auth')


const userRouter = express.Router() 

userRouter.post('/register',registerUser)
userRouter.post('/login',loginUser)
userRouter.post('/admin',adminLogin)
// userRouter.get('/orders',verifyToken,getUsersOrders)


module.exports = userRouter

//511
