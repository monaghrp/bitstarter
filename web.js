var fs = require('fs');
var express = require('express');

var fbuffer = fs.readFileSync("index.html");

var str_buffer = fbuffer.toString('utf8',0, fbuffer.length);



var app = express.createServer(express.logger());


app.get('/', function(request, response) {
  response.send(str_buffer);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
