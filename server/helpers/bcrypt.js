const bcrypt = require('bcryptjs')

function hashing(password) {
  const salt = bcrypt.genSaltSync(10)
  const hash = bcrypt.hashSync(password, salt)
  return hash
}

function comparing(plainPass, hashPass) {
  const result = bcrypt.compareSync(plainPass, hashPass)
  return result
}

module.exports = { hashing, comparing }