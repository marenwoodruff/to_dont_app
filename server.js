var express = require('express');
var app = express();
var hbs = require('hbs');

app.use('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
    res.send('Hello, friend');
});

var port = process.env.PORT || 3000;

app.listen(port, function() {
    console.log('listening on port ' + port);
})
