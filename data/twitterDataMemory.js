
/*
 * Twitter data module
 */
 
 var Enumerable = require("linq");
 
 function getInitialTweets() {
	var t = [];
	for(var i = 1; i <= 20; ++i) {
		t.push({ id: i, message: "tweet" + i, author: "author" + i%4}); 
	}
	return t;
 }
 

module.exports = function() {
	var tweets = getInitialTweets();
	var enumerableTweets = Enumerable.from(tweets);
	
	function getAllInternal(){
		return tweets; 
	};


	function getInternal(id){
		return enumerableTweets.where("t=>t.id==="+ id).first(); 
	};

	
	return { 
		getAll: getAllInternal,
		get: getInternal
	};
};

