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
app.get("/properties", function (req, res) {
  res.sendFile(path.join(publicDir, "/properties.html"));
});

app.get("/brush", function (req, res) {
  res.sendFile(path.join(publicDir, "/brush.html"));
});


app.get("/paint-api-1", function (req, res) {
  res.sendFile(path.join(publicDir, "/click-paint.html"));
});

app.get("/animation", function (req, res) {
  res.sendFile(path.join(publicDir, "/animation.html"));
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