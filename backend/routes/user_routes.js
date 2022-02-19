const express = require('express')
const router = express.Router()
const {
  registerUser,
  loginUser,
  getMe,
} = require('../controllers/user_controller')
const { protect } = require('../middleware/auth_middleware')

router.post('/register', registerUser)
router.post('/login', loginUser)
router.get('/me', protect, getMe)

module.exports = router
