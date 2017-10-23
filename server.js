/*********************
 * Module dependencies
 *********************/
var express = require('express'),
    rts     = require('./routes'),
    http    = require('http'),
    path    = require('path'),
    bodyParser = require('body-parser');

/***************
 * Configuration
 ***************/
var app = module.exports = express();
app.engine('html', require('ejs').renderFile);
app.set('port', process.env.PORT || 8080);
app.set('views', __dirname + '/app/views');
app.set('view engine', 'html');
// This sets the root directory of the web server --> "" = current directory
app.use(express.static(path.join(__dirname, '')));
// Need this to send data through ajax
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));


/**************
 * Start Server
 **************/
app.listen(8080, '0.0.0.0', function () {
  console.log('Server running at http://0.0.0.0:' + app.get('port'));
});


/********
 * Routes
 ********/

// Need this to eliminate favicon.ico erro
app.route('/favicon.ico').get(function(req, res) {
    res.sendStatus(204);
}); 
app.route('/').get(rts.index);
app.route('/mongo_post').post(rts.mongo_post)
app.route('/:name').get(rts.partials);
var ret = app.route('/python/:name').post(rts.python)
// app.route('*').get(rts.index);

