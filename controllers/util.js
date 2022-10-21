const User = require('../models/user').model

exports.checkUsernameAvailability = (req, res) => {
  const { username } = req.query

  User.findOne({ username })
    .then(doc => {
      res.send({
        username,
        isAvailable: !doc
      })
    })
    .catch(err => {
      console.error({ err })
      return res.status(500).send({ err })
    })
}
