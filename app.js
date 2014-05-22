
/**
 * Module dependencies.
 */

var express = require('express');
var twitterControllerModule = require('./controllers/twitterController');
var twitterLogicModule = require('./model/twitterLogic');
var twitterDataModule = require('./data/twitterDataMemory');

//var twitterData = twitterDataModule();
//var twitterLogic = twitterLogicModule(twitterData);
//var twitterController = twitterControllerModule(twitterLogic);
//change


var twitterController = twitterControllerModule(twitterLogicModule(twitterDataModule()));


var user = require('./routes/user');
var http = require('http');
var path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.bodyParser());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/tweets', twitterController.list); // Return all tweets
app.post('/tweets', twitterController.add); // Add a new tweet
app.get('/tweets/:tweetId', twitterController.details); // Add a new tweet
app.delete('/tweets/:tweetId', twitterController.remove); // Deletes a tweet
app.get('/users', user.list);


http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
