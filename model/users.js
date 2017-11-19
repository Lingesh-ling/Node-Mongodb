const mongoose = require('mongoose');
var validator = require('validator');

var userdetails = mongoose.model('userdetails', {
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
    minlength:6
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
  userdetails
}
