var express = require('express')

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
  }
]
 
app.get('/', function (req, res) {
  res.send('Hello API');              // send responce
})

app.get('/artists', function (req, res) {
  res.send(artists);              
})

app.get('/artists/:id', function (req, res) {

  console.log(req.params);  //name of request after /

  var artist = artists.find(function(artist) {    // in order to find element in array
    return artist.id === Number(req.params.id)
  });
  res.send(artist);              
})


app.listen(3083);
console.log('API app started!');