var fs = require('fs')
var read = require('fs-readdir-recursive')
var destination = "/Users/mdigioia/Desktop/images/"
var express = require('express');
var app = express();
app.use(express.static(__dirname + '/public'));

app.get('/api/all-images', function(req, res){
  var filepaths = read(destination)

  res.json(filepaths.filter(function(file){
    return file.match(/\.(jpg|jpeg|png)$/i)
  }));
});

app.get('/:imagepath*', function(req, res){
  var filename = destination + "/" + req.params.imagepath + req.params[0];
  res.sendFile(filename);
});



app.listen(3000);
