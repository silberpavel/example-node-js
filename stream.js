var fs = require('fs');

// берем инфу по частям из большого текст файла 
var myReadShort = fs.createReadStream(__dirname + '/index.html', 'utf8');
// var myWriteShort = fs.createWriteStream(__dirname + '/news.txt');

// Записываем в текст файл по частям
// myReadShort.on('data', function(chunk) {
//     console.log('NEW DATA RECIEVED! \n\n\n\n\n\n\n');
//     myWriteShort.write(chunk);
// });

// PIPE - doing same, Pipe is usable to work with server

// myReadShort.pipe(myWriteShort);


module.exports = {
    fs: fs,
    myReadShort: myReadShort
}




