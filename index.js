var path = require('path');
var express = require('express');
var app = express();
var http = require('http').Server(app);
var port = process.env.PORT || 3000;

var publicPath = path.resolve(__dirname + '/');

app.use(express.static(publicPath));

app.get('/', function(req, res){
  res.sendFile('home.html', {root: publicPath});
});

app.get('/contact', function(req, res){
  res.sendFile('contact_us.html', {root: publicPath});
});

http.listen(port, function(){
  console.log('listening on *:' + port);
});
