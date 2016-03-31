var fs = require('fs')
var destination = "/Users/mdigioia/Desktop/images"
var express = require('express');
var app = express();
app.use(express.static(__dirname + '/public'));

app.get('/api/all-images', function(req, res){
  var filepaths = fs.readdirSync(destination)
  res.json(filepaths.filter(function(file){
    return file.match(/\.jpg/);
  }));
});

app.get('/:imageName', function(req, res){
  var filename = destination + "/" + req.params.imageName + ".jpg";
  res.sendFile(filename);
});



app.listen(3000);
