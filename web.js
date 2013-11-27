var express = require('express');
var app = express();
app.use(express.logger());

var infile = "/home/ubuntu/bitstarter/bitstarter.html";


app.get('/', function(request, response) {
  response.send(fs.fileReadSync(infile));
});


var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
