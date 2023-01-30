const { MongoId } = require('../../services/interface.service/extraClasses')

module.exports.account = {
  username: String,
  firstname: String,
  lastname: String,
  password: String,
  email: String,
  roles: [String],
}

module.exports.miniUser = {
  username: String,
  email: String,
  _id: MongoId
}

module.exports.minimizeAccount = (account) => ({
  username: account.username,
  email: account.email,
  _id: account._id.toString()
})