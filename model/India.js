const mongoose = require('mongoose');

var Scores = mongoose.model('Scores', {
  Dhawan: {
    type:Number
  },
  Kohli: {
    type:Number
  }
});

module.exports = {
  Scores
}
