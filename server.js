var express = require('express');
var mongoose = require('mongoose');
var cors = require('cors');

var app = express();
app.use(cors());

mongoose.connect('mongodb://localhost/mydb')

var personSchema = {
  firstName:String,
  lastName:String,
  email:String
};

var Person = mongoose.model('Person', personSchema, 'people');

app.get('/people', function (req, res) {
  Person.find(function (err, doc) {
    res.send(doc);
  });
});

app.listen(3000);
