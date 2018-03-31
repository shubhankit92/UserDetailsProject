var mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URL);

var detailsSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: String,
  userId: String
});

var UserInfo = mongoose.model('UserInfo', detailsSchema);
module.exports = UserInfo;