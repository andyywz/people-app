var express = require('express');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var cors = require('cors');

var app = express();
app.use(cors());
app.use(bodyparser.urlencoded());
app.use(bodyparser.json());

mongoose.connect('mongodb://localhost/mydb')

var personSchema = {
  firstName:String,
  lastName:String,
  email:String
};

var Person = mongoose.model('Person', personSchema, 'people');

app.get('/people', function (req, res) {
  Person.find().select("firstName").sort('-_id').exec(function (err, people) {
    if (err) {
      res.send(err);
    }
    res.send(people);
  });
});

app.get('/people/:id', function (req, res) {
  Person.findById(req.params.id, function (err, person) {
    if (err) {
      res.send(err);
    }
    res.send(person);
  });
});

app.put('/people/:id', function (req, res) {
  Person.findByIdAndUpdate(req.params.id, req.body, function (err, person) {
    if (err) {
      res.send(err);
    }
    res.send(person + ' has been updated!');
  });
});

app.post('/people', function (req, res) {
  var person = new Person(req.body);
  
  person.save(function (err) {
    if (err) {
      res.send(err);
    }
    res.send(person + ' has been saved!');
  });
});

app.delete('/people/:id', function (req, res) {
  Person.findByIdAndRemove(req.params.id, function (err, person) {
    if (err) {
      res.send(err);
    }
    res.send(person + ' has been deleted')
  })
})

app.listen(3000);
