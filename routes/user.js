const router = require('express').Router()

const validateToken = require('../middlewares/validateToken')

const userController = require('../controllers/user')

// Controllers -----

router.get('/:userId', validateToken, userController.details_get)

router.get('/', validateToken, userController.list_get)

router.post('/', userController.create_post)

router.delete('/:userId', validateToken, userController.delete_delete)

router.get('*', (req, res) => {
  res.send('Please read documentation for the API. (user)')
})

// Export -----
module.exports = router
