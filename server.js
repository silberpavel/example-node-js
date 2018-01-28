
var path = require('path');
var express = require('express');
var filename = path.normalize('/Users//Refsnes//\demo_path.js');


var app = express()

app.set('view engine', 'ejs');

app.use('/link', express.static('public'));

app.get('/', function (req, res) {
  // res.sendFile(__dirname + "/index.html");              
  res.render('index');     
});

app.get('/about', function (req, res) {
  // res.sendFile(__dirname + "/about.html");  
  res.render('about');     
});

app.get('/news/:id', function (req, res) {
  var obj = {
    title: "Last News", 
    id: 5,
    paragraphs: ['Simple', 'Regular text', 'Numbers', 88, 11],
    myPathFileName: filename
  };
  res.render('news', { newsId: req.params.id, newParam: 8811, myObj: obj});   
  // lesson #14 Gosha
});

app.listen(3083);
console.log('API app started! on port 3083');