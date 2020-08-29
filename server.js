const { url } = require('inspector');

var express    = require('express'),
    path       = require('path'),
    pug        = require('pug'),
    PORT       = process.env.PORT || 8080
    app        = express(),
    yaml = require('js-yaml');
    fs   = require('fs');

app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'pug');
app.set('views', './views');

app.get('/', function(req, res) {
  res.render('index');
});

app.use('/about', function(req, res) {
  res.render('about');
});

app.use('/articles', function(req, res) {
  res.render('articles');
});

app.get('/api/articles/*', function(req, res) {
  const fileName = extractPostName(req)
  try {
    let doc = yaml.safeLoad(fs.readFileSync(`./public/posts/${fileName}.yml`))
    res.json(doc)
  } catch (error) {
    console.log(error)
  }
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