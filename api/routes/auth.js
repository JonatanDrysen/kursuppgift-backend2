const express = require("express")
const router = express()

const { loginUser, logoutUser, requireLogin } = require("../controllers/auth")


router.post("/login", loginUser)
router.post("/logout", requireLogin, logoutUser)

module.exports = router