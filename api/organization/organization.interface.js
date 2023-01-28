const { MongoId } = require('../../services/interface.service/extraClasses')

module.exports.organization = {
  name: String,
  desc: String
}

module.exports.miniOrg = {
  name: String,
  _id: MongoId
}

module.exports.minimizeOrg = (org) => ({
  name: org.name,
  _id: org._id.toString()
});