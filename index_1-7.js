var events = require('events');
var things = require('./things');

// console.log(__dirname);
// console.log(__filename);

// setTimeout(function() {
//     console.log('1 sec delay');
// }, 1000);

console.log("Variable export example => it's equal " + things.someValue);

console.log(things.array_counter([1, 2, 3, 4, 5]));
console.log(things.array_counter([1, 2, 5]));

console.log(things.multiply(1, 1));
console.log(things.multiply(4, 3));

// ================================================================
var myEvmit = new events.EventEmitter();
myEvmit.on('some_event', function(text) {
    console.log(text);
});

myEvmit.emit('some_event', 'This is Event lesson, text as argument (Gosha lesson #5)');

console.log('=================================  EVENTS   ===============================');
// ============================  EVENTS  =============================
var util = require('util');

var Cars = function(model) {
    this.model = model;
};

// Объект Car наследует events.EventEmitter (обработчик событий)
util.inherits(Cars, events.EventEmitter);

var bmw = new Cars('BMW');
var audi = new Cars('Audi');
var volvo = new Cars('Volvo');


var cars = [bmw, audi, volvo];
cars.forEach(function(car){
    car.on('speed', function(text){
        console.log(car.model + " speed is - " + text);
        
    })
});

bmw.emit('speed', '254.3 km/h');
audi.emit('speed', '182.5 km/h');

// ================================================================
// Sync Read and Write from files

var fs = require('fs');

// readFileSync читает, пока читает код не выполняется
var file_readed = fs.readFileSync('text.txt', 'utf8');
console.log(file_readed);

var msg = "Это тест на запись и создания текст файла и еще из msg =>" + file_readed;
var file_write = fs.writeFileSync('text2.txt', msg);

// ================================================================
console.log('===============================   mkdir/rm and write/read files  =================================');

// Async Read and Write from files
var fs2 = require('fs');

// readFile читает асинхроно. параметры (сам текст, кодировка, callback)
fs2.readFile('text2.txt', 'utf8', function(err, data) {
    console.log(data);
});

console.log('================================================================');

fs2.writeFile('soneNewText.txt', 'Async file writing test', function(err, data) {});

console.log('Test'); // For Async file reading demonstration (it's run first)

console.log('================================================================');

// Delete file (async)
fs.unlink('file.txt', function() { console.log('file deleted'); });

console.log('================================================================');
// Make and delete folders SYNC
// fs.mkdirSync('NEW-TEST-FOLDER');
// fs.rmdirSync('NEW-TEST-FOLDER');
console.log('================================================================');

// var fs3 = require('fs');

// fs.rmdir('NEW-TEST-FOLDER');

// Make and delete folders ASYNC
// fs.mkdir('NEW-TEST-FOLDER3', function() {
//     fs.writeFile('./NEW-TEST-FOLDER3/inside2.js', 'alert(\'World hold on!\');', function() {
//         console.log("It's WORKS! The file inside.js created in NEW-TEST-FOLDER");
//     });
// });

console.log('================================================================');

fs.unlink('./NEW-TEST-FOLDER3/inside2.js', function() {
    //files in folder must be deleted first
    fs.rmdir('NEW-TEST-FOLDER3', function() {});
});







