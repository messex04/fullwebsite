var express = require('express');
var app = express();
app.get('/', function(req,res) {
    res.sendFile('index.html');
    });
const path = require('path');
app.get('/',function(req,res){res.sendFile(path.join(__dirname, 'index.html')); //__dirname : Ritorna la cartel
});
app.listen(3000, function () {
console.log('Example app listening on port 3000!');
});