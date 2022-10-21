const { v4: uuidv4 } = require('uuid')

const User = require('../models/user').model

exports.list_get = (req, res) => {
  const { type } = req.query

  let query = {}

  if (type) {
    query.type = type
  }

  User.find(query)
    .select('-passphrase')
    .lean()
    .then(doc => {
      return res.send(doc)
    })
    .catch(err => {
      console.error({ err })
      return res.status(500).send({ err })
    })
}

exports.details_get = (req, res) => {
  const { userId } = req.params

  let query = {
    _id: userId
  }

  User.findOne(query)
    .select('-passphrase')
    .lean()
    .then(doc => {
      return res.send(doc)
    })
    .catch(err => {
      console.error({ err })
      return res.status(500).send({ err })
    })
}

exports.create_post = (req, res) => {
  const { username } = req.body

  const passphrase = uuidv4()

  let newUser = new User({
    username,
    passphrase,
  })

  newUser
    .save()
    .then(doc => {
      return res.send(doc)
    })
    .catch(err => {
      console.error({ err })
      return res.status(500).send({ err })
    })
}

exports.delete_delete = async (req, res) => {
  const { userId } = req.params

  let query = {
    _id: userId
  }

  User.deleteOne(query)
    .then(doc => {
      return res.send(doc)
    })
    .catch(err => {
      console.error({ err })
      return res.status(500).send({ err })
    })
}
