const router = require('express').Router()

const utilController = require('../controllers/util')

// Controllers -----

router.get(
  '/checkUsernameAvailability',
  utilController.checkUsernameAvailability
)

router.get('/', (req, res) => {
  res.send('Please read documentation for the API. (util)')
})

// Export -----
module.exports = router
