var express    = require('express'),
    path       = require('path'),
    pug        = require('pug')
    PORT       = process.env.PORT || 8080
    app        = express();

app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'pug');
app.set('views', './views');

app.get('/', function(req, res) {

  res.render('index');
});

var server = app.listen(PORT, function() {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Node is listening at http://' + host + ':' + port);
});