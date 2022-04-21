const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const jwt = require("jsonwebtoken")
const app = express()
require("dotenv").config()

const userRouter = require("./routes/users")
const authRouter = require("./routes/auth")
const todoRouter = require("./routes/todos")

const { findOldToken } = require("./models/OldToken")

const PORT = process.env.PORT
const URL = process.env.MONGO_URL

app.use(express.json())
app.use(cors())

app.use( async (req, res, next) => {
  const authHeader = req.header("Authorization")
  const SECRET = process.env.JWT_SECRET

  if (authHeader) {
    const token = authHeader.split(" ")[1]
    if (await findOldToken(token)) {
      res.status(401).json({ error: "Token invalid, log in again" })
    } else {
      req.user = jwt.verify(token, SECRET)
    }
  }
  next()
})

app.use("/auth", authRouter)
app.use("/users", userRouter)
app.use("/todos", todoRouter)

mongoose.connect(URL)

app.listen(PORT, () => {
  console.log(`Started Express server on port ${PORT}`)
})