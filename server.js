const { url } = require('inspector');

var express    = require('express'),
    path       = require('path'),
    pug        = require('pug'),
    PORT       = process.env.PORT || 8080
    app        = express(),
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

app.use('/articles', function(req, res) {
  res.render('articles');
});

app.get('/api/articles', function(req, res) {
  try {
    let doc = yaml.safeLoadAll(fs.readFileSync(`posts/general-posts.yml`))
    res.json(doc)
  } catch (error) {
    console.log(error)
  }
});

//I'm stucked in this request, the static files are comming like "::8080/articlese/index.css" instead just ::8080/index.css
app.get('/articlese/:filename', function(req, res) {
  console.log(req.params)
  // const fileName = extractPostName(req)
  let assets;
    try {
     assets = yaml.safeLoad(fs.readFileSync(`posts/${fileName}.yml`))
   } catch (error) {
     console.log(error)
   }
  res.render('article', assets)

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