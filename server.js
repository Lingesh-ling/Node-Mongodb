const express = require('express');
const bodyParser = require('body-parser');

const {ObjectId} = require('mongodb');

const {mongoose} = require('./db/mongo.js');
const {Scores} = require('./model/India.js')

var port = 3000;

var app = express();

app.use(bodyParser.json());

app.post('/Score', (req, res) => {
var india = new Scores({
  Dhawan:req.body.Dhawan,
  Kohli:req.body.Kohli
});

india.save().then((doc) => {
  res.send(doc)
},(e) => {
  res.send(e)
})

});



app.get('/Score',(req, res) => {


Scores.find().then((doc) => {
  res.send(doc)
});
})

app.listen(3000, () => {
  console.log('2')
})
