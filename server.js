const express = require('express');
const bodyParser = require('body-parser');
const _ = require('lodash');
const {ObjectId} = require('mongodb');

const {mongoose} = require('./db/mongo.js');
const {Scores} = require('./model/India.js');
const {userdetails} = require('./model/users.js')

var port = process.env.PORT || 3000;

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

app.delete('/Score/:id', (req, res) => {
  var id = req.params.id;

  if(!ObjectId.isValid(id)) {
    return res.send('wrong');
  }
  Scores.findByIdAndRemove(id).then((doc) => {
    res.send(doc)
  }).catch((e) => {
    res.send(e)
  })
})



app.patch('/Score/:id', (req, res) => {
  var id = req.params.id;
  var body = _.pick(req.body,['Dhawan']);
  body.Kohli = 8000;


  if(!ObjectId.isValid(id)) {
    return res.send('wrong');
  }
  Scores.findByIdAndUpdate(id,{$set:body},{new:true}).then((doc) => {
    res.send(doc)
  }).catch((e) => {
    res.send(e)
  })
})

app.post('/userss', (req,res) => {
  var body = _.pick(req.body, ['email','password']);

  var userr = new userdetails(body);

  userr.save().then((doc) => {res.send(doc)}).catch((e) => {res.send(e)})

})


app.listen(port, () => {
  console.log('2')
})
