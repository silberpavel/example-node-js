var express = require('express');

var app = express()

app.set('view engine', 'ejs');

app.get('/', function (req, res) {
  res.sendFile(__dirname + "/index.html");              
});

app.get('/about', function (req, res) {
  res.sendFile(__dirname + "/about.html");       
});

app.get('/news/:id', function (req, res) {
  var obj = {
    title: "Last News", 
    id: 5,
    paragraphs: ['Simple', 'Regular text', 'Numbers', 88, 11]
  };
  res.render('news', { newsId: req.params.id, newParam: 8811, myObj: obj});   // lesson #14 Gosha
});



app.listen(3083);
console.log('API app started! on port 3083');