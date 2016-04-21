var PORT_NUMBER = 3333;

var express = require('express');
var app = express();

// Serve static files
app.use(express.static(__dirname + '/../client'));

app.listen(PORT_NUMBER, function() {
  console.log("Listening on port", PORT_NUMBER);
});