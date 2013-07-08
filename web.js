var express = require('express');

var fbuffer = fs.readFileSync("index.html");

var str_buffer = fbuffer.toString();

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send(str_buffer);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

