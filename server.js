const { url } = require('inspector');
const sanitizeHtml = require('sanitize-html');

var express    = require('express'),
    path       = require('path'),
    pug        = require('pug'),
    PORT       = process.env.PORT || 8080
    app        = express(),
    marked     = require('marked'),
    yaml = require('js-yaml');
    fs   = require('fs');

app.use(express.static('public'));
app.set('view engine', 'pug');
app.set('views', './views');

app.get('/', function(req, res) {
  res.render('index');
});

app.use('/about', function(req, res) {
  res.render('about');
});

app.use('/contato', function(req, res) {
  res.render('contato');
});

app.get('/articles', function(req, res) {
  res.render('articles');
}); 

app.get('/article/:filename', function(req, res) {
  const fileName = extractPostName(req)
  var path = `./posts/${fileName}.md`;
    var file = fs.readFileSync(path, 'utf8');
    var textMarkdown = marked.parse(file.toString())
    var html = sanitizeHtml(textMarkdown)
    res.render('article',{post:html})
});

var server = app.listen(PORT, function() {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Node is listening at http://' + host + ':' + port);
});

extractPostName = (req) => {
  let url = new URL(req.url, `http://${req.headers.host}`)
  let arrayUrl = url.pathname.split('/')
  return pathFile = arrayUrl[arrayUrl.length -1]
}