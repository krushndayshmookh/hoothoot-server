const router = require('express').Router()

const validateToken = require('../middlewares/validateToken')

const authController = require('../controllers/auth')

// Controllers -----

router.get('/sign-in/status', validateToken, authController.signIn_status_get)

router.post('/sign-in', authController.signIn_post)

router.get('*', (req, res) => {
  res.send('Please read documentation for the API. (auth)')
})

// Export -----
module.exports = router
