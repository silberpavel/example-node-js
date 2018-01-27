var express = require('express');
var bodyParser = require('body-parser');

// app is server
var app = express()

var artists = [
  {
    id: 1,
    name: "Metallica",
  },
  {
    id: 2,
    name: "Iron Maiden",
  },
  {
    id: 3,
    name: "Deep Purple",
  },
  {
    id: 4,
    name: Date.now(),
  }
]
 
app.get('/', function (req, res) {
  res.send('Hello API');              // .SEND responce
})

app.get('/artists', function (req, res) {
  res.send(artists);              
})

app.get('/artists/:id', function (req, res) {

  console.log(req.params);  // log name of request after /

  // in order to find element in array
  var artist = artists.find(function(artist) {    
    return artist.id === Number(req.params.id)
  });
  res.send(artist);              
})


app.listen(3083);
console.log('API app started!');