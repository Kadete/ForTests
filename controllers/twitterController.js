
/*
 * Tweetwe module
 */
 
 var twitterLogic //= require("./twitterLogic");

module.exports = function(twitterLogic) {
 
	function list(req, res){
		//res.send('index');
		res.render('tweets',  { title : "All tweets", tweets: twitterLogic.getAll()});
	};

	var add = function(req, res){
		res.send('add:' + req.body.message + " + " +  req.body.author);
		//res.render('index', { title: 'Express' });
	};

	var details = function(req, res){
		//res.send('details: ' + req.params.tweetId);
		res.render('details',  twitterLogic.get(req.params.tweetId));
	};

	var remove = function(req, res){
		res.send('remove: ' + req.params.tweetId);
		//res.render('index', { title: 'Express' });
	};
	
	return { list: list, add: add, details: details, remove: remove };
};