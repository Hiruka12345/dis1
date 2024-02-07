var http = require('http');
http.createServer(function (req1, res) {
  res.write("I'm alive");
  res.end();
}).listen(8080);