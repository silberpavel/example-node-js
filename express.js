var express = require('express')
var app = express()
 


app.get('/', function (req, res) {
  res.send('html');
  console.log(res.status.name);
})

app.listen(3000);
console.log('NOW, You are listening port 3000');