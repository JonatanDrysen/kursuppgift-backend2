const express = require("express")
const cors = require("cors")
const jwt = require("jsonwebtoken")
const mongoose = require("mongoose")
const app = express()
require("dotenv").config()

const userRouter = require("./routes/users")
const authRouter = require("./routes/auth")

const PORT = process.env.PORT
const URL = process.env.MONGO_URL

app.use(express.json())
app.use(cors())

app.use((req, _res, next) => {
  const authHeader = req.header("Authorization")
  const SECRET = process.env.JWT_SECRET

  if (authHeader) {
    const token = authHeader.split(" ")[1]
    req.user = jwt.verify(token, SECRET)
  }
  next()
})

app.use("/auth", authRouter)
app.use("/users", userRouter)

mongoose.connect(URL)

app.listen(PORT, () => {
  console.log(`Started Express server on port ${PORT}`)
})