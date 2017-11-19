const mongoose = require('mongoose');
var validator = require('validator');

var userss = mongoose.model('userss', {
  email: {
    type: String,
    required: true,
    unique:true,
    validate:{
    validator: validator.isEmail,
    message:'must be valid email'
  }
  },
  password: {
    type: String,
    require:true,
    minLength:6
  },
  tokens:[{
    access: {
      type: String,
      require: true
    },
    token: {
      type: String,
      require: true
    }
  }]
})

module.exports = {
  userss
}
