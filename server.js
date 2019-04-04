var express = require("express"),
    app = express(),
    bodyParser = require('body-parser'),
    errorHandler = require('errorhandler'),
    hostname = 'localhost',
    port = parseInt(process.env.PORT, 10) || 4567,
    publicDir = process.argv[2] || __dirname + '/public',
    path = require('path');

app.get("/", function (req, res) {
  res.sendFile(path.join(publicDir, "/index.html"));
});

app.get("/worklet", function (req, res) {
  res.sendFile(path.join(publicDir, "/PlaceholderBoxPainter.js"));
});

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static(publicDir));
app.use(errorHandler({
  dumpExceptions: true,
  showStack: true
}));

console.log("Simple static server showing %s listening at http://%s:%s", publicDir, hostname, port);
app.listen(port, hostname);