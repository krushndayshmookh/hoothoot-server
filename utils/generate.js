const uniqueString = require('unique-string')

exports.key = () => {
  let s = Math.floor(Math.random() * 16)
  let e = s + 16
  return uniqueString().slice(s, e)
}

exports.secret = () => {
  return uniqueString()
}
