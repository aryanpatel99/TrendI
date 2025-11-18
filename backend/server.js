const express = require('express')
const cors = require('cors') 
const dotenv = require('dotenv/config')
const connectDB = require('./config/mongodb')
const { connectCloudinary } = require('./config/cloudinary')
const userRouter = require('./routes/userRoute')
const productRouter = require('./routes/productRoute')


const app = express()
const port = process.env.PORT || 4000
connectDB()
connectCloudinary()


app.use(express.json())
app.use(cors())  //to access the backend from any ip 


// api endpoints 
app.use('/api/user',userRouter)
app.use('/api/product',productRouter)

app.get('/', (req, res) => {
    res.json({
        message: "API is running"
    })
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})