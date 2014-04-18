var express = require('express'),
    app = express();


app.get('/', function(req, res){
  res.end("Hello World");
});

app.listen(3000);