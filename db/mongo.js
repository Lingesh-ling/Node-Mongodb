const mongoose = require('mongoose');

//const db = mongoose.connect('mongodb://localhost:27017/scoreCard', {useMongoClient:true})
const db = mongoose.connect('mongodb://Lingesh:Ling123@ds113826.mlab.com:13826/india', {useMongoClient:true})

mongoose.Promise = global.Promise;

module.exports = {
  mongoose
}
